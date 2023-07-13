import { App, Tab, WorkContent, WorkFile, WorkType } from "src/types";
import error from "../../assets/dialog/error.png";
import info from "../../assets/dialog/info.png";
import warning from "../../assets/dialog/warning.png";
import help from "../../assets/dialog/help.png";
import cmd from "../../assets/cmd.png";
import file from "../../assets/workaccordion/file.png";
import emptyfile from "../../assets/workaccordion/emptyfile.png";
import akbank_hw1_1 from "../../assets/work/akbank_hw1/hw1_1.png";
import akbank_hw2_1 from "../../assets/work/akbank_hw2/hw2_1.png";
import akbank_hw2_2 from "../../assets/work/akbank_hw2/hw2_2.png";
import akbank_hw3_1 from "../../assets/work/akbank_hw3/hw3_1.png";
import akbank_final_1 from "../../assets/work/akbank_final/Final_1.png";
import akbank_final_2 from "../../assets/work/akbank_final/Final_2.png";
import akbank_final_3 from "../../assets/work/akbank_final/Final_3.png";
import mobile1_1 from "../../assets/work/mobileaction_hw1/mobile1_1.png";
import mobile1_2 from "../../assets/work/mobileaction_hw1/mobile1_2.png";
import mobile2_1 from "../../assets/work/mobileaction_hw2/mobile2_1.png";
import mobile2_2 from "../../assets/work/mobileaction_hw2/mobile2_2.png";
import mobile3_1 from "../../assets/work/mobileaction_hw3/mobile3_1.png";
import mobile3_2 from "../../assets/work/mobileaction_hw3/mobile3_2.png";
import mobilefinal_1 from "../../assets/work/mobileaction_final/mobilefinal_1.png";
import mobilefinal_2 from "../../assets/work/mobileaction_final/mobilefinal_2.png";
import mobilefinal_3 from "../../assets/work/mobileaction_final/mobilefinal_3.png";
import mobilefinal_4 from "../../assets/work/mobileaction_final/mobilefinal_4.png";
import mobilefinal_5 from "../../assets/work/mobileaction_final/mobilefinal_5.png";
import frewell_1 from "../../assets/work/frewell/frewell_1.png";
import trinder_0 from "../../assets/work/trinder/trinder_0.png";
import trinder_1 from "../../assets/work/trinder/trinder_1.png";
import trinder_2 from "../../assets/work/trinder/trinder_2.png";
import trinder_3 from "../../assets/work/trinder/trinder_3.png";
import trinder_4 from "../../assets/work/trinder/trinder_4.png";
import trinder_5 from "../../assets/work/trinder/trinder_5.png";
import vocab_1 from "../../assets/work/vocab/logo.png";
import vocab_2 from "../../assets/work/vocab/usage-1.png";
import vocab_3 from "../../assets/work/vocab/usage-2.png";
import chatgpt_1 from "../../assets/work/chatgpt-ext/usage-1.png";
import chatgpt_2 from "../../assets/work/chatgpt-ext/usage-2.png";
import chatgpt_3 from "../../assets/work/chatgpt-ext/usage-3.png";
import MS from "../../assets/work/MS.png";
import MS2 from "../../assets/work/MS2.png";
export const TechIcon = {
  JAVA: 
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
  SPRING:
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
  POSTGRESQL:
    "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  MONGODB:
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  REACT:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NEXTJS:
    "https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white",
  FIREBASE:
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  GOOGLECLOUDFUNCTIONS:
    "https://img.shields.io/badge/gCloud_Functions-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  HTML: 
    "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: 
    "https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  GOOGLECLOUD:
    "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white",
  AZURE:
    "https://img.shields.io/badge/microsoft%20azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  GITHUB:
    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
  PYTHON:
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=whit",
  ALGOLIA:
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Algolia-logo.svg",
  STRIPE:
    "https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white",
  CHATGPT:
    "https://freelogopng.com/images/all_img/1681038628chatgpt-icon-logo.png",
  CLOUDVISION:
    "https://miro.medium.com/v2/resize:fit:1400/1*tkAiRWvYmAi_RuRhRYgeiQ.jpeg"
};

export const AppDirectory: Map<number, Tab> = new Map([
  [
    0,
    {
      id: 0,
      title: "Welcome - Quick Start Guide",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.WELCOME,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    2,
    {
      id: 0,
      title: "Projects",
      message: "",
      Icon: cmd,
      isMinimized: false,
      zIndex: 0,
      program: App.MYWORK,
      prompt: false,
      backBtnActive: false,
    },
  ],
  [
    5,
    {
      id: 0,
      title: "Error",
      message: "",
      Icon: error,
      isMinimized: false,
      zIndex: 0,
      program: App.ERROR,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    6,
    {
      id: 0,
      title: "Warning",
      message: "",
      Icon: warning,
      isMinimized: false,
      zIndex: 0,
      program: App.WARNING,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    7,
    {
      id: 0,
      title: "Info",
      message: "",
      Icon: info,
      isMinimized: false,
      zIndex: 0,
      program: App.INFO,
      prompt: true,
      backBtnActive: false,
    },
  ],
  [
    8,
    {
      id: 0,
      title: "Help",
      message: "",
      Icon: help,
      isMinimized: false,
      zIndex: 0,
      program: App.HELP,
      prompt: true,
      backBtnActive: false,
    },
  ],
]);

export const WorkAccordionTitles = [
  WorkType.BOOTCAMP,
  WorkType.PERSONAL,
  WorkType.SENIOR,
  WorkType.WORK,
];

export const WorkData = [
  {
    id: 1,
    title: "Vocab Learning Chrome Extension",
    date: "Jan 2023 - Feb 2023",
    gitURL: "https://github.com/farukkavlak/Vocab-Learning-Chrome-Extension",
    techstack: [
      TechIcon.JAVASCRIPT,
      TechIcon.GOOGLECLOUD,
      TechIcon.CLOUDVISION,
      TechIcon.CHATGPT,
    ],
    gallery: [vocab_1,vocab_2,vocab_3],
    overview: `Vocabulary learning extension powered by AI.It is designed to be used to learn when there is a word that you do not understand in the subtitle while watching a movie. 
    It is a chrome extension that allows you to ask artificial intelligence for an explanation and example sentence with the help of a shortcut in real time when you encounter an English word that you do not know while watching a movie,series etc.
    
    To use the extension, just press the extension's shortcut while watching a movie, series or any video with subtitles. This shortcut is ctrl+h for windows and cmd+h for macos. 
    The video on the screen is paused so you don't miss the movie. Then, thanks to the Google Vision OCR API, the application captures the text in the photo and turns them into clickable buttons.
    (If you do not want to continue the process, you can press the ESC key, the buttons will disappear from the screen and the video will continue.) 
    When you click on the word you want to learn the meaning of, it takes the meaning of this word and an example sentence with the help of ChatGPT and shows it as an alert. When you close the alert, the video continues.
    Screenshots are black because of the Netflix Privacy Issues`,
  },
  {
    id: 2,
    title: "ChatGPT Chrome Extension",
    date: "Oct - Nov 2022",
    gitURL: "https://github.com/farukkavlak/ChatGPT-Chrome-Extension",
    techstack: [
      TechIcon.JAVASCRIPT,
      TechIcon.NEXTJS,
      TechIcon.CHATGPT,
    ],
    gallery: [
      chatgpt_1,
      chatgpt_2,
      chatgpt_3,
    ],
    overview: `It is designed to enable effective and efficient communication with ChatGPT. The project provides multiple example prompts that can be customized according to your preferences. Example Prompts:
    1: Translate / Improve: Turkish -> English
    2: English Correct
    3: Summarize
    4: Paraphrase
    5: Extract Keywords
    6: Ask me Anything`,
  },
  {
    id: 3,
    title: "Find Your Meme Chrome Extension",
    date: "Oct 2022 - Present",
    gitURL: "",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
      TechIcon.POSTGRESQL,
    ],
    gallery: [MS, MS2],
    overview: `I have developed a cloud inventory management system on gCloud with a Telegram bot 
    interface to help manage my online software distribution business. The system is able to retrieve,
    restock, validate and deliver digital goods to my customers. This system has helped me to automate
    crucial portions of my business processes and save me a lot of time and effort while also reducing
    the delivery time of my products. To date, this system has helped me to fulfil over 1000+ orders`,
  },
  {
    id: 4,
    title: "Senior Project - Trinder - 3D E-Commerce Platform",
    date: "Oct - Nov 2022",
    liveURL: "https://trinder-4pp.web.app/",
    gitURL: "",
    docURL: "https://trinder-6b720.web.app/",
    techstack: [
      TechIcon.REACT,
      TechIcon.FIREBASE,
      TechIcon.JAVASCRIPT,
      TechIcon.GOOGLECLOUD,
      TechIcon.GOOGLECLOUDFUNCTIONS,
      TechIcon.STRIPE,
      TechIcon.ALGOLIA,
    ],
    gallery: [
      trinder_0,
      trinder_1,
      trinder_2,
      trinder_3,
      trinder_4,
      trinder_5
    ],
    overview: `This application will act as a meeting platform for 3D printer owners and people who want to get a 3D print and does not own a printer themselves. 
    Both printer owners and customers will be able to put up adverts for offering printing services or looking for printing services. 
    Both parties will be able to communicate with a chatting system integrated in the application. Our application will be a meeting platform only. 
    Which means, payment and shipping will be agreed upon between the printer owner and the customer. 
    Application will also have a forum for general discussions, 3D printer discussions, sharing 3D model files etc.\n
    You can view the live version and the documentation/design of the project for better understanding.`,
  },
  {
    id: 5,
    title: "Akbank-Patika Bootcamp HW1 - House Management",
    date: "Feb 2023",
    gitURL: "https://github.com/farukkavlak/Akbank-Patika-JavaSpring-Bootcamp-Homeworks/tree/main/Akbank-JavaSpring-Bootcamp-Homework1",
    techstack: [TechIcon.JAVA],
    gallery: [akbank_hw1_1],
    overview: `Introductory assignment to use basic rules like Clean Code, OOP. The project aims to create a system for the management of different residential properties, including houses, villas and summerhouses. 
    The system provides functions to generate instances of these attribute types and calculate various statistics based on their attributes.`,
  },
  {
    id: 6,
    title: "Akbank-Patika Bootcamp HW2 - Country/President API",
    date: "Feb 2023",
    gitURL: "https://github.com/farukkavlak/Akbank-Patika-JavaSpring-Bootcamp-Homeworks/tree/main/Akbank-JavaSpring-Bootcamp-Homework1.1",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING
    ],
    gallery: [akbank_hw2_1, akbank_hw2_2],
    overview: `Country Management API with Java and Spring: This project provides a RESTful API for managing country data, built using Java and the Spring framework. 
    The API allows users to create, retrieve, and update information about countries, including their name and president's name.`,
  },
  {
    id: 7,
    title: "Akbank-Patika Bootcamp HW3 - Customer/Order Management",
    date: "Aug - Nov 2021",
    gitURL: "https://github.com/farukkavlak/Akbank-Patika-JavaSpring-Bootcamp-Homeworks/tree/main/Akbank-JavaSpring-Bootcamp-Homework2",
    techstack: [TechIcon.JAVA],
    gallery: [akbank_hw3_1],
    overview: `Introductory assignment to use basic rules like Clean Code, OOP with Java and Maven. The project aims to create a system for the customer can create orders and view their invoices.`,
  },
  {
    id: 8,
    title: "Akbank-Patika Bootcamp Final Case - Weather Forecast",
    date: "Aug - Nov 2021",
    gitURL: "https://github.com/farukkavlak/Akbank-JavaSpring-Bootcamp-FinalCase",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
      TechIcon.REACT,
      TechIcon.POSTGRESQL,
    ],
    gallery: [akbank_final_1, akbank_final_2, akbank_final_3],
    overview: `Weather Forecast and City Geocoding Project with ReactJS and Java Spring Boot: The main purpose of the application is to get the 5 day Weather Forecast according to the City Name by using https://openweathermap.org, save it in the database and display it to the user.
    Users can create accounts to save cities and view weather forecasts for their saved locations. The application stores city data and predictions in a PostgreSQL database. It has error handling and logging mechanisms to improve stability. 
    Feign (Open Feign) is used for efficient client communication. The frontend is built with ReactJS, making it easy for users to interact with the application.
    `,
  },
  {
    id: 9,
    title: "MobileAction-Patika Bootcamp HW1 - User/Comment API",
    date: "Feb 2023",
    gitURL: "https://github.com/farukkavlak/JavaSpring-Patika.dev-Bootcamp-Homeworks/tree/main/HW1-UserCommentProject/first-homework-farukkavlak-main",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
    ],
    gallery: [mobile1_1, mobile1_2],
    overview: `User and User Comment Management API with Java Spring Boot: This project provides a API for managing user data and user comments, built using Java Spring Boot. 
    The API includes functionality to register new users, retrieve user information, update user details, and deactivate users. Additionally, users can post comments, retrieve all comments, delete specific comments, and update the text of their own comments while preserving other attributes such as the comment date and associated product ID. 
    Swagger is integrated to provide API documentation and testing capabilities. `,
  },
  {
    id: 10,
    title: "MobileAction-Patika Bootcamp HW2 - Address Registration API",
    date: "Jun 2022",
    gitURL: "https://github.com/farukkavlak/JavaSpring-Patika.dev-Bootcamp-Homeworks/tree/main/HW2-AddressRegistrationProject/odev-2-farukkavlak-main",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
      TechIcon.POSTGRESQL
    ],
    gallery: [mobile2_1, mobile2_2],
    overview: `Address Registration System API with Java Spring Boot: This project provides a API for managing addresses, including countries, cities, districts, neighborhoods, streets, and individual addresses. 
    With this system, users can save, retrieve, update, and delete address-related data based on specific requirements. The API allows users to save country information and retrieve it using the country ID. 
    Similarly, users can save city data and retrieve it using the city's plate number. Districts can be saved and retrieved, and users can also retrieve districts belonging to a specific city. 
    The system supports saving and updating neighborhood names, and users can retrieve neighborhoods belonging to a particular district. 
    Additionally, street names can be saved and updated, and users can retrieve streets belonging to a specific neighborhood. The system also enables users to save addresses and delete them based on the address ID. `,
  },
  {
    id: 11,
    title: "MobileAction-Patika Bootcamp HW3 - Car Registration API",
    date: "Sept 2022 - Present",
    gitURL: "https://github.com/farukkavlak/JavaSpring-Patika.dev-Bootcamp-Homeworks/tree/main/HW3-CarRegistrationProject/odev-3-farukkavlak-main",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
      TechIcon.POSTGRESQL
    ],
    gallery: [mobile3_1, mobile3_2],
    overview: `Car Registration System API with Java Spring Boot: This project provide a API for managing car registrations and user accounts. 
    Users can register by providing their name, surname, username, email, and password. 
    The system enforces password validation rules, requiring at least one uppercase letter, one lowercase letter, one number, and one symbol. 
    Duplicate registrations with the same username or email are not allowed. User password changes are only permitted for logged-in users and require the entry of the old password along with the new password and its confirmation. 
    The system securely stores passwords in an encoded format in the database. When a user is deleted, all cars associated with that user are also removed from the system. 
    Users have the ability to query and view all the cars they own. Additionally, authenticated users can add their own cars, ensuring that the same car (identified by license plate) cannot be added by multiple users. 
    License plates are validated to exclude spaces, lowercase letters, and Turkish characters. Cars can be updated or deleted, providing flexibility for users. 
    The system also includes a service that allows vehicles to be retrieved based on their brand and model.`,
  },
  {
    id: 12,
    title: "MobileAction-Patika Bootcamp Final Case - Weather Air Pollution",
    date: "Sept 2022 - Present",
    gitURL: "https://github.com/farukkavlak/MobileActionFinalBackend",
    techstack: [
      TechIcon.JAVA,
      TechIcon.SPRING,
      TechIcon.REACT,
      TechIcon.POSTGRESQL
    ],
    gallery: [mobilefinal_1, mobilefinal_2, mobilefinal_3, mobilefinal_4, mobilefinal_5],
    overview: `Air Pollution Monitoring System with ReactJS and Java Spring Boot: This project aims to provide users with access to air pollution information based on city name and date range. 
    Leveraging the OpenWeatherMap API, the application retrieves historical air pollution data, specifically focusing on Carbon monoxide (CO), Ozone (O3), and Sulfur dioxide (SO2) values. 
    The retrieved pollutant concentration information is classified into categories such as 'Good,' 'Satisfactory,' 'Moderate,' 'Poor,' 'Severe,' and 'Hazardous.' 
    The application allows users to query air pollution information by providing the city name and optional date range, with a default range of the past week. 
    The application intelligently looks up the database for existing data and only queries the API for missing dates. Results fetched from the API are logged, indicating whether they were obtained from the database or the API. 
    The application handles missing data cases gracefully, considering the occurrence of errors for certain days. 
    Extensive testing has been conducted, including controller, service, and utility tests, to ensure method and line coverage.`,
  },
  {
    id: 13,
    title: "Frewell Project",
    date: "Sept 2022 - Present",
    gitURL: "",
    liveURL: "https://frewell.com/",
    techstack: [
      TechIcon.REACT,
      TechIcon.FIREBASE,
      TechIcon.GOOGLECLOUD,
      TechIcon.GOOGLECLOUDFUNCTIONS,
      TechIcon.HTML,
      TechIcon.CSS,
      TechIcon.PYTHON,
    ],
    gallery: [frewell_1],
    overview: `I worked on this project while working at the Bilişim Academy company. I made the backend part of the project, and I helped some components in the frontend part.
    Voice Uploading/Playing Web Application with Firebase,Python, ReactJS, and NodeJS: 
    Of course, there is a business logic behind the site, but the important thing here is the technical part.
    Frewell.com is a web application that allows users to upload their voice recordings and efficiently distribute them across multiple servers. 
    The application optimizes the distribution process to ensure smooth playback of the voices in a sequential manner with specific intervals. 
    It provides secure user authentication and authorization, an admin panel for managing users and content, integration with Stripe for payment processing, and services for sending emails and text messages. 
    The backend, built with Python, handles communication between servers, distribution of voices, periodic playback, and deletion of recordings. 
    Firebase is used for data storage and management. 
    Python was used to distribute and play sounds smoothly and optimally to servers in the background. Here, the communication of computers on the same network, socket programming, etc. used.
    The frontend, developed using ReactJS, offers a user-friendly interface for easy interaction with the application. 
    Explore the features of https://frewell.com, where users can share their voices and access a set of functionalities.`,
  },
] as unknown as WorkContent[];

export const WorkAccordionContent = [
  {
    id: 1,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Vocab Learning Chrome Extension",
    content: WorkData[WorkData.findIndex((x) => x.id === 1)],
  },
  {
    id: 2,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "ChatGPT Chrome Extension",
    content: WorkData[WorkData.findIndex((x) => x.id === 2)],
  },
  {
    id: 3,
    type: WorkType.PERSONAL,
    icon: emptyfile,
    title: "Find Your Meme Chrome Extension",
    content: WorkData[WorkData.findIndex((x) => x.id === 3)],
  },
  {
    id: 4,
    type: WorkType.SENIOR,
    icon: file,
    title: "Trinder - 3D E-Commerce Platform",
    content: WorkData[WorkData.findIndex((x) => x.id === 4)],
  },
  {
    id: 5,
    type: WorkType.BOOTCAMP,
    icon: file,
    title: "Akbank-Patika Bootcamp HW1",
    content: WorkData[WorkData.findIndex((x) => x.id === 5)],
  },
  {
    id: 6,
    type: WorkType.BOOTCAMP,
    icon: file,
    title: "Akbank-Patika Bootcamp HW2",
    content: WorkData[WorkData.findIndex((x) => x.id === 6)],
  },
  {
    id: 7,
    type: WorkType.BOOTCAMP,
    icon: file,
    title: "Akbank-Patika Bootcamp HW3",
    content: WorkData[WorkData.findIndex((x) => x.id === 7)],
  },
  {
    id: 8,
    type: WorkType.BOOTCAMP,
    icon: file,
    title: "Akbank-Patika Bootcamp Final Case",
    content: WorkData[WorkData.findIndex((x) => x.id === 8)],
  },
  {
    id: 9,
    type: WorkType.BOOTCAMP,
    icon: emptyfile,
    title: "MobileAction-Patika Bootcamp HW1",
    content: WorkData[WorkData.findIndex((x) => x.id === 9)],
  },
  {
    id: 10,
    type: WorkType.BOOTCAMP,
    icon: emptyfile,
    title: "MobileAction-Patika Bootcamp HW2",
    content: WorkData[WorkData.findIndex((x) => x.id === 10)],
  },
  {
    id: 11,
    type: WorkType.BOOTCAMP,
    icon: emptyfile,
    title: "MobileAction-Patika Bootcamp HW3",
    content: WorkData[WorkData.findIndex((x) => x.id === 11)],
  },
  {
    id: 12,
    type: WorkType.BOOTCAMP,
    icon: emptyfile,
    title: "MobileAction-Patika Bootcamp Final Case",
    content: WorkData[WorkData.findIndex((x) => x.id === 12)],
  },
  {
    id: 13,
    type: WorkType.WORK,
    icon: emptyfile,
    title: "Frewell",
    content: WorkData[WorkData.findIndex((x) => x.id === 13)],
  },
] as WorkFile[];
