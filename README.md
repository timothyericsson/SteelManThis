# SteelManThis

Playful Next.js homepage for SteelManThis, with a Supabase-backed waitlist API.

## Supabase

Required environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

The waitlist endpoint writes to `public.steelman_waitlist`. Run the SQL in
`supabase/migrations/202605270001_create_steelman_waitlist.sql` once in the
Supabase project before using the form in production.

The service role key is only used by the server route at `/api/waitlist`; do not
expose it in browser code.
