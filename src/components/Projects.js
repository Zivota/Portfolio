import ecommerceImg from "../assets/ecommerce.jpg";
import blogrImg from "../assets/blogr.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import weatherImg from "../assets/weather.jpg";
import timupsImg from "../assets/timups.jpg";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      img: timupsImg,
      alt: "ecommerce app",
      title: "E-Commerce Watch Store",
      subtitle: "Complete e-Commerce Application",
      brief:
        "Full e-Commerce Web App, completly responsive, made from scratch using React, SCSS, React Router and React Context API for state management, with advanced cart, and many other features. For more description visit github.",
      style: "project",
      github: "https://github.com/Zivota/e-commerce-webapp",
      website: "https://timupsreact.netlify.app/",
    },
    {
      img: ecommerceImg,
      alt: "ecommerce app",
      title: "Single Product E-Commerce App",
      subtitle: "Front-End Mentor Challenge",
      brief:
        "Dynamic, completly responsive app made from scratch using React with functionalities like add-to-cart, remove-from-cart, amount control, responsive galleries, light box gallery etc...",
      style: "project reverse",
      github: "https://github.com/Zivota/ecommerce-product-app",
      website: "https://reactecommapp.netlify.app/",
    },
    {
      img: weatherImg,
      alt: "weather app",
      title: "Modern Weather App",
      subtitle: "APIs Practice",
      brief:
        "Dynamic app made from scratch with React, CSS-modules and Context API, that asynchronously collects data from two different APIs, 'ipwho' and 'openweather'. It shows the weather for your current location on the first entry on the website. You can also search for any place on earth and get weather info for today and the next 5 days. Light and Dark modes are also available.",
      style: "project",
      github: "https://github.com/Zivota/React-Weather-App",
      website: "https://weatherappr.netlify.app/",
    },

    {
      img: blogrImg,
      alt: "blogr website",
      title: "Modern Website Landing Page",
      subtitle: "Front-End Mentor Challenge",
      brief:
        "Completely responsive landing page with modern design provided by Front-End-Mentor app. Project is made with HTML, Vanilla Javascript and Sass. ",
      style: "project reverse",
      github: "https://github.com/Zivota/BlogrWebsite",
      website: "https://blogrwebsitejs.netlify.app/",
    },

    {
      img: portfolioImg,
      alt: "portfolio",
      title: "Personal Portfolio",
      subtitle: "Portfolio Website",
      brief:
        "My own portfolio website which I've designed and developed from scratch using React, SCSS, GSAP and React Router.",
      style: "project",
      github: "https://github.com/Zivota/Portfolio",
      website: "https://zivotakovacevic.netlify.app/",
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
