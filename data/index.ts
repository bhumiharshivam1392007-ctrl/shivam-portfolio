// ==============================================================================
// SHIVAM LABS - PORTFOLIO DATA CONFIGURATION
// ==============================================================================
// Is file me aapke portfolio ka sara data hai.
// Aap yahan se asaani se:
// 1. Apne projects ko edit kar sakte hain.
// 2. Naye projects add kar sakte hain (bas 'projects' array me naya object add karein).
// 3. Social media links, experience, aur skills change kar sakte hain.
// ==============================================================================

export const personalInfo = {
  name: "Shivam Singh",
  brand: "Shivam Labs",
  roles: "Full Stack Developer | AI Automation Specialist | SEO Expert",
  tagline: "Dynamic Web Magic & AI Automation",
  heroHeading: "Transforming Concepts into Intelligent, High-Impact Web Solutions",
  heroSubheading:
    "Hi! I'm Shivam Singh, a Full Stack Developer, AI Automation Specialist & SEO Expert building high-performance modern web apps.",
  email: "shivamsingh9749ssss@gmail.com",
};

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, delivering high-impact web & AI solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with global communications & rapid project turnaround",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Constantly expanding & mastering new tech",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about full-stack engineering & AI-driven automations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building autonomous AI workflows & enterprise platforms",
    description: "Inside Shivam Labs",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build an exceptional project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// ==============================================================================
// PROJECTS LIST
// Naya project add karne ke liye bas niche ek naya object copy-paste karein:
// {
//   id: 4,
//   title: "Aapke Project Ka Naam",
//   des: "Project ka short description",
//   img: "/project-image.png", // public folder me image dalein
//   iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
//   link: "https://your-live-link.com",
//   github: "https://github.com/your-username/repo",
// }
// ==============================================================================
export const projects = [
  {
    id: 1,
    title: "Shivam Labs – AI & Web Solutions",
    des: "A modern agency web platform built to showcase and deliver AI automation, full-stack web development, and SEO services.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    link: "https://github.com/bhumiharshivam1392007-ctrl",
    github: "https://github.com/bhumiharshivam1392007-ctrl",
  },
  {
    id: 2,
    title: "ORBIT – Student & Admin Portal",
    des: "A complete coaching institute management system featuring secure authentication, role-based dashboards (Admin & Student), attendance, and fee tracking.",
    img: "/orbit-tutorial.png", // Attached screenshot of Orbit Portal
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/dock.svg"],
    link: "https://orbit-tutorial.vercel.app/",
    github: "https://github.com/bhumiharshivam1392007-ctrl",
  },
  {
    id: 3,
    title: "AI Workflow Automation System",
    des: "Custom AI-powered automation pipelines built to streamline business workflows, automate repetitive tasks, and improve overall productivity.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/bhumiharshivam1392007-ctrl",
    github: "https://github.com/bhumiharshivam1392007-ctrl",
  },
];

export const skillsData = {
  frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  backend: ["Node.js", "Python", "Java", "REST APIs"],
  database: ["SQL", "Git", "GitHub"],
  specialized: ["AI Automation", "SEO (Search Engine Optimization)"],
};

export const testimonials = [
  {
    quote:
      "Working with Shivam was an incredible experience. He built our web platform with high precision, speed, and integrated seamless AI automations that cut down our manual tasks drastically. Highly recommended!",
    name: "Client Partner",
    title: "Founder, Modern Education & Tech Services",
  },
  {
    quote:
      "Shivam transformed our online presence with high-converting web design and top-notch technical SEO strategies. Our organic search visibility and website speed improved significantly.",
    name: "Enterprise Client",
    title: "Director of Digital Growth",
  },
  {
    quote:
      "The ORBIT coaching management portal built by Shivam solved our attendance and student tracking in days. Clean UI, rock-solid security, and responsive across all devices.",
    name: "Academy Director",
    title: "Pioneer Coaching Institute",
  },
];

export const companies = [
  {
    id: 1,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/re.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    img: "/tail.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "Git",
    img: "/git.svg",
    nameImg: "/appName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer & AI Specialist",
    desc: "Shivam Labs (Freelance) — 6 Months. Engineered full-stack web platforms, deployed custom AI automation pipelines, and implemented SEO architectures for clients.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Automation & Workflow Engineering",
    desc: "Architected autonomous pipelines and smart automation agents, eliminating repetitive manual operations and accelerating client productivity.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Technical SEO & Web Optimization",
    desc: "Implemented advanced SEO frameworks, performance tuning, and Core Web Vitals optimizations to achieve top rankings and 95+ PageSpeed scores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack Web Architecture",
    desc: "Crafted robust backend systems with Node.js, Python, and SQL paired with reactive, interactive modern frontends using Next.js and Tailwind CSS.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/bhumiharshivam1392007-ctrl",
  },
  {
    id: 2,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shivam-kumar-754357419?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: 3,
    name: "Twitter / X",
    img: "/twit.svg",
    link: "https://x.com/S09455486Shivam",
  },
  {
    id: 4,
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/shivamlabs?fqnt=MWtvZXdyNmI2ZWR6MA==",
  },
];
