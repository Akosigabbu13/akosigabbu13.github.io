const projects = {
  stingray: {
    label: "01 / MindBridge XR",
    title: "Stingray Smart Bar",
    body: "An exercise bar designed to track X, Y, and Z movement, helping athletes and older adults refine form and reduce injury risk. I developed and tested ESP32 firmware, integrated 9-DoF IMU sensors, and contributed across Arduino C++, React/Vite, FastAPI, PostgreSQL, SQLAlchemy, and MQTT workflows.",
    note: "A full-stack rehabilitation technology project built at MindBridge XR."
  },
  dreamveil: {
    label: "02 / Independent GenAI build",
    title: "Dreamveil",
    body: "A GenAI project that turns dreams into visual storyboards across Windows, Android, and iOS. I improved image generation with Gemini Banana 2, added image saving, resolved product bugs, and delivered founder requests across its frontend and backend.",
    note: "An exploration of expressive, founder-minded product thinking."
  },
  afssc: {
    label: "03 / Capstone project · 2022",
    title: "Automatic Fire Suppression System for Cars",
    body: "A safety-focused high-school capstone project centred on automatic fire suppression for cars. I acted as lead programmer and system builder, turning a practical safety problem into a complete project concept and prototype.",
    note: "Recognised with 3rd Overall and 4th Best Abstract at the Philippine International School - Qatar capstone competition."
  },
  mindbridge: {
    label: "Experience / 2026",
    title: "MindBridge XR",
    body: "At MindBridge XR in Qatar Science and Technology Park, I worked across full-stack, embedded systems, engineering, and IT. I contributed to Stingray Smart Bar, hardware and firmware troubleshooting, sensor integration, documentation, and handover work.",
    note: "Stingray Smart Bar is the key project from this role."
  },
  technician: {
    label: "Experience / 2024–Present",
    title: "Freelance PC Technician",
    body: "I diagnose, repair, and upgrade computers and laptops for individual clients. The work covers Windows installation, drivers, BIOS configuration, hardware installation, data recovery, performance optimisation, and clear technical communication.",
    note: "Practical problem-solving for people who need their technology to work."
  },
  technicalhead: {
    label: "Experience / 2023–2024",
    title: "Technical Head · Youth for Christ Qatar",
    body: "I led technical and audiovisual requirements for live events and organisational activities, setting up and troubleshooting computers, displays, audio equipment, and other live technical systems with event teams.",
    note: "Live operations demand calm, reliable systems thinking."
  },
  simulatedpatient: {
    label: "Experience / 2025–2026",
    title: "Simulated Patient · Qatar University",
    body: "I supported medical education and clinical simulation activities, requiring consistent scenarios, clear communication, adaptability, and professionalism with students and faculty.",
    note: "A different kind of systems work: people, communication, and consistency."
  },
  agriteq: {
    label: "Experience / Community · 2026",
    title: "AgriTeQ · UDST",
    body: "I volunteered as a UDST student at AgriTeQ, contributing to a major agriculture and technology event and staying close to real-world industry conversations.",
    note: "Useful work happens in communities, not only behind a screen."
  }
};

const modal = document.querySelector("#project-modal");
const close = document.querySelector(".close");

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[button.dataset.modal];
    if (!project) return;
    document.querySelector("#modal-label").textContent = project.label;
    document.querySelector("#modal-title").textContent = project.title;
    document.querySelector("#modal-body").textContent = project.body;
    document.querySelector("#modal-note").textContent = project.note;
    modal.showModal();
  });
});

close.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

document.querySelector("#year").textContent = new Date().getFullYear();
