import APP_IMAGES from "./images";
import JavascriptImage from "/images/js.png";
import ReactImage from "/images/react.png";
import NodeImage from "/images/nodejs.png";
import ExpressImage from "/images/express.png";
import MongoDBImage from "/images/mongodb.svg";
import CSSImage from "/images/css.png";
import CityImage from "/images/city.jpg";
import ProfilePicture from "/images/avatar.png"
import ProfilePictureBlurred from "/images/avatar-small.png"

export const INFORMATION = {

    PROFILE_PICTURE: ProfilePicture,
    ProfilePictureBlurred,

    NAME: "SHEHZAD AHMED",
    EMAIL: "shaxad.here@gmail.com",
    PHONE: "+92 333 1234567",
    BRIEF: `"I create intuitive and visually stunning UI/UX designs that
    help businesses connect with their target audiences."`,
    RESUME: "/Shehzad Ahmed React Developer.pdf",

    LOCAL_TIME_ZONE: "Asia/Karachi",
    CITY_PICTURE: CityImage,
    CITY: "Karachi",
    COUNTRY: "Pakistan",

    EXPIRIENCE: 5,
    TOTAL_PROJECTS: 32,

    LINKS: {
        GITHUB: "https://github.com/shaxadhere",
        TWITTER: "https://twitter.com/shaxaddd",
        LINKEDIN: "https://www.linkedin.com/in/shaxadhere/",
        KODERLABS: "https://koderlabs.com/",
        MEDIUM: "https://shaxadd.medium.com/",
    },
    SKILLS: {
        JavaScript: JavascriptImage,
        React: ReactImage,
        NodeJs: NodeImage,
        Express: ExpressImage,
        MongoDB: MongoDBImage,
        CSS: CSSImage
    },
    PROJECTS: [
        {
            title: "Evolv LMS Admin",
            category: "Frontend Development.",
            link: "https://app.evolv-systems.com/",
            date: "Nov 2023",
            thumbnail: APP_IMAGES.EvolvLMSThumb,
            logo: APP_IMAGES.EvolvLMSLogo,
        },
        {
            title: "YDrive Admin",
            category: "Frontend Development.",
            // link: "https://app.evolv-systems.com/",
            date: "Jan 2024",
            thumbnail: APP_IMAGES.YDriveAdmin,
            logo: APP_IMAGES.YDriveLogo,
            logoStyles: {
                h: "35px"
            }
        },
        {
            title: "Evolv LMS Student Web App",
            category: "Frontend Development.",
            link: "https://student.evolv-systems.com/",
            date: "Dec 2023",
            logo: APP_IMAGES.EvolvLMSLogo,
            thumbnail: APP_IMAGES.EvolvLmsStudentWebApp,
        },
        {
            title: "Evolv Accounts App",
            category: "Frontend Development.",
            link: "https://accounts.evolv-systems.com/",
            date: "Sep 2023",
            logo: APP_IMAGES.EvolvLMSLogo,
            thumbnail: APP_IMAGES.EvolvAccountsApp,
        },
        {
            title: "Evolv LMS Landing Site",
            category: "Frontend Development.",
            link: "https://evolv-systems.com/",
            date: "Aug 2023",
            logo: APP_IMAGES.EvolvLMSLogo,
            thumbnail: APP_IMAGES.EvolvLmsLandingSite,
        },
        {
            title: "Bhealthy - Therapy Portal",
            category: "Frontend Development.",
            // link: "https://evolv-systems.com/",
            date: "Mar 2024",
            logo: APP_IMAGES.BhealthyLogo,
            thumbnail: APP_IMAGES.BhealthyWebApp,
        },
        {
            title: "Evolv Point of Sale",
            category: "MERN Stack Development.",
            link: "https://pos.evolv-systems.com/",
            date: "Oct 2023",
            logo: APP_IMAGES.EvolvLMSLogo,
            thumbnail: APP_IMAGES.EvolvPos,
        },
        {
            title: "PTax, Your Complete Tax Assistant",
            category: "MERN Stack Development.",
            link: "https://app.ptax.tax/",
            date: "Sep 2022",
            logo: APP_IMAGES.PtaxLogo,
            thumbnail: APP_IMAGES.Ptax,
        },
        {
            title: "UrAudits Web App",
            category: "MERN Stack Development.",
            link: "https://uraudits.com/",
            date: "Aug 2022",
            logo: APP_IMAGES.EvolvLMSLogo,
            thumbnail: APP_IMAGES.UrAudits,
        },
        {
            title: "Fixnxl Web App",
            category: "Frontend Development",
            link: "https://fixnxl.com/",
            date: "Oct 2021",
            // thumbnail: APP_IMAGES.EvolvLMSLogo,
            // logo: APP_IMAGES.EvolvLMSLogo,
        },
        {
            title: "Moreo Web App",
            category: "Full Stack Development",
            link: "https://moreo.pk/",
            date: "Jan 2021",
            thumbnail: APP_IMAGES.Moreo,
            logo: APP_IMAGES.MoreoLogo,
        },
        {
            title: "EARTT - Accounting System",
            category: "Full Stack Development",
            link: "https://artt.edu.pk/eartt/",
            date: "Feb 2021",
            thumbnail: APP_IMAGES.EvolvAccountsApp,
            logo: APP_IMAGES.ArttLogo,
        },
        {
            title: "ARTT Learning Management System Web App",
            category: "Full Stack Development",
            date: "Dec 2020",
            thumbnail: APP_IMAGES.ArttLms,
            logo: APP_IMAGES.ArttLogo,
        }
    ],
    REVIEWS: [
        {
            name: "Muhammad Saqlain",
            text: ''
        }
    ],
    EXPIRIENCE_LIST: [
        {
            designation: "Software Engineer II T2",
            company: "SimpliFiPay",
            link: "https://simplifipay.com",
            timeline: "Sep 2024 - Present",
            text: `Instant card issuance in MENA & Pakistan. Issue virtual or physical cards for your customers, employees, or partners to solve business problems and drive your bottom line.`,
            logo: "https://www.koderlabs.com/assets/img/logo/new-logo.png",
            logoStyles: {
                bgPos: "bottom",
                h: "55px",
                pos: "absolute",
                bottom: "20px",
                right: "6px",
                w: "283px",
                zIndex: 0,
                bgSize: "contain",
            },
        },
        {
            designation: "Senior Software Engineer",
            company: "Koderlabs",
            link: "https://koderlabs.com",
            timeline: "Nov 2022 - Sep 2024 (1 yr 11 mos)",
            text: `Develop high-performing, and easily maintainable code for a broad range of clients.
          Utilize various programming languages, platforms, frameworks like TypeScript, React.js, React Native, Vue.js and JavaScript.`,
            logo: "https://www.koderlabs.com/assets/img/logo/new-logo.png",
            logoStyles: {
                bgPos: "bottom",
                h: "55px",
                pos: "absolute",
                bottom: "20px",
                right: "6px",
                w: "283px",
                zIndex: 0,
                bgSize: "contain",
            },
        },
        {
            designation: "MERN Stack Developer",
            company: "Fine Solutions",
            link: "https://koderlabs.com",
            timeline: "Feb 2022 - Oct 2022 (9 mos)",
            text: `Worked with a team of three designers to build a marketing website & auditing web application for UrAudits. 
          Worked on Next.js websites and landing pages.
          Worked on a Human Resource Management System.`,
            logo: "/fine.png",
            logoStyles: {
                bgPos: "bottom",
                h: "85px",
                pos: "absolute",
                bottom: "20px",
                right: "10px",
                w: "calc(100vw - 275px)",
                zIndex: 0,
                bgSize: "contain",
            },
        },
        {
            designation: "MERN Stack Developer",
            company: "ARTT",
            link: "https://artt.edu.pk",
            timeline: "Nov 2020 - Jan 2022 (1 yr 3 mos)",
            text: `Collaborated with marketing team to develop a marketing website.
          Contributed to the development of learning management systems, which included implementing video lectures with DRM protection and integrating Zoom for live classes.
          Worked on accounting systems for ARTT.`,
            logo: "/artt.png",
            logoStyles: {
                bgPos: "bottom",
                h: "100px",
                pos: "absolute",
                bottom: "20px",
                right: "-39px",
                w: "230px",
                zIndex: 0,
                bgSize: "contain",
            },
        },
        {
            designation: "ASP.NET Developer",
            company: "Marsotech",
            link: "https://artt.edu.pk",
            timeline: "Mar 2019 - Feb 2020 (1yr)",
            text: `Worked on asp.net applications using mssql as database and entity framework, Service webapps. `,
            logo: "/artt.png",
            logoStyles: {
                bgPos: "bottom",
                h: "100px",
                pos: "absolute",
                bottom: "20px",
                right: "-39px",
                w: "230px",
                zIndex: 0,
                bgSize: "contain",
            },
        },
    ],
    CARRIER_START_DATE: "2019-03-01",
}