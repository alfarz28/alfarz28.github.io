import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma, FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlask, SiMongodb, SiPython, SiRedux } from "react-icons/si";
const baseUrl = "";
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export const ProjectsData = [
  {
    id: 1,
    title: "MindEase",
    desc: "Pychology Website",
    cat: "Development",
    date: "2024",
    img: `${baseUrl}/images/MindEase-Modal.png`,
    modal: `${baseUrl}/images/MindEase-Modal.png`,
    url: "https://mind-ease-five.vercel.app/",
    github: "https://github.com/alfarz28/MindEase",
    studycase:
      "MindEase is a psychology website that offers a range of mental health services. I designed and developed this website to provide a platform for users to access mental health resources and services. The website features a clean and intuitive design, making it easy for users to navigate and find the information they need.",
    tech: [<FaReact key="react" />, <FaSass key="sass" />],
    features: [],
  },
  {
    id: 2,
    title: "Seku",
    desc: "E-commerce for Home Decor",
    cat: "Design & Development",
    position: "top",
    img: `${baseUrl}/images/Seku-Modal.png`,
    modal: `${baseUrl}/images/Seku-Modal.png`,
    url: `${baseUrl}/Seku/`,
    github: "https://github.com/alfarz28/Seku",
    studycase:
      "Seku solves the problem of finding identical or similar work setup decor products online by adding direct purchase links to each setup reference. I integrated product data into the database for every photo, enabling automatic display of purchase links. This allows users to instantly see and buy the exact products featured in their desired setups, saving time and effort.",
    tech: [<FaReact key="react" />, <RiTailwindCssFill key="tailwind" />],
    features: [
      {
        id: 1,
        title: "Integrated products data",
        desc: "User can see the product details and go to the product page",
        img: `${baseUrl}/images/seku-feature-1.png`,
      },
      {
        id: 2,
        title: "InsZone",
        desc: "Inspiration page, user can see the reference of the setups",
        img: `${baseUrl}/images/seku-feature-2.png`,
      },
      {
        id: 3,
        title: "Products Page",
        desc: "User can see all products and go to the product page",
        img: `${baseUrl}/images/seku-feature-3.png`,
      },
    ],
  },
  {
    id: 3,
    title: "Nusantara Trip",
    desc: "Travel Website",
    cat: "Design",
    type: "design",
    date: "2024",
    img: `${baseUrl}/images/NusantaraTrip-Cover.png`,
    modal: `${baseUrl}/images/NusantaraTrip-Modal.png`,
    file: "/files/tripToBromoDesign.pdf",
    url: "/files/tripToBromoDesign.pdf",
    studycase:
      "Nusantara Trip is a premier travel service website offering a diverse range of travel packages across Indonesia. In this design, we’re putting the spotlight on Mount Bromo, showcasing it as the ultimate destination. Explore the wonders of Bromo and experience the breathtaking beauty of this iconic landmark with our expertly curated travel options. ",
    tech: [<FaFigma key="figma" />],
    features: [],
  },
  {
    id: 4,
    title: "Nusantara Code",
    desc: "Education Website",
    cat: "Design",
    type: "design",
    date: "2024",
    img: `${baseUrl}/images/NusantaraCode-Cover.png`,
    modal: `${baseUrl}/images/NusantaraCode-Modal.png`,
    url: "/files/nusantaraCodeDesign.pdf",
    studycase:
      "Nusantara Code is your go-to platform for web development courses, designed to turn you into a skilled web developer. Our website offers an array of interactive features, including CodePlay, an online code editor for hands-on practice, competency tests to gauge your progress, and quizzes for each lesson to reinforce your learning. Dive into a comprehensive learning experience and master the art of web development with us!",
    tech: [<FaFigma key="figma" />],
    features: [],
  },
  {
    id: 5,
    title: "Flowy",
    desc: "Company Profile ",
    cat: "Development",
    date: "2024",
    img: `${baseUrl}/images/flowy-cover.png`,
    modal: `${baseUrl}/images/Flowy-Modal.png`,
    url: `${baseUrl}/Flowy/`,
    github: "https://github.com/alfarz28/Flowy",
    studycase:
      "Flowy is a company profile for a digital product agency. I came across this website design on Pinterest and decided to implement it to hone my slicing skills. The project is a great opportunity to practice and perfect the art of turning design concepts into functional digital products.",
    tech: [<FaHtml5 key="html" />, <RiTailwindCssFill key="tailwind" />],
    features: [],
  },
  {
    id: 6,
    title: "HarvestTable",
    desc: "Company Profile",
    cat: "Development",
    date: "2024",
    img: `${baseUrl}/images/HarvestTable-cover.png`,
    modal: `${baseUrl}/images/HarvestTable-Modal.png`,
    url: `${baseUrl}/HarvestTable/`,
    github: "https://github.com/alfarz28/HarvestTable",
    studycase:
      "HarvestTable is a company profile for a restourant. I came across this website design on Dribbble and decided to implement it to hone my slicing skills. The project is a great opportunity to practice and perfect the art of turning design concepts into functional digital products.",
    tech: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <IoLogoJavascript key="js" />,
    ],
    features: [],
  },
  {
    id: 7,
    title: "HooBank",
    desc: "Company Profile",
    cat: "Development",
    img: `${baseUrl}/images/Hoobank-Cover.png`,
    modal: `${baseUrl}/images/Hoobank-Modal.png`,
    url: `${baseUrl}/project-HooBank/`,
    github: "https://github.com/alfarz28/project-HooBank",
    studycase:
      "I've been diving into modern design concepts through a fantastic project guide by the incredible YouTube channel 'JavaScript Mastery'. Their tutorials are incredibly insightful and have greatly enhanced my understanding of modern design principles. If you're passionate about leveling up your skills, I highly recommend checking out their channel!",
    tech: [<FaReact key="react" />, <RiTailwindCssFill key="tailwind" />],
    features: [
      {
        id: 1,
        title: "Feature",
        desc: "",
        img: `${baseUrl}/images/hoobank-feature-1.png`,
      },
      {
        id: 2,
        title: "Product",
        desc: "",
        img: `${baseUrl}/images/hoobank-feature-2.png`,
      },
      {
        id: 3,
        title: "Client",
        desc: "",
        img: `${baseUrl}/images/hoobank-feature-3.png`,
      },
    ],
  },
  {
    id: 8,
    title: "Fotoinaja",
    desc: "AI-Powered Event Photography Portal & Marketplace",
    cat: "Development",
    date: "July 2026",
    img: `${baseUrl}/images/Fotoin-feature-3.jpg`,
    modal: `${baseUrl}/images/Fotoin-Cover.jpg`,
    url: "https://fotoinaja.id/",
    studycase:
      "Built Fotoinaja from the ground up as Front-End Developer at PT. Adhikari Inovasi Indonesia, delivering an end-to-end web photography portal and marketplace powered by deep learning face recognition. Using React.js, Vite, Tailwind CSS, and shadcn/ui, I architected a responsive multi-role platform serving Super Admins, Finance Admins, Photographers, and Buyers. Key engineering highlights include a modular, domain-scoped Axios API layer with centralized error handling, role-based access control (RBAC), real-time QRIS payment tracking via MQTT over WebSockets (wss://), and API integrations with external digital invitation platforms. I also led the comparative benchmarking of three biometric models (AuraFace, Buffalo_L, and FaceNet) across 1,000+ multi-face event photos to select a commercially licensed, high-precision model for production.",
    tech: [
      <FaReact key="react" />,
      <RiTailwindCssFill key="tailwind" />,
      <SiFlask key="flask" />,
      <SiPython key="python" />,
      <SiMongodb key="mongodb" />,
      <SiRedux key="redux" />,
    ],
    features: [
      {
        id: 1,
        title: "Automated Face Matching & Threshold Control",
        desc: "Integrated AuraFace deep learning embeddings with an interactive similarity slider (0.35–0.90), enabling event attendees to automatically discover watermarked photos of themselves from thousands of uploads.",
        img: `${baseUrl}/images/fotoin-feature-1.jpg`,
      },
      {
        id: 2,
        title: "Multi-Role Dashboards & Access Control",
        desc: "Engineered strict route protection (RBAC) and tailored workspaces for Super Admins, Finance Admins (payout & revenue auditing), Photographers (gallery & earnings), and Buyers.",
        img: `${baseUrl}/images/fotoin-feature-2.jpg`,
      },
      {
        id: 3,
        title: "Real-Time QRIS Settlement via MQTT",
        desc: "Built a custom React hook (useMqtt) over WebSockets (wss://) to listen to payment webhooks in real time, unlocking Full-HD unwatermarked downloads instantly upon payment without page reloads.",
      },
      {
        id: 4,
        title: "Domain-Scoped API Layer Architecture",
        desc: "Centralized HTTP client logic using Axios separated by business domain (auth, cart, matches, wallet, orders) with automatic Bearer token injection and unified error handling.",
      },
      {
        id: 5,
        title: "Digital Invitation Ecosystem Sync",
        desc: "Connected external digital invitation platforms via REST API so event guests can view and purchase their matched photos directly from their invitation card.",
      },
    ],

    projectOverview: {
      role: "Front-End Developer & AI Evaluator",
      client: "PT. Adhikari Inovasi Indonesia (AWH)",
      workflow: "Agile SCRUM",
      platform: "Responsive Web Application (SPA)",
      userRoles: [
        "Super Admin",
        "Finance Admin",
        "Photographer (Internal & Freelance)",
        "Buyer",
      ],
    },
    background:
      "Traditional event photography platforms are often locked into single-niche events like marathons, force users to install native mobile apps, and lack granular operational controls. Fotoinaja solves this by providing an instant, browser-based photography portal and marketplace for weddings, graduations, concerts, and corporate gatherings combining automated biometric photo discovery with credit bundles, vouchers, and instant QRIS checkout.",
    challengesAndSolutions: [
      {
        challenge:
          "Complex multi-role workflows spanning photo moderation, dynamic fee splits, and payouts.",
        solution:
          "Designed a unified Figma Design System and built a role-guarded React SPA with dedicated portals for photographers, finance auditors, admins, and buyers.",
      },
      {
        challenge:
          "High code duplication and state inconsistency across dozens of API endpoints.",
        solution:
          "Architected a modular Axios service layer grouped by domain scope (`src/services/api/`) with centralized interceptors and standardized error handling.",
      },
      {
        challenge:
          "Balancing biometric accuracy, inference reliability, and commercial licensing.",
        solution:
          "Benchmarked AuraFace, Buffalo_L, and FaceNet on 1,000+ multi-face images; deployed AuraFace (94.30% accuracy at 0.4 threshold, 96.60% precision at 0.5) for full commercial compliance.",
      },
    ],
    aiBenchmark: {
      summary:
        "Stress-tested 3 deep learning face recognition models across 1,000+ multi-face event photos to optimize precision and commercial readiness.",
      models: [
        {
          name: "AuraFace",
          status: "Production Pick",
          accuracy: "94.30%",
          precision: "96.60%",
          license: "Commercial Ready",
          note: "Best balance of high precision under varied event lighting and full commercial licensing.",
        },
        {
          name: "Buffalo_L",
          status: "Benchmark Runner-Up",
          accuracy: "99.02%",
          precision: "99.76%",
          license: "Non-Commercial Only",
          note: "Highest raw accuracy and F1-score (95.44%), excluded due to non-commercial license limits.",
        },
        {
          name: "FaceNet",
          status: "Evaluated",
          accuracy: "93.44%",
          precision: "26.96%",
          license: "Open Source",
          note: "High false-positive rate at standard thresholds, making it unsuitable for automated marketplace matching.",
        },
      ],
    },
    impactMetrics: [
      {
        value: "100%",
        label: "Functional Pass Rate",
        detail:
          "Verified across 25+ end-to-end scenarios covering auth, biometric matching, QRIS checkout, and payouts.",
      },
      {
        value: "0 ms",
        label: "Main-Thread Blocking",
        detail:
          "Achieved 0ms Total Blocking Time (TBT) on Lighthouse across core routes for snappy mobile & desktop interactions.",
      },
      {
        value: "4 Roles",
        label: "Unified Ecosystem",
        detail:
          "Streamlined operations from photographer upload and admin review to buyer checkout and finance settlement.",
      },
    ],
    images: [
      "/images/fotoin/ProsesPengujianModel.png",
      "/images/fotoin/TechStack.png",
    ],
  },
];
