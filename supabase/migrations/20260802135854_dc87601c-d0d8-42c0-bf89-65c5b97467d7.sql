-- ROLES
create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create policy "users read own roles" on public.user_roles
for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

-- auto-grant admin to the owner's email
create or replace function public.handle_new_user_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if lower(new.email) = 'dagger1959@gmail.com' then
    insert into public.user_roles (user_id, role) values (new.id, 'admin')
    on conflict do nothing;
  end if;
  return new;
end;
$$;

create trigger on_auth_user_created_role
after insert on auth.users
for each row execute function public.handle_new_user_role();

-- COMENTARIOS
create table public.comentarios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  ciudad text,
  mensaje text not null,
  aprobado boolean not null default false,
  created_at timestamptz not null default now()
);

grant select on public.comentarios to anon;
grant select, insert on public.comentarios to anon;
grant select, insert, update, delete on public.comentarios to authenticated;
grant all on public.comentarios to service_role;

alter table public.comentarios enable row level security;

create policy "public reads approved comments" on public.comentarios
for select to anon, authenticated using (aprobado = true);

create policy "anyone can submit a comment" on public.comentarios
for insert to anon, authenticated with check (
  aprobado = false
  and char_length(nombre) between 2 and 80
  and char_length(mensaje) between 5 and 2000
  and (ciudad is null or char_length(ciudad) <= 80)
);

create policy "admins read all comments" on public.comentarios
for select to authenticated using (public.has_role(auth.uid(), 'admin'));

create policy "admins update comments" on public.comentarios
for update to authenticated using (public.has_role(auth.uid(), 'admin'))
with check (public.has_role(auth.uid(), 'admin'));

create policy "admins delete comments" on public.comentarios
for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

-- CONTADOR DE VISITAS
create table public.visitas (
  id integer primary key default 1,
  total bigint not null default 0,
  constraint visitas_single_row check (id = 1)
);

insert into public.visitas (id, total) values (1, 0);

grant select on public.visitas to anon, authenticated;
grant all on public.visitas to service_role;
alter table public.visitas enable row level security;

create policy "anyone reads visit count" on public.visitas
for select to anon, authenticated using (true);

create or replace function public.registrar_visita()
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare v bigint;
begin
  update public.visitas set total = total + 1 where id = 1 returning total into v;
  return v;
end;
$$;

grant execute on function public.registrar_visita() to anon, authenticated;