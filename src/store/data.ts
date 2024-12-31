import { JobProps } from "../@types/type";

export const activeJobsData: JobProps[] = [
  {
    title: "Frontend Developer",
    exp: 2,
    description:
      "Build responsive web applications using React.js and modern JavaScript.",
    skills: ["React.js", "TypeScript", "CSS Modules", "Redux"],
    id: 1,
  },
  {
    title: "Backend Developer",
    exp: "3-5",
    description:
      "Develop and maintain server-side logic using Node.js and Express.",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    id: 2,
  },
  {
    title: "Full Stack Developer",
    exp: 4,
    description:
      "Work on both frontend and backend technologies to deliver end-to-end solutions.",
    skills: ["React.js", "Node.js", "TypeScript", "GraphQL"],
    id: 3,
  },
  {
    title: "Java Developer",
    exp: 5,
    description:
      "Design and develop scalable applications using core Java and Spring Boot.",
    skills: ["Core Java", "Spring Boot", "Hibernate", "Microservices"],
    id: 4,
  },
  {
    title: "DevOps Engineer",
    exp: 3,
    description: "Implement CI/CD pipelines and manage cloud infrastructure.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
    id: 5,
  },
];

export const popularJobsData: JobProps[] = [
  {
    title: "UI/UX Designer",
    exp: 3,
    description:
      "Design intuitive user interfaces and enhance user experiences across web and mobile platforms.",
    skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping"],
    id: 1,
  },
  {
    title: "Mobile App Developer",
    exp: 2,
    description:
      "Develop high-performance mobile applications using React Native.",
    skills: ["React Native", "Redux", "JavaScript", "REST APIs", "Firebase"],
    id: 2,
  },
  {
    title: "Data Scientist",
    exp: 4,
    description:
      "Analyze and interpret complex data to provide actionable insights.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL"],
    id: 3,
  },
  {
    title: "Cloud Engineer",
    exp: 5,
    description:
      "Design and implement scalable cloud solutions using leading cloud platforms.",
    skills: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    id: 4,
  },
  {
    title: "Cybersecurity Analyst",
    exp: "3+",
    description:
      "Protect organizational data and systems by identifying and mitigating security threats.",
    skills: [
      "Penetration Testing",
      "SIEM",
      "Firewalls",
      "Encryption",
      "Network Security",
    ],
    id: 5,
  },
];
