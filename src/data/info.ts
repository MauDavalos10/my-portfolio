export const info = {
  baseUrl: "https://mau-portfolio-three.vercel.app/",
  name: "Mauricio Dávalos",
  jobDescription: "Web Developer",
  about: `I'm a Software Engineer based in Quito, Ecuador. Experienced in front-end and back-end development using React JS, Node JS, and TypeScript, as well as cloud computing with AWS Lambda, DynamoDB, Amazon API Gateway, and Code Pipeline. I am adept at tackling challenges + committed to ongoing learning and improvement in my career as an engineer.
  `,

  experience: [
    {
      name: "Shuffle",
      location: "Portland, Oregon, United States of America",
      startDate: "Sept 2023",
      endDate: "Present",
      summary: "Summary: startup running live speed dating events. Founders are serial entrepreneurs with backgrounds at Riot Games, Scale AI, IBM, and MIT.",
      description: [
          "- Worked directly with the startup's cofounders as first full-time engineering hire.",
          "- Developed a live chat messaging interface for admin dashboard to replace Openphone as an external vendor, optimizing event ops and customer communications. Used React, Tailwind CSS, WebSockets, and Twilio.",
          "- Build responsive mailing list subscription app using React, Tailwind CSS, and tRPC.",
          "- Developed screens and UI components for the web application using React JS and Tailwind.",
          "- Replaced RSVPify with in-house registration system.",
          "- Fixed UI and functional issues in production.",
      ],
    },

    {
      name: "Kushki",
      location: "Quito, Ecuador",
      startDate: "Jun 2021",
      endDate: "Sept 2023",
      summary:
      "Summary: Kushki is Stripe for Latam, and the first startup in Ecuador to become a unicorn (a year after I joined). Product used by millions across 5 countries in Latam.",
      description: [
          "- Contributed to ETL pipeline project automating the migration of old merchants to new database version with Scala, which ultimately replaced an entire company department previously doing the workflow manually.",
        "- Built key dashboard features for internal “Console 3.0” including components, API integrations, and screen layouts: filter transactions, download button, chargebacks, security ID copy button, etc.",
        "- Delivered robust code performing well against 100% unit & integration test coverage (mocking API calls, etc), minimizing bugs & making QA team happy.",
        "- Deployed own features in CI/CD paradigm, working across front + back-end in React JS, TypeScript, RxJS, Node.js, and AWS (Lambda, DynamoDB, Elasticsearch and CI/CD Pipeline - AWS CodePipeline).",
        "- Worked extensively with SCRUM agile methodology and tools like JIRA.",
      ],
    },
    {
      name: "Medical Records Project - Universidad de las Fuerzas Armadas “ESPE”",
      location: "Latacunga, Ecuador",
      startDate: "Jan 2021",
      endDate: "Jun 2021",
      description: [
          "- Asked by computer science professor to help create new medical records software for the university as an internship.",
          "- Built responsive components for the Single Page Application (SPA) using Vue JS + TypeScript.",
          "- Implemented backend modules using Spring Boot JAVA, MySQL.",
          "- Full-stack development + some design improvements to Figma components.",
      ],
    },
    {
      name: "Factu (Internship)",
      location: "Quito, Ecuador",
      startDate: "Feb 2019",
      endDate: "Sep 2019",
      description: [
          "- Simplified complex data in financial reports for the Ecuadorian Internal Revenue Service (SRI) utilizing Apache ECharts + Vanilla JS / HTML5 / CSS3.",
          "- Designed report page layouts in Figma.",
          "- Collaborated with CEO to ensure the alignment of reports with organizational objectives and regulatory standards.",
      ],
    },
    {
      name: "Logical Tech Solutions (Internship)",
      location: "Miami, United States of America",
      startDate: "Sep 2018",
      endDate: "Feb 2019",
      description: [
        "- Designed UI components using Adobe XD.",
        "- Built different SPA components using React JS / HTML5 / CSS3.",
        "- Built features for the backend using Node JS + Express library.",
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
