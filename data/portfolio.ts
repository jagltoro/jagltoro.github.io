export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tech: string[];
  images?: { src: string; alt: string }[];
  link?: string;
  repo?: string;
};

export const site = {
  name: "Jesus Gonzalez",
  role: "Senior Software Engineer • React Native Developer",
  location: "España",
  summary:
    "React Native and web engineer with 12+ years building accessible, high-performance products. Experienced across REST/GraphQL APIs, cloud architectures, and leading React teams with strong delivery standards.",
  email: "dev.jesusgonzalez@gmail.com",
  linkedin: "https://www.linkedin.com/in/jagltoro",
  github: "https://github.com/jagltoro",
  cvUrl: "/Profile.pdf",
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "EPAM Systems",
    period: "Jan 2022 — Present",
    location: "Andalusia, Spain",
    summary:
      "Developed software solutions for multiple clients using REST and GraphQL APIs in cloud architectures while working in agile teams.",
    highlights: [
      "React Native apps with JS, GraphQL, REST, JWT.",
      "Node.js and MongoDB services.",
      "React web work with JS, SharePoint, CSS, HTML.",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Endava",
    period: "Mar 2020 — Jun 2021",
    location: "Buenos Aires, Argentina",
    summary:
      "Led React initiatives, reviewed quality/security, and delivered accessible web and mobile experiences.",
    highlights: [
      "Built customizable components to support technology migrations.",
      "Tech lead on React projects with ownership of research and delivery.",
      "Implemented WCAG-compliant experiences for web and React Native.",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Ingenico ePayments",
    period: "Nov 2017 — Mar 2020",
    location: "Buenos Aires, Argentina",
    summary:
      "Built developer-facing portals and SDK tooling to improve documentation and integrations.",
    highlights: [
      "Created a React-based Developer Zone to replace PDF documentation.",
      "Improved portal performance and resource handling.",
      "Developed ReactJS NPS SDK and payment gateway integrations.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "MRM//McCann",
    period: "May 2017 — Sep 2017",
    location: "Buenos Aires, Argentina",
    summary:
      "Migrated legacy sites to React and refreshed UI systems to modern standards.",
    highlights: [
      "Redesigned sites to align with updated brand guidelines.",
      "Replaced legacy modules to improve performance and maintainability.",
      "Refactored stylesheets with variables for easier theme updates.",
    ],
  },
  {
    role: "Web Developer",
    company: "Blanc Labs",
    period: "Aug 2016 — Dec 2016",
    location: "Caracas, Venezuela",
    summary:
      "Delivered web tooling for call centers and APIs for veterinary applications.",
    highlights: [
      "Built a retention tool for call center teams with improved workflows.",
      "Implemented REST APIs for a veterinary chat application.",
      "Helped standardize frontend stacks, tests, and methodologies.",
    ],
  },
  {
    role: "Semi Senior Web Developer",
    company: "Teravision Technologies",
    period: "Jan 2015 — Aug 2016",
    location: "Caracas, Venezuela",
    summary:
      "Handled full-stack web delivery, client collaboration, and performance optimization.",
    highlights: [
      "Built and maintained front-end and back-end website functionality.",
      "Created prototypes and guided teammates on web development issues.",
      "Optimized performance and integrated social platform features.",
    ],
  },
  {
    role: "Software Specialist",
    company: "Prosoft Solutions Venezuela",
    period: "Jan 2014 — Dec 2014",
    location: "Caracas, Venezuela",
    summary:
      "Delivered core product modules, documentation, and end-user training.",
    highlights: [
      "Built appointment modules and documented software specs.",
      "Supported end users and led induction sessions.",
      "Provided guidance to junior staff and participated in ideation.",
    ],
  },
  {
    role: "Web Developer",
    company: "The Factory HKA",
    period: "Aug 2013 — Dec 2013",
    location: "Caracas, Venezuela",
    summary:
      "Maintained company web properties and delivered backend management tooling.",
    highlights: [
      "Built backend management for the company main page.",
      "Maintained and improved multiple web properties.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "First Response",
    description:
      "Developed with input from first responders that face day-to-day stressors and understand what's needed to make an safe, secure, private support system",
    tech: ["React Native", "TypeScript"],
    images: [
      {
        src: "/projects/first.webp",
        alt: "First Response app preview",
      },
    ],
    link: "https://firstresponsemh.com/peerconnect/",
  },
  {
    name: "Estrella Jalisco / Natural Light",
    description:
      "Refreshment of the webpage.\nNew colors, sections, animations and content.",
    tech: ["React", "CSS", "HTML", "Adobe CMS"],
    images: [
      {
        src: "/projects/estrella.webp",
        alt: "Estrella Jalisco site preview",
      },
      {
        src: "/projects/natural.webp",
        alt: "Natural Light site preview",
      },
    ],
  },
  {
    name: "Developer's Hub",
    description:
      "Ingenico ePayments portal for developers.\n This portal has all the documentation for merchants that decide to use Ingenico as payment service.\nMade to make it easy to get through and navigate.",
    tech: ["React", "CSS", "HTML"],
    images: [
      {
        src: "/projects/nps-dev.webp",
        alt: "Developer's Hub portal preview",
      },
    ],
  },
  {
    name: "Cogeco Retention Tool",
    description:
      "Call center retention tool, made to keep customers with the services, giving them discounts or new payment arrangements.",
    tech: ["Angular", "CSS", "HTML"],
    images: [
      {
        src: "/projects/retention.webp",
        alt: "Cogeco retention tool interface preview",
      },
    ],
  },
];

export const highlights = [
  {
    label: "12+",
    value: "Years in software development",
  },
  {
    label: "8",
    value: "Companies across LATAM + EU",
  },
  {
    label: "3",
    value: "Areas: React, React Native, Node",
  },
];
