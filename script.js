const projects = {
  stingray: {
    label: "01 / MindBridge XR · 2026",
    title: "Stingray Smart Bar",
    body: "A rehabilitation exercise bar designed to track movement across the X, Y, and Z axes. I developed and tested ESP32/ESP32-S3 firmware, integrated 9-DoF IMU sensors over I²C, and worked across Arduino C++, React/Vite, Python/FastAPI, PostgreSQL, SQLAlchemy, and MQTT data workflows.",
    note: "Movement feedback designed to help athletes and older adults refine form and reduce injury risk."
  },
  dreamveil: {
    label: "02 / Independent GenAI build",
    title: "Dreamveil",
    body: "A GenAI project that turns dreams into visual storyboards across Windows, Android, and iOS. I improved image generation with Gemini Banana 2, added image-saving functionality, resolved product bugs, and delivered founder requests across its frontend and backend.",
    note: "An exploration of expressive, founder-minded product development."
  },
  afssc: {
    label: "03 / Capstone project · 2022",
    title: "Automatic Fire Suppression System for Cars",
    body: "A safety-focused high-school capstone project for automatic fire suppression in cars. I served as lead programmer and system builder, taking a practical safety concern into a complete project concept and prototype.",
    note: "Recognised with 3rd Overall and 4th Best Abstract at the PISQ capstone competition."
  },
  mindbridge: {
    label: "Experience / 2026",
    title: "MindBridge XR",
    body: "At MindBridge XR in Qatar Science and Technology Park, I worked across embedded systems, full-stack engineering, and IT. My work included the Stingray Smart Bar, hardware and firmware troubleshooting, sensor integration, documentation, and handover support.",
    note: "Stingray is the clearest proof point from this experience."
  },
  technician: {
    label: "Experience / 2024—Present",
    title: "Freelance PC Technician",
    body: "I diagnose, repair, and upgrade computers and laptops for individual clients. The work covers Windows installation, drivers, BIOS configuration, hardware installation, data recovery, optimisation, and clear technical communication.",
    note: "Practical problem-solving for people who need their technology to work."
  },
  technicalhead: {
    label: "Experience / 2023—2024",
    title: "Technical Head · Youth for Christ Qatar",
    body: "I led technical and audiovisual requirements for live events and organisational activities, setting up and troubleshooting computers, displays, audio equipment, and other live systems with event teams.",
    note: "Live operations demand calm, reliable systems thinking."
  },
  simulatedpatient: {
    label: "Experience / 2025—2026",
    title: "Simulated Patient · Qatar University",
    body: "I supported medical education and clinical simulation activities, requiring consistent scenarios, clear communication, adaptability, and professionalism with students and faculty.",
    note: "A different kind of systems work: people, communication, and consistency."
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
    close.focus();
  });
});

close.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
document.querySelector("#year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  const animated = document.querySelectorAll(".feature-project, .mini-project, .portrait-copy, .tool-list article, .experience-list article, .credential-grid article, .contact");
  animated.forEach((element) => element.classList.add("will-reveal"));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  animated.forEach((element) => observer.observe(element));

  const art = document.querySelector(".hero-art img");
  window.addEventListener("scroll", () => {
    const offset = Math.min(window.scrollY * .08, 48);
    art.style.transform = "translateY(" + offset + "px) scale(1.18)";
  }, { passive: true });
}
