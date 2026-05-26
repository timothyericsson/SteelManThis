create table if not exists public.steelman_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'homepage',
  referrer text,
  user_agent text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.steelman_waitlist enable row level security;

create or replace function public.steelman_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists steelman_waitlist_set_updated_at on public.steelman_waitlist;

create trigger steelman_waitlist_set_updated_at
before update on public.steelman_waitlist
for each row
execute function public.steelman_set_updated_at();
