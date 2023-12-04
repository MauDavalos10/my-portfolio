export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Mauricio Dávalos",
  jobDescription: "Web Developer",
  about: `I'm a Software Engineer based in Quito, Ecuador 👨🏻‍💻.
   I have been working for 4 years, with a demonstrated history of working in the international Software Industry, including Unicorn Startups 🦄.
   Skilled in front-end development using React JS and TypeScript.
   Experienced in back-end development using Node JS and TypeScript, as well as proficiency in Python, Django. 
   Strong background in cloud computing, specifically in Amazon Web Services (AWS), AWS Lambda, DynamoDB, Amazon API Gateway, and Code Pipeline.
   Committed to ongoing learning and adept at tackling challenges, I am focused on continuous improvement in my career as an engineer.
  `,

  experience: [
    {
      name: "Shuffle",
      location: "Portland, Oregon, United States of America",
      startDate: "Sept 2023",
      endDate: "Present",
      description: [
        "✓ Developed an efficient messaging module with React, Tailwind CSS, WebSockets, and Twilio, optimizing operational efficiency. This system facilitates real-time communication for operators, eliminating the reliance on emails and consolidating all interactions into a unified, time-saving environment, thereby enhancing overall productivity.",
        "✓ Developed a Next.js project utilizing React, Tailwind CSS, and tRPC, creating a responsive mailing list application for users in each city to seamlessly subscribe to receive company updates.",
        "✓ Developed screens and UI components for the web application using React JS and Tailwind.",
        "✓ Fixed UI and functional issues in production.",
      ],
    },

    {
      name: "Kushki",
      location: "Quito, Ecuador",
      startDate: "Jun 2021",
      endDate: "Sept 2023",
      summary:
          "Summary: Kushki is one of the leading payment platforms in Latin America. Being a world class PayTech, Kushki is also one of the few unicorn startups in its region with over $180 million dollars in funding",
      description: [
        "✓ Led multiple SPA projects using React JS + TypeScript, delighting millions of users across 5 countries in Latin America, driving significant revenue generation during my tenure at Kushki",
        "✓ Played important role in contributing to Kushki's growth and achieving unicorn status, marking a milestone in the company's success.",
        "✓ Championed developments that not only satisfied existing users but also streamlined processes, making it appealing for new businesses to affiliate with Kushki.",
        "✓ Automated and optimized commerce migration across five Latin American countries, leveraging Scala and AWS Glue.",
        "✓ Significantly increased operational efficiency with the commerce migration process, resulting in a substantial productivity boost of over 50% by replacing manual processes with streamlined automation.",
        "✓ Led the development of a Material-UI dashboard optimizing transaction tracking for Latin American businesses.",
        "✓ Improved operational efficiency by 40% through backend optimization, benefitting company operators.",
        "✓ Enhanced user satisfaction by enabling easy downloads of transactions in preferred formats.",
        "✓ Implemented advanced filters for a powerful and streamlined data exploration experience.",
        "✓ Developed multiple backend features using RxJS and Node.js for transactions in Latin American corporate banks, including Mexico.",
        "✓ Utilized AWS services such as Lambda, DynamoDB, Elasticsearch and CI/CD Pipeline - AWS CodePipeline to enhance transactional operations and overall system efficiency.",
        "✓ Worked extensively with SCRUM agile methodology and tools like JIRA Dashboard."
      ],
    },
    {
      name: "Universidad de las Fuerzas Armadas “ESPE”",
      location: "Latacunga, Ecuador",
      startDate: "Jan 2021",
      endDate: "Jun 2021",
      description: [
        "✓ Played a key role in developing a medical records system for a university health program.",
        "✓ Utilized SCRUM agile methodology to enhance project efficiency and collaboration.",
        "✓ Designed and implemented backend modules using Spring Boot JAVA, ensuring seamless data management for the medical system.",
        "✓ Developed components for the Single Page Application (SPA) using Vue JS + TypeScript, with a focus on creating a responsive and user-friendly interface for students.",
        "✓ Employed MySQL as the database management system to efficiently handle and organize data related to student health records.",
        "✓ Contributed to the system's intuitive user interface by designing UI components using Figma, enhancing the overall user experience.",
      ],
    },
    {
      name: "Logical Tech Solutions",
      location: "Miami, United States of America",
      startDate: "Feb 2019",
      endDate: "Sep 2019",
      description: [
        "✓ Designed UI components using Adobe XD.",
        "✓ Built different SPA components using React JS / HTML5 / CSS3.",
        "✓ Built features for the backend using Node JS + Express library.",
      ],
    },
    {
      name: "Factu (Internship)",
      location: "Quito, Ecuador",
      startDate: "Sep 2018",
      endDate: "Feb 2019",
      description: [
        "✓ Developed insightful financial reports for the Ecuadorian Internal Revenue Service (SRI) utilizing Apache ECharts + Vanilla JS / HTML5 / CSS3.",
        "✓ Utilized financial data to craft concise and easily comprehensible reports, enhancing decision-making processes.",
        "✓ Implemented Apache ECharts + Vanilla JS to create visually compelling and professional charts for effective data representation.",
        "✓ Proficiently worked with financial datasets to extract meaningful insights and highlight key trends.",
        "✓ Collaborated with stakeholders to ensure the alignment of reports with organizational objectives and regulatory standards.",
        "✓ Contributed to a more informed decision-making process by delivering reports that were both insightful and user-friendly."
      ],
    },
  ],

  awards: [
    {
      name: "Academic Excellence Scholarship",
      location: "Latacunga, Ecuador",
      startDate: "2017",
      endDate: "2022",
      description: [
        " Received economical compensation for study fees and various expenses based on academic excellence\n" +
        "(Top 1.5% of class) at Universidad de las Fuerzas Armadas “ESPE”.",
      ],
    }
  ],

  education: [
    {
      name: "Universidad de las Fuerzas Armadas “ESPE”",
      location: "Latacunga, Ecuador",
      startDate: "2017",
      endDate: "2022",
      description: [
        "Diploma of Software Engineering, (Bachelor of Software Engineering)",
      ],
    },
    {
      name: "Colegio Técnico “Don Bosco”",
      location: "Quito, Ecuador",
      startDate: "2015",
      endDate: "2017",
      description: ["Electronics Engineering, Pre-Engineering"],
    },
  ],

  socialMedia: {
    github: "https://github.com/MauDavalos10",
    email: "mailto:andresjacomeliga@gmail.com",
    linkedin: "https://www.linkedin.com/in/maudavalos10/",
  },

  projects: [
    {
      title: "Shuffle Dating",
      isFeatured: true,
      thumbnail: "/assets/images/shuffle-dating.png",
      liveUrl: "https://shuffle.dating/",
    },
    {
      title: "Kushki",
      isFeatured: true,
      thumbnail: "/assets/images/kushki.png",
      liveUrl: "https://kushkipagos.com/en/",
    },
    {
      title: "Factu SRI Reports",
      isFeatured: true,
      thumbnail: "/assets/images/reportes-sri.png",
      liveUrl: "https://factu.com.ec/",
    },
  ],
};
