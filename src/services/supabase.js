import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dyapylllpbijtuljnflj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5YXB5bGxscGJpanR1bGpuZmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2Nzg2NTcsImV4cCI6MjA2NjI1NDY1N30.DUgVoW8Xnesq360_6bhmoAtno2tm3tCZvYJ8ngKbiPM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
