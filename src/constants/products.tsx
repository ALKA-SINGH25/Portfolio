export const products = [
  {
    title: "Code Quest",
    description:
      "Built a full-stack competitive programming platform using Next.js and MongoDB with real-time collaboration powered by WebRTC and Socket.IO. Integrated secure remote code execution via JDoodle API supporting 10+ languages along with live output rendering.",

    // 👇 LIVE LINK
    href: "https://code-quest-fawn-five.vercel.app/",

    // 👇 GITHUB LINK
    github: "https://github.com/ALKA-SINGH25/Code-Quest",

    thumbnail: "/images/codequest.png",
    stack: ["Next.js", "MongoDB", "WebRTC", "Socket.IO", "JDoodle API"],
    slug: "code-quest",
  },

  {
    title: "Baat Cheet",
    description:
      "Developed a real-time messaging platform using the MERN stack with secure JWT-based authentication, online presence indicators, and responsive UI features. Enabled low-latency multi-user communication using Socket.IO for seamless real-time messaging.",

    href: "https://baat-cheet-6edp.onrender.com/",
    github: "https://github.com/ALKA-SINGH25/Baat-Cheet",

    thumbnail: "/images/baatcheet.png",
    stack: ["React", "Node.js", "MongoDB", "Express", "Socket.IO"],
    slug: "baat-cheet",
  },

  {
    title: "Multi Threaded Proxy Server",
    description:
      "Built a multi-threaded proxy server in C capable of handling concurrent client requests using semaphores. Implemented an LRU caching mechanism to reduce data retrieval latency and improve overall system performance, applying core concepts of computer networks and concurrency.",

    // ❌ No live link (backend project)
    href: "",
    github: "https://github.com/ALKA-SINGH25/MultiThreadedProxyServer",

    thumbnail: "/images/proxy.png",
    stack: ["C", "Computer Networks", "Concurrency", "LRU Cache"],
    slug: "proxy-server",
  },
];
