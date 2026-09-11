const projects = {
  stingray: { label: "01 / MindBridge XR", title: "Stingray Smart Bar", body: "Stingray is an exercise bar built to track movement on the X, Y, and Z axes. The goal is simple but meaningful: give athletes and older adults feedback that helps them improve form and reduce potential injury risk. I developed and tested ESP32/ESP32-S3 firmware, integrated 9-DoF IMU sensors over I²C, and worked across Arduino C++, React/Vite, Python/FastAPI, PostgreSQL, SQLAlchemy, and MQTT data workflows.", note: "Explore the GitHub repository for the implementation." },
  dreamveil: { label: "02 / Independent GenAI build", title: "Dreamveil", body: "A GenAI project that turns dreams into visual storyboards across Windows, Android, and iOS. I improved the app’s image generation model to Gemini Banana 2, added image-saving functionality, diagnosed and fixed multiple bugs, and implemented requests provided directly by the Sports Vector founder/CEO.", note: "The frontend and backend repositories are linked on the project card." },
  afssc: { label: "03 / Capstone project · 2022", title: "Automatic Fire Suppression System for Cars", body: "AFSSC is a safety-focused high-school capstone project designed around automatic fire suppression for cars. I worked as the lead programmer and system builder, translating a practical safety concern into a complete project concept and prototype.", note: "Awarded 3rd Overall and 4th Best Abstract at the Philippine International School - Qatar capstone competition." },
  mindbridge: { label: "Experience / 2026", title: "Full-Stack & Embedded Systems Intern", body: "At MindBridge XR in Qatar Science and Technology Park, I worked across Engineering and IT as a primary Arduino and embedded-systems resource. Alongside Stingray, I diagnosed hardware, firmware, sensor, software, and connectivity issues; contributed to documentation; and helped with project handover.", note: "Stingray Smart Bar is the strongest proof point from this experience." },
  technician: { label: "Experience / 2024 - Present", title: "Freelance PC Technician", body: "I’ve diagnosed, repaired, and upgraded 10+ computers and laptops for individual clients. The work includes Windows installation, drivers, BIOS setup, hardware installation, data recovery, performance optimisation, and explaining technical decisions to people with different levels of comfort around technology.", note: "A practical foundation for every product and support problem I take on." },
  technicalhead: { label: "Experience / 2023 - 2024", title: "Technical Head", body: "As Technical Head for Youth for Christ Qatar, I managed technical and audiovisual requirements for live events and organisational activities. I set up, operated, and troubleshot computers, displays, audio equipment, and other technical systems while coordinating with event teams under live conditions.", note: "Technical leadership is also about keeping the room calm when something fails." },
  simulatedpatient: { label: "Experience / 2025 - 2026", title: "Simulated Patient", body: "At Qatar University, I participated in medical education and clinical simulation activities. The work called for consistent scenarios, clear communication, reliability, adaptability, and professionalism while working with students and faculty.", note: "A different kind of systems work: people, communication, and consistency." },
  agriteq: { label: "Experience / Community", title: "AgriTeQ · UDST", body: "I volunteered as a UDST student at AgriTeQ, a major agriculture and technology event. It was a chance to contribute outside the usual classroom setting and stay close to the conversations where technology meets real industries.", note: "A reminder that useful work happens in communities, not only behind a screen." },
  people: { label: "In their words / With permission", title: "What people think about Gab", body: "This space is for short, unedited conversation screenshots from people who know me. I only include a screenshot after the person has clearly agreed to have it shared.", note: "No screenshots have been added yet. When ready, send the consented images and I’ll place them here as a small swipeable gallery.", people: true }
};
const modal = document.querySelector("#project-modal");
document.querySelectorAll("[data-modal]").forEach(button => button.addEventListener("click", () => {
  const project = projects[button.dataset.modal];
  document.querySelector("#modal-label").textContent = project.label;
  document.querySelector("#modal-title").textContent = project.title;
  document.querySelector("#modal-body").textContent = project.body;
  document.querySelector("#modal-note").textContent = project.note;
  const media = document.querySelector("#modal-media");
  media.replaceChildren();
  if (project.people) {
    const placeholder = document.createElement("div");
    placeholder.className = "testimonial-placeholder";
    placeholder.textContent = "SCREENSHOT GALLERY / AWAITING CONSENTED REFERENCES";
    media.appendChild(placeholder);
  }
  modal.showModal();
}));
document.querySelector(".close").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
document.querySelector("#year").textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const nightMode = document.querySelector("#night-mode");
const themeToggle = document.querySelector("#theme-toggle");
const applyTheme = (theme) => {
  const dark = theme === "dark";
  nightMode.disabled = !dark;
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  themeToggle.querySelector("span").textContent = dark ? "☾" : "☀";
  themeToggle.querySelector("b").textContent = dark ? "Dark" : "Light";
};
applyTheme(localStorage.getItem("gab-theme") || "dark");
themeToggle.addEventListener("click", () => {
  const next = nightMode.disabled ? "dark" : "light";
  localStorage.setItem("gab-theme", next);
  applyTheme(next);
});
if (!reducedMotion) {
  document.querySelectorAll("section, .project, .credentials").forEach((element, index) => {
    element.dataset.reveal = "";
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
  });
  const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
  window.addEventListener("pointermove", event => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  }, { passive: true });
  if (window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".project").forEach(card => {
      card.addEventListener("pointermove", event => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        card.classList.add("is-tilting");
        card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-5px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-tilting");
        card.style.transform = "";
      });
    });
  }
}
