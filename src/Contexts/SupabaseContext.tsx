import { useAuth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";

const SupabaseContext = createContext();

export const createSupabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_APP_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );

  return supabase;
};

export function SupabaseProvider({ children }) {
  const { getToken, sessionId } = useAuth();

  const setupClient = async () => {
    const supabaseAccessToken = await getToken({
      template: "supabase",
    });

    const supabase = await createSupabaseClient(supabaseAccessToken);
    return supabase;
  };

  return (
    <SupabaseContext.Provider value={{ setupClient }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  return useContext(SupabaseContext);
}
