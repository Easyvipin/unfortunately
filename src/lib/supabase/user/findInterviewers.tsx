import { supabase } from "..";

export async function findInterviewers({ args }) {
  const { skills } = args;

  const { data, error } = await supabase
    .from("interviewers")
    .select("*")
    .contains("skills", [skills]);
  return {
    data,
    error,
  };
}
