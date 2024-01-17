import { findInterviewers } from "@src/lib/supabase/user";
import useSWR from "swr";

type filters = {
  skills: string[];
  exp?: number;
  industry?: number;
  lang?: string;
};

export function useFilter(filterData: filters) {
  const { data, error, isLoading } = useSWR(
    { key: "findInterviewers", args: filterData },
    findInterviewers
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
