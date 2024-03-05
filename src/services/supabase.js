import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jdageehmrkqgucegwgkm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkYWdlZWhtcmtxZ3VjZWd3Z2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0Mjc2MzcsImV4cCI6MjAyNTAwMzYzN30.PNHsrrv3NBOOhdwK1My1rnL2RDsczU-Djzi42pCUDVk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
