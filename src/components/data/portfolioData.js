// src/data/portfolioData.js - ตัวอย่างที่นักศึกษาต้องทำ
export const projects = [
  {
    id: 1,
    title: "TNN GameReview",
    description: "เป็นโปรเจคที่ทำตอนจบ ปวส.",
    image: "/img/1.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://akkapan-a4a9c.web.app/Index.html",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "My To-Do List",
    description: "เป็นเว็บลิสต์ที่ต้องการทำเป็นส่วนหนึ่งของงานเวิร์กช็อป",
    image: "/img/2.png",
    technologies: ["React", "OpenWeather API", "CSS3"],
    demoUrl: "https://akkapanse.github.io/experiment2/",
    githubUrl: "https://github.com/AkkapanSE/experiment2?tab=readme-ov-file",
    featured: false
  },
  {
    id: 3,
    title: "my-portfolio",
    description: "เว็บพอร์ตโฟลิโอส่วนตัว",
    image: "/img/3.png",
    technologies: ["React", "Firebase", "Stripe API", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/AkkapanSE/my-portfolio",
    featured: true
  },
];