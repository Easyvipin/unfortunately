import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_APP_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
);
