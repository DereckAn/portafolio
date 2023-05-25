import {
    flutter,
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
    portaIma,
    dessert,
    linux,
    fastapi,
    drawing,
    math,
    expenses,
    quiz,
    dice
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
      name: "Portafolio",
      description:
        "This project had the primary goal of creating a website that would allow me to introduce my-self and to showcase my skills and projects.",
      tags: [
        {
          name: "HTML",
          color: "red-text-gradient",
        },
        {
          name: "CSS",
          color: "blue2-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portaIma,
      source_code_link: "https://github.com/DereckAn/portafolio.git",
    },

    {
      name: "Expenses Tracker",
      description:
        `The main objective of this project was to create an application that allows users to record their expenses and income. 
        It is possible to modify, delete and add new expenses and income.`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
      ],
      image: expenses,
      source_code_link: "https://github.com/DereckAn/practice/tree/main/flutter/app2",
    },

    {
      name: "Quizz App",
      description:
        `Developing a question and answer application. 
        The main objective was to learn how to use the Stack widget, and how to manage the state of the application.`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/DereckAn/practice/tree/main/flutter/quiz_app",
    },

    {
      name: "Random Dice App",
      description:
        `My first application in Flutter. Introduction to using the Stack widget, and managing the state of the application. 
        Getting used to the new Dart language. And to the development of mobile applications.`,
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Dart",
          color: "blue-text-gradient",
        },
      ],
      image: dice,
      source_code_link: "https://github.com/DereckAn/FlutterProjects/tree/main/dice",
    },

    {
      name: "Math with Python",
      description:
        `Learning to use python and solving math exercises. The main objective was to learn how to use the sympy library, matplotlib, and numpy. 
        Also to use programming logic to solve problems and handle data.`,
      tags: [
        {
          name: "Python",
          color: "blue2-text-gradient",
        },
        {
          name: "sympy",
          color: "grey-text-gradient",
        },
        {
          name: "matplotlib",
          color: "grey-text-gradient",
        },
        {
          name: "Numpy",
          color: "grey-text-gradient",
        },
      ],
      image: math,
      source_code_link: "https://github.com/",
    },

    {
      name: "Drawing Java",
      description:
        `Our goal was to create geometric figures with java code.
        The shapes should be separate objects and they have to fit the size of the window. The color, the position, and the amount of details should vary.`,
      tags: [
        {
          name: "Java",
          color: "red-text-gradient",
        },
      ],
      image: drawing,
      source_code_link: "https://github.com/DereckAn/practice/tree/main/Java/Shapes/Draw",
    },

    {
      name: "Dessert Shop",
      description:
        `This project was based on creating an application that would allow users to buy desserts and pay with a credit card, cash, or through the phone. 
        At the end of the purchase a receipt is generated with the customer data and the products purchased.`,
      tags: [
        {
          name: "Java",
          color: "red-text-gradient",
        },
      ],
      image: dessert,
      source_code_link: "https://github.com/DereckAn/practice/tree/main/Java/Week3/DessertShop",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };