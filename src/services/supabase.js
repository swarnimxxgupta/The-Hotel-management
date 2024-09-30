import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uahhewjfrasldeuhzebx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhaGhld2pmcmFzbGRldWh6ZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3MTIxMjIsImV4cCI6MjA0MzI4ODEyMn0.69UBM3KsCafijj8OThns34yvlKvMwFAb8P36yqbEHMI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
