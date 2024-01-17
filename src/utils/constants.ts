export const USER_TYPE = {
  candidate: "candidate",
  interviewer: "interviewer",
};

export const STEPS_FORM = {
  1: "introduction", // full name
  2: "skills",
  3: "industry", // level will also be here
  4: "availability",
};

export const techProfessions: { label: string; value: string }[] = [
  { label: "Software Engineer", value: "software_engineer" },
  { label: "Web Developer", value: "web_developer" },
  { label: "Frontend Developer", value: "frontend_developer" },
  { label: "Backend Developer", value: "backend_developer" },
  { label: "Fullstack Developer", value: "fullstack_developer" },
  { label: "Data Scientist", value: "data_scientist" },
  { label: "Network Engineer", value: "network_engineer" },
  { label: "DevOps Engineer", value: "devops_engineer" },
  { label: "UX/UI Designer", value: "ux_ui_designer" },
  { label: "Cybersecurity Analyst", value: "cybersecurity_analyst" },
];

export const FRONTEND_SKILLS = {
  JAVASCRIPT: "JavaScript",
  PYTHON: "Python",
};
