import ecommerceImg from "../assets/ecommerce.jpg";
import chatappImg from "../assets/chatapp.png";
import blogrImg from "../assets/blogr.jpg";
import mmImg from "../assets/moneymanagament.jpg";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      img: ecommerceImg,
      alt: "ecommerce app",
      title: "Single Product E-Commerce App",
      subtitle: "Front-End Mentor Challenge",
      brief:
        "Dynamic, completly responsive app made from scratch using React with functionalities like add-to-cart, remove-from-cart, amount control, responsive galleries, light box gallery etc...",
      style: "project",
      github: "https://github.com/Zivota/ecommerce-product-app",
      website: "https://reactecommapp.netlify.app/",
    },
    {
      img: chatappImg,
      alt: "chat app",
      title: "Chat App",
      subtitle: "APIs Practice",
      brief:
        "Live chat app made using React with implemented google authentication from Firebase and Chat Engine Api.",
      style: "project reverse",
      github: "https://github.com/Zivota/chat-app",
      website: "https://reactchatappv1.netlify.app/",
    },

    {
      img: blogrImg,
      alt: "blogr website",
      title: "Modern Website Landing Page",
      subtitle: "Front-End Mentor Challenge",
      brief:
        "Completely responsive landing page with modern design provided by Front-End-Mentor app. Project is made with HTML, Vanilla Javascript and Sass. ",
      style: "project",
      github: "https://github.com/Zivota/BlogrWebsite",
      website: "https://blogrwebsitejs.netlify.app/",
    },

    {
      img: mmImg,
      alt: "chat app",
      title: "Money Management and Week Scheduler App",
      subtitle: "Javascript fundamentals",
      brief:
        "App with dynamic UI which deals with various inputs and based on data affects DOM elements. It allows you to enter or delete your name, incomes, expenses, or schedule for every day in week. It also use Local storage to store all data.",
      style: "project reverse",
      github: "https://github.com/Zivota/Money-Management-App",
      website: "https://mmappjs.netlify.app/",
    },
  ];

  return projects.map((project) => (
    <Project
      key={project.title}
      img={project.img}
      alt={project.alt}
      title={project.title}
      subtitle={project.subtitle}
      brief={project.brief}
      style={project.style}
      github={project.github}
      website={project.website}
    />
  ));
};

export default Projects;
