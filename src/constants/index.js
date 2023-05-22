import {
    flutter,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    dart,
    tailwind,
    nodejs,
    python,
    git,
    sql,
    docker,
    carrent,
    jobit,
    tripguide,
    linux,
    fastapi
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Resume",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
  ];
  
  const experiences = [
    {
      title: "Math Teacher Assistant",
      company_name: "Ensign College",
      icon: "https://www.ensign.edu/favicon-32x32.png",
      iconBg: "#383E56",
      date: "Jul 2021 - Present",
      points: [
        "Analyzed test data from over 300 students and provided solutions to problems personalized feedback to enhance tehir learning outcomes.", 
        "Evaluated homework assigments of more than 150  students and identified their reasoning skills.",
        "Collaborated with manager biweekly to facilitate student learning by structing complex math topics in English and Spanish to 30 students per sesssion.",
        "Managed and store test data in the college data base on a semesterly basis",
      ],
    },
    {
      title: "Custodial",
      company_name: "Missionary Training Center",
      icon: "https://www.churchofjesuschrist.org/services/platform/v4/resources/static/image/favicon.ico",
      iconBg: "#383E56",
      date: "Jun 2019 - Jul 2020",
      points: [
        "Extensive knowledge of proper use of chemicals to keep 500 people safe and comfortable.",
        "Planned bi-weekly builing care activities with manager and 20 cleaning staff in order to accommodate new people.",
        "Collaborated with team members to ensure all classrooms were cleaned and organized in a timely manner.",
        "Taught and shared all knowledge with new workers to understand company procedures and policies",
      ],
    },
    {
      title: "Custodial ",
      company_name: "Lumos Language School",
      icon: "https://lumos.edu/wp-content/uploads/2023/01/cropped-favicon_lumos2_512x512-32x32.png",
      iconBg: "#383E56",
      date: "Feb 2019 - Apr 2019",
      points: [
        "Maintained daily hygiene, health, and safety standars in work areas so teachers and students gained a better learning experience.",
        "Determined in a work team availability of teachers schedule and classroom and rehearsed each in most efficient way in a weekly manner.",
        ".",
        ".",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };