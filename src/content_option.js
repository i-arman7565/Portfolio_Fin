const logotext = "Arman";
const meta = {
    title: "Arman",
    description: "I’m Arman Full stack web devloper,currently studying in Hubli",
};

const introdata = {
    title: "I’m Arman",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I attend all the classes and have 100% in webd",
    },
    description: "My name is  Arman i m currently persuing BE from KLE Technological Univsersity.",
    your_img_url: "https://scontent.fblr4-1.fna.fbcdn.net/v/t39.30808-6/449456416_2271076843235660_6654111892232360839_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fNAKdFUyAN0Q7kNvgGzFuXj&_nc_zt=23&_nc_ht=scontent.fblr4-1.fna&_nc_gid=AyCDZy7wGpOwA1F0yrWgR8M&oh=00_AYBg3Jt0mlIpBxx2OnjtHDIsFrKO3HZMemp3Rgmo21Ymsw&oe=672406DD",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "My name is Arman i m currently persuing BE from KLE Technological Univsersity.I'm a dedicated web developer with a passion for coding. Crafting digital experiences is not just my profession; it's where my enthusiasm lies. With a strong background in web development, I bring creativity and technical expertise to every project. I thrive on the challenges of coding and find joy in building seamless, user-friendly websites. Let's turn ideas into reality through the language of the web.",
};
const worktimeline = [{
    jobtitle: "Software Developer3",
    where: "Banglore",
    date: "2020",
},
{
    jobtitle: "Software Developer2",
    where: "Pune",
    date: "2019",
},
{
    jobtitle: "Software Developer",
    where: "Delhi",
    date: "2018",
},
];

const skills = [{
    name: "Java",
    value: 60,
},
{
    name: "CPP",
    value: 90,
},
{
    name: "SpringBoot",
    value: 90,
},
{
    name: "React",
    value: 60,
},
{
    name: "SQL",
    value: 90,
},
{
    name: "Mongodb",
    value: 79,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Backend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "React Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [{
    img: "data:image/png;base64,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",
    description: "The Scholar Sphere project is designed to provide a comprehensive, user-friendly platform for students and educators, focusing on creating an accessible space for sharing academic resources.",
    link: "https://github.com/i-arman7565/FullStackWebapp",
},
{
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX8vOpKNkbShi7TelLa-JvKFvBxYMKl-8OQ&s",
    description: "A Hospital Resource Management System that connects users to available blood, platelets, and oxygen in different.",
    link: "https://github.com/i-arman7565/dsa_project.git",
},
{
    img: "https://lenadesign.org/wp-content/uploads/2021/03/train.jpg",
    description: "The Railway Management application is an Object-Oriented Programming (OOP) project designed to streamline and automate various aspects of railway operations.",
    link: "https://github.com/i-arman7565/Railway_management_system",
},
{
    img: "https://i-arman7565.github.io/portfolio.github.io/assets/logo.png",
    description: "This project highlights integration of data structures and algorithms, demonstrating their application in LinkedIn.",
    link: "https://i-arman7565.github.io/portfolio.github.io/",
},
];

const contactConfig = {
    YOUR_EMAIL: "armankhan.8737@gmail.com",
    YOUR_FONE: "7565812151",
    description: "Feel free to reach out! Whether you have a project in mind, want to discuss collaboration opportunities, or simply have a question, I'm always open to connecting with fellow enthusiasts, clients, or anyone with a shared interest in the world of web development. Your message is just a click away, and I look forward to hearing from you soon. Let's bring ideas to life and create something amazing together ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/i-arman7565",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/armankhan07/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};