const resumeData = {
  name: "Nagesh Bhutkade",
  title: "Frontend Developer | Web Portfolio Resume",
  summary:
    "Results-focused developer with experience building responsive web interfaces, shipping product features, and turning ideas into clean, usable applications. This resume site is structured as a fast static page so it can be deployed easily on free hosting.",
  contact: [
    {
      label: "Email",
      value: "nageshbhutkade@gmail.com",
      href: "mailto:nageshbhutkade@gmail.com"
    },
    {
      label: "GitHub",
      value: "github.com/nageshbhutkade",
      href: "https://github.com/nageshbhutkade"
    },
    {
      label: "Location",
      value: "India",
      href: null
    }
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "UI Development",
    "Git",
    "Static Hosting",
    "Performance"
  ],
  education: [
    {
      degree: "Add your degree here",
      school: "Add your college or university",
      note: "Update this section with your actual education details."
    }
  ],
  experience: [
    {
      role: "Add your current or latest role",
      company: "Company Name",
      period: "2024 - Present",
      points: [
        "Describe the product or team you worked on and the problem you helped solve.",
        "Add one measurable impact, such as performance improvement, revenue support, or user growth.",
        "Mention the stack, tools, or responsibilities that best represent your strengths."
      ]
    },
    {
      role: "Add a previous role or internship",
      company: "Previous Company",
      period: "2022 - 2024",
      points: [
        "Summarize a key responsibility in one sentence.",
        "Call out one notable feature, automation, or UI improvement you shipped.",
        "Keep each bullet concrete and outcome-oriented."
      ]
    }
  ],
  projects: [
    {
      name: "Personal Resume Website",
      description:
        "Single-page resume built with semantic HTML, expressive typography, responsive layout, and print-friendly styling for quick PDF export.",
      link: "#"
    },
    {
      name: "Add your best project",
      description:
        "Replace this card with a real project summary that explains what you built, why it mattered, and what technologies you used.",
      link: "#"
    }
  ]
};

function createBulletList(items) {
  const list = document.createElement("ul");
  list.className = "bullet-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  return list;
}

function renderResume(data) {
  document.title = `Resume | ${data.name}`;
  document.getElementById("name").textContent = data.name;
  document.getElementById("title").textContent = data.title;
  document.getElementById("summary").textContent = data.summary;

  const emailContact = data.contact.find((item) => item.label.toLowerCase() === "email");
  if (emailContact) {
    const emailLink = document.getElementById("emailLink");
    emailLink.href = emailContact.href;
    emailLink.textContent = "Contact";
  }

  const contactList = document.getElementById("contactList");
  data.contact.forEach((item) => {
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.className = "meta-label";
    label.textContent = item.label;

    const value = item.href ? document.createElement("a") : document.createElement("span");
    value.textContent = item.value;
    if (item.href) {
      value.href = item.href;
      value.target = "_blank";
      value.rel = "noreferrer";
    }

    li.append(label, value);
    contactList.appendChild(li);
  });

  const skillsList = document.getElementById("skillsList");
  data.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = skill;
    skillsList.appendChild(chip);
  });

  const educationList = document.getElementById("educationList");
  data.education.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "education-item";
    wrapper.innerHTML = `
      <h3>${item.degree}</h3>
      <p class="item-subtitle">${item.school}</p>
      <p class="education-note">${item.note}</p>
    `;
    educationList.appendChild(wrapper);
  });

  const experienceList = document.getElementById("experienceList");
  data.experience.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <div class="item-header">
        <div>
          <h3>${item.role}</h3>
          <p class="item-subtitle">${item.company}</p>
        </div>
        <span class="item-period">${item.period}</span>
      </div>
    `;
    article.appendChild(createBulletList(item.points));
    experienceList.appendChild(article);
  });

  const projectsList = document.getElementById("projectsList");
  data.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View project</a>
    `;
    projectsList.appendChild(article);
  });
}

document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});

renderResume(resumeData);
