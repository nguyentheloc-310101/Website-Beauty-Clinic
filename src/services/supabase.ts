import { createClient } from '@supabase/supabase-js';

// //Product

const supabaseUrl = 'https://ghukjxfokoeacobbajae.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodWtqeGZva29lYWNvYmJhamFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NDc3MjcsImV4cCI6MTk3OTUyMzcyN30.LndnChFvtsHpCcF9WZTCP67SsaYzfmDEDJQAmlWgnWc';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// //Staging

// export const supabase = createClient(
//   "https://wmysxhtwbtmjxrrczjuj.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndteXN4aHR3YnRtanhycmN6anVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2OTE5OTAxNCwiZXhwIjoxOTg0Nzc1MDE0fQ.6epaFA-vn3pHGXqXCe55N8MMWIIEsjCoZZrJoJbGsJU"
// );

//Aura id v2

// const supabaseUrl = 'https://ctxvsrfwmbfxsodwuvxv.supabase.co';
// const supabaseAnonKey =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0eHZzcmZ3bWJmeHNvZHd1dnh2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzQwMTc2OCwiZXhwIjoxOTgyOTc3NzY4fQ.ILlCsy7X1bBf5DQ2ccj4eHR3sK-cvStCnDEHLMtFOA0';
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
