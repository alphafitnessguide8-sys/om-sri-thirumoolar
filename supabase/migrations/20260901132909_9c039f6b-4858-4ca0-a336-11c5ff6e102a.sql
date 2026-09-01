CREATE TABLE public.appointment_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  treatment text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.appointment_requests TO anon;
GRANT INSERT ON public.appointment_requests TO authenticated;
GRANT ALL ON public.appointment_requests TO service_role;
ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an appointment request" ON public.appointment_requests FOR INSERT TO anon, authenticated WITH CHECK (true);