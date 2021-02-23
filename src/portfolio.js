/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Yazeed AlKhalaf",
  title: "Hi all, I'm Yazeed",
  subTitle: emoji(
    "I'm an application developer and designer, specialized in building cross-platform applications using Google's Flutter framework."
  ),
  resumeLink: "https://drive.google.com/file/d/17jAp954jJqaHT1DDQgo938P7LTIm28TE/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yazeedalkhalaf",
  linkedin: "https://www.linkedin.com/in/yazeedalkhalaf/",
  gmail: "yazeedfady@gmail.com",
  gitlab: "https://gitlab.com/yazeedalkhalaf",
  facebook: "https://www.facebook.com/yazeedfady/",
  medium: "https://yazeedalkhalaf.medium.com/",
  stackoverflow: "https://stackoverflow.com/users/11105538/yazeed-alkhalaf",
  // Instagram and Twitter are also supported in the links!
  instagram: "https://www.instagram.com/yazeedalkhalaf/",
  twitter: "https://twitter.com/YazeedAlKhalaf",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications using Flutter"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Google Cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AlRowad International Schools",
      logo: require("./assets/images/alrowad_logo.png"),
      subHeader: "High School",
      duration: "Aug 2019 - Present",
      desc: emoji("I love this school so much 🚀"),
      descBullets: [
        "Created Code Crew club where I teach programming but specifically Flutter"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase",
      progressPercentage: "70%"
    },
    {
      Stack: "ReactJS",
      progressPercentage: "70%"
    },
    {
      Stack: "Linux Server",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Partner",
      company: "Masaha App",
      companylogo: require("./assets/images/masaha_logo.jpg"),
      date: "Aug 2020 – Present",
      desc: "Work on the mobile app and technical stuff.",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "yazeedalkhalaf", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/saayaHealthLogo.webp"),
    //   projectName: "Saayahealth",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://saayahealth.com/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hajj Hackathon",
      subtitle: "Youngest participant in Hajj Hackathon.",
      image: require("./assets/images/hajj_hackathon.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/16fiQoqTznqKlPm5ZxFR5aTIsaSPi_-rB/view?usp=sharing"
        },
        {
          name: "MBC TV Meeting",
          url:
            "https://www.youtube.com/watch?v=hCPJRXgQiaM&ab_channel=%D8%B5%D8%A8%D8%A7%D8%AD%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A7%D8%B9%D8%B1%D8%A8"
        }
      ]
    },
    {
      title: "Google Talk Facilitation",
      subtitle: "Facilitated a Google Saudi Community Talk.",
      image: require("./assets/images/gcdc_saudi.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1L2TAtsE2uQULreRWZa1HiDEbDHfSjZrg/view?usp=sharing"
        }
      ]
    },

    {
      title: "Cyber Security for Kids",
      subtitle: "Certificate of participation in Cyber Security for Kids.",
      image: require("./assets/images/attaa_sa.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/1f6sodGIrpdPzSg1ih6p_yNUIYGTxCPLz/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://yazeedalkhalaf.medium.com/i-made-flutter-installer-using-flutter-60506c1127b5",
      title: emoji("I made Flutter Installer using Flutter 🚀"),
      description:
        "My name is Yazeed AlKhalaf. I am 16 years old. I am living in Saudi Arabia, originally from Syria. I like Flutter, Google’s Dart framework. I have been using it since the early beta."
    },
    {
      url: "https://blog.alkhalaf.dev/top-10-pro-tips-in-visual-studio-code",
      title: "Top 10 PRO Tips in Visual Studio Code",
      description:
        "According to the 2019 Stack Overflow survey, Visual Studio Code grew from being a nonexistent code editor to the single most used code editor by developers around the world!"
    },
    {
      url: "https://yazeedalkhalaf.medium.com/debug-your-flutter-app-on-a-real-android-device-over-wifi-bd70a7c25abe",
      title: "Debug your Flutter app on a real Android device over WiFi!",
      description: "Well, I got this question in my mind about debugging my app over WiFi so I started by googling and found that not a lot of people care about it but for me it did. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "How to use an API with Flutter? (Arabic)",
      subtitle: "Talk with Google Saudi Community",
      slides_url: "",
      event_url:
        "https://www.youtube.com/watch?v=N4Os782By6Y&ab_channel=GoogleSaudiCommunity"
    },
    {
      title: "What are the Row & Column widgets and there use cases? (Arabic)",
      subtitle: "Widget of The Week with FlutterSA",
      slides_url: "",
      event_url:
        "https://www.youtube.com/watch?v=BDE7MzTG2dU&ab_channel=FlutterSA"
    },
    {
      title: "What are Images & Assets? (Arabic)",
      subtitle: "Widget of The Week with FlutterSA",
      slides_url: "",
      event_url:
        "https://www.youtube.com/watch?v=MGfEq7gxFEU&ab_channel=FlutterSA"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+966509733490",
  email_address: "yazeedfady@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "yazeedalkhalaf", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
