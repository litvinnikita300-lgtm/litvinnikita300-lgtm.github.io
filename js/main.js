
const burger = document.querySelector(".header__burger");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const modalLinks = document.querySelectorAll(".modal__link");

function openModal() {
  modal?.classList.add("modal--active");
}

function closeModal() {
  modal?.classList.remove("modal--active");
}

burger?.addEventListener("click", openModal);
modalClose?.addEventListener("click", closeModal);

modalLinks.forEach((link) => {
  link.addEventListener("click", closeModal);
});

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


const projectImages = [
  "./img/project-1.jpg",
  "./img/project-2.jpg",
  "./img/project-3.jpg",
];

const projectImage = document.querySelector(".projects__image");
const projectPrev = document.querySelector(".projects__arrow--prev");
const projectNext = document.querySelector(".projects__arrow--next");
const projectsSlider = document.querySelector(".projects__slider");

let currentProject = 0;
let projectInterval;

function showProject(index) {
  currentProject = index;

  if (currentProject < 0) {
    currentProject = projectImages.length - 1;
  }

  if (currentProject >= projectImages.length) {
    currentProject = 0;
  }

  if (projectImage) {
  projectImage.classList.add("projects__image--fade");

  setTimeout(() => {
    projectImage.src = projectImages[currentProject];
    projectImage.classList.remove("projects__image--fade");
  }, 250);
}
}

function startProjectSlider() {
  stopProjectSlider();

  projectInterval = setInterval(() => {
    showProject(currentProject + 1);
  }, 4000);
}

function stopProjectSlider() {
  clearInterval(projectInterval);
}

projectPrev?.addEventListener("click", () => {
  showProject(currentProject - 1);
});

projectNext?.addEventListener("click", () => {
  showProject(currentProject + 1);
});

projectsSlider?.addEventListener("mouseenter", stopProjectSlider);
projectsSlider?.addEventListener("mouseleave", startProjectSlider);

if (projectImage) {
  startProjectSlider();
}


const stepsData = [
  {
    title: "Обговорення проекту",
    text: "Ми враховуємо всі ваші побажання та пропонуємо сучасне та відповідне рішення.",
    image: "./img/step-1.jpg",
  },
  {
    title: "Розробка дизайну",
    text: "Ви отримаєте детальну концепцію меблів, з урахуванням стилю вашого інтер’єру.",
    image: "./img/step-2.jpg",
  },
  {
    title: "Узгодження та вибір матеріалів",
    text: "Ми допоможемо обрати дерево, тканини та текстури, які ідеально пасують до вашого простору.",
    image: "./img/step-3.jpg",
  },
  {
    title: "Виготовлення та складання",
    text: "Наші майстри виробляють меблі з увагою до кожної деталі та високою якістю виконання.",
    image: "./img/step-4.jpg",
  },
  {
    title: "Контроль якості",
    text: "Кожен виріб проходить ретельну перевірку перед доставкою клієнту.",
    image: "./img/step-5.jpg",
  },
  {
    title: "Доставка та встановлення",
    text: "Бережно доставляємо та встановлюємо меблі у вашому домі точно в погоджений час.",
    image: "./img/step-6.jpg",
  },
];

const stepsItems = document.querySelectorAll(".steps__item");

function renderStep(item, index, isActive) {
  const number = String(index + 1).padStart(2, "0");

  if (isActive) {
    item.innerHTML = `
      <span class="steps__number">${number}</span>
      <div class="steps__content">
        <h3 class="steps__item-title">${stepsData[index].title}</h3>
        <p class="steps__text">${stepsData[index].text}</p>
      </div>
      <img class="steps__image" src="${stepsData[index].image}" alt="${stepsData[index].title}" />
    `;
  } else {
    item.innerHTML = `
      <span class="steps__number">${number}</span>
      <h3 class="steps__item-title">${stepsData[index].title}</h3>
    `;
  }
}

stepsItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    stepsItems.forEach((step, stepIndex) => {
      step.classList.remove("steps__item--active");
      renderStep(step, stepIndex, false);
    });

    renderStep(item, index, true);

    requestAnimationFrame(() => {
      item.classList.add("steps__item--active");
    });
  });
});


const scrollTopButton = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopButton?.classList.add("scroll-top--active");
  } else {
    scrollTopButton?.classList.remove("scroll-top--active");
  }
});

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up--show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");
const modalMenuLinks = document.querySelectorAll(".modal__link");

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("nav__link--active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("nav__link--active");
    }
  });

  modalMenuLinks.forEach((link) => {
    link.classList.remove("modal__link--active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("modal__link--active");
    }
  });
});


const contactForm = document.querySelector(".contact__form");
const contactName = document.querySelector('.contact__input[type="text"]');
const contactEmail = document.querySelector('.contact__input[type="email"]');
const contactPhone = document.querySelector('.contact__input[type="tel"]');
const contactTextarea = document.querySelector(".contact__textarea");
const contactCheckbox = document.querySelector(".contact__checkbox-input");
const contactMessage = document.querySelector(".contact__message");
const toast = document.querySelector(".toast");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const fields = [contactName, contactEmail, contactPhone, contactTextarea];

  fields.forEach((field) => {
    field?.classList.remove("contact__input--error");
    field?.classList.remove("contact__textarea--error");
  });

  if (contactMessage) {
    contactMessage.textContent = "";
    contactMessage.classList.remove("contact__message--success");
  }

  let isValid = true;

  fields.forEach((field) => {
    if (!field || !field.value.trim()) {
      isValid = false;

      if (field?.classList.contains("contact__textarea")) {
        field.classList.add("contact__textarea--error");
      } else {
        field?.classList.add("contact__input--error");
      }
    }
  });

  if (!contactCheckbox?.checked) {
    if (contactMessage) {
      contactMessage.textContent = "Потрібно погодитись на обробку персональних даних.";
    }
    return;
  }

  if (!isValid) {
    if (contactMessage) {
      contactMessage.textContent = "Заповніть, будь ласка, всі поля.";
    }
    return;
  }

  toast?.classList.add("toast--active");

  setTimeout(() => {
    toast?.classList.remove("toast--active");
  }, 3000);

  contactForm.reset();
});