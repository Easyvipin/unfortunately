export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      interviewers: {
        Row: {
          current_org: string | null;
          experience: number | null;
          industry: string | null;
          interviewer_id: string;
          job_level: string | null;
          language: string[] | null;
          name: string | null;
          prev_org: string[] | null;
          skills: string[] | null;
          social_links: Json | null;
        };
        Insert: {
          current_org?: string | null;
          experience?: number | null;
          industry?: string | null;
          interviewer_id: string;
          job_level?: string | null;
          language?: string[] | null;
          name?: string | null;
          prev_org?: string[] | null;
          skills?: string[] | null;
          social_links?: Json | null;
        };
        Update: {
          current_org?: string | null;
          experience?: number | null;
          industry?: string | null;
          interviewer_id?: string;
          job_level?: string | null;
          language?: string[] | null;
          name?: string | null;
          prev_org?: string[] | null;
          skills?: string[] | null;
          social_links?: Json | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          availability: string;
          bio: string | null;
          fullname: string | null;
          industry: string;
          profession: string | null;
          skills: string[] | null;
          userid: string;
        };
        Insert: {
          availability?:
            | Database["public"]["Enums"]["availability_enum"]
            | null;
          bio?: string | null;
          fullname?: string | null;
          industry?: Database["public"]["Enums"]["industry_enum"] | null;
          profession?: string | null;
          skills?: string[] | null;
          userid: string;
        };
        Update: {
          availability?:
            | Database["public"]["Enums"]["availability_enum"]
            | null;
          bio?: string | null;
          fullname?: string | null;
          industry?: Database["public"]["Enums"]["industry_enum"] | null;
          profession?: string | null;
          skills?: string[] | null;
          userid?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      availability_enum: "WEEKEND" | "WEEKDAY";
      industry_enum: "PRODUCT_BASED" | "SERVICE_BASED";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
