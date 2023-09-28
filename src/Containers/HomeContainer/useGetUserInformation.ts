import { supbaseClient } from "@src/lib/initSupbase";
import { useState } from "react";

export const useGetUserInformation = async (session) => {
  const [user, setUser] = useState(null);
  try {
    if (session) {
      const supabaseAccessToken = await session.getToken({
        template: "supabase",
      });

      const supabase = await supbaseClient(supabaseAccessToken);
      const { data } = await supabase.from("user").select("*");
      setUser(data);
    }
  } catch (e) {
    alert(e);
  }
  return { userInformation: user };
};
