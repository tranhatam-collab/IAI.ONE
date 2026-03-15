(function () {
  "use strict";

  const STORAGE_KEY = "iai_home_lang";

  const i18n = {
    vi: {
      heroEyebrow: "HUMAN INTELLIGENCE INFRASTRUCTURE",
      heroTitle: "Portal trung tâm cho AGI architecture, workflow systems và hệ sinh thái trí tuệ thế hệ mới.",
      heroLead: "HOME.IAI.ONE không chỉ là trang chủ. Đây là lớp định vị chiến lược cho toàn bộ hệ IAI.ONE: nơi kết nối orchestration, platform launcher, knowledge universe, mission systems và những cổng vận hành quan trọng nhất.",
      heroPrimary: "Khám phá portal",
      heroSecondary: "Mở IAI Flow",
      metric1: "Lớp vận hành cốt lõi",
      metric2: "Portal và nền tảng liên kết",
      metric3: "Khả năng mở rộng theo cụm",
      statusLabel1: "Runtime",
      statusLabel2: "Mode",
      statusLabel3: "Access",

      introTitle: "Một portal AGI mạnh phải rõ thứ tự đi vào hệ thống",
      introLead: "Người dùng phải nhìn ra ngay đâu là tầng định vị, đâu là tầng orchestration, đâu là tầng platform launcher, đâu là lớp tri thức, đâu là mission layer và đâu là những cổng quan trọng nhất để bắt đầu.",

      architectureEyebrow: "AGI ARCHITECTURE",
      architectureTitle: "Kiến trúc nhiều lớp cho một portal AGI có thể mở rộng thật sự",
      architectureLead: "Không chỉ là landing page. Đây phải là một portal vận hành được: rõ tầng định vị, rõ tầng orchestration, rõ platform launcher, rõ knowledge layer và rõ mission layer.",
      arch1Title: "Identity Layer",
      arch1Text: "HOME.IAI.ONE phải là điểm vào chiến lược của toàn bộ hệ sinh thái, không phải trang giới thiệu chung chung.",
      arch2Title: "Platform Gateway",
      arch2Text: "Mọi nền tảng cốt lõi phải được mở như một launchpad có vai trò, trật tự và định nghĩa rõ ràng.",
      arch3Title: "AGI Orchestration",
      arch3Text: "Flow, runtime, agent network và automation phải đứng thành một lớp chiến lược riêng.",
      arch4Title: "Knowledge Universe",
      arch4Text: "Bản đồ tri thức, research directions và các hệ tri thức ứng dụng cần có không gian hiển thị riêng.",
      arch5Title: "Human Mission OS",
      arch5Text: "Portal phải thể hiện mục tiêu cuối cùng là mở rộng năng lực con người, không chỉ phô diễn công nghệ.",
      arch6Title: "Production Shell",
      arch6Text: "Desktop, mobile, nav, chuyển động, chiều sâu thị giác và semantic structure đều phải đạt chuẩn production.",

      platformsEyebrow: "CORE PLATFORMS",
      platformsTitle: "Launchpad trung tâm cho các nền tảng cốt lõi",
      platformsLead: "Đây là nơi người dùng hiểu ngay hệ sinh thái đang đi đâu, mỗi nền tảng làm gì và nên bước vào đâu trước.",
      flowCardText: "Hạ tầng orchestration cho workflow AI, agent network, node systems và runtime automation.",

      flowEyebrow: "FLAGSHIP SYSTEM",
      flowTitle: "IAI Flow phải hiện ra như engine trung tâm của thời đại workflow thông minh",
      flowLead: "Khi người dùng vào HOME.IAI.ONE, họ phải nhìn thấy ngay Flow là lớp orchestration có khả năng kết nối AI, logic vận hành, runtime và hệ tác nhân trong cùng một kiến trúc.",
      flowPoint1: "Thiết kế, chạy và quan sát execution graph theo mô hình mở rộng dài hạn.",
      flowPoint2: "Điều phối nhiều agent trong cùng pipeline thay vì dùng AI rời rạc từng điểm.",
      flowPoint3: "Mở đường vào docs, modules, node building và logic tích hợp hệ sinh thái.",
      flowButton: "Truy cập IAI Flow",

      universeEyebrow: "KNOWLEDGE UNIVERSE",
      universeTitle: "Bản đồ tri thức không gian rộng cho AGI, con người và nền văn minh",
      universeLead: "Phần này không cần giả 3D nặng nề, mà cần tạo được cảm giác về một hệ tri thức sống, có chiều sâu, có lớp, có khả năng mở rộng.",
      universeCenter: "Một bản đồ sống của các hệ trí tuệ",

      missionEyebrow: "MISSION LAYER",
      missionTitle: "Một portal AGI không chỉ đẹp, mà phải rõ cấu trúc, rõ vai trò và rõ tương lai",
      missionLead: "HOME.IAI.ONE là cổng điều hướng chiến lược cho toàn bộ hệ sinh thái IAI, nơi người dùng, developer, founder và đối tác có thể hiểu, khám phá và đi vào từng lớp vận hành quan trọng nhất.",
      missionCard1Title: "Strategic Entry Point",
      missionCard1Text: "Trang chủ phải đóng vai trò như lớp định hướng đầu tiên cho toàn bộ hệ IAI, không chỉ là landing page giới thiệu.",
      missionCard2Title: "Operational Clarity",
      missionCard2Text: "Mọi lớp trong hệ phải có định nghĩa, vai trò và đường dẫn rõ ràng.",
      missionCard3Title: "Human Directed AGI",
      missionCard3Text: "AGI phải vận hành dưới định hướng của con người, minh bạch và có thể kiểm soát.",
      missionCard4Title: "Portal Architecture",
      missionCard4Text: "HOME.IAI.ONE phải là cổng vào toàn bộ ecosystem, kết nối Flow, runtime systems, governance và public knowledge.",
      missionCard5Title: "Trust By Design",
      missionCard5Text: "Bảo mật, quyền riêng tư, xác thực nguồn dữ liệu và khả năng kiểm chứng phải nằm ở tầng thiết kế đầu tiên.",
      missionCard6Title: "Civilization Scale Thinking",
      missionCard6Text: "Portal phải thể hiện tầm nhìn hạ tầng trí tuệ cho cá nhân, cộng đồng, tổ chức và xã hội tương lai.",

      ctaTitle: "Bắt đầu từ HOME.IAI.ONE. Đi vào đúng cửa của hệ sinh thái.",
      ctaText: "Nếu cần orchestration và automation, vào Flow. Nếu cần intelligence system, vào LifeCode. Nếu cần community layer, mở Nhà Chung hoặc Muôn Nơi."
    },
    en: {
      heroEyebrow: "HUMAN INTELLIGENCE INFRASTRUCTURE",
      heroTitle: "The central portal for AGI architecture, workflow systems, and next generation intelligence platforms.",
      heroLead: "HOME.IAI.ONE is not just a homepage. It is the strategic positioning layer for the entire IAI.ONE ecosystem: connecting orchestration, platform launchers, the knowledge universe, mission systems, and the most important operational gateways.",
      heroPrimary: "Explore portal",
      heroSecondary: "Open IAI Flow",
      metric1: "Core operating layers",
      metric2: "Linked portals and platforms",
      metric3: "Cluster scale expansion capacity",
      statusLabel1: "Runtime",
      statusLabel2: "Mode",
      statusLabel3: "Access",

      introTitle: "A strong AGI portal must make the entry order of the system clear",
      introLead: "Users should immediately see the identity layer, the orchestration layer, the platform launcher, the knowledge layer, the mission layer, and the key gateways to begin with.",

      architectureEyebrow: "AGI ARCHITECTURE",
      architectureTitle: "A multi layer architecture for a truly scalable AGI portal",
      architectureLead: "This should not remain a landing page. It must operate as a real portal: clear identity, clear orchestration layer, clear platform launcher, clear knowledge layer, and clear mission layer.",
      arch1Title: "Identity Layer",
      arch1Text: "HOME.IAI.ONE must act as the strategic entry point for the full ecosystem, not as a generic presentation page.",
      arch2Title: "Platform Gateway",
      arch2Text: "Every core platform should open through a launchpad with role, order, and definition clearly established.",
      arch3Title: "AGI Orchestration",
      arch3Text: "Flow, runtime, agent networks, and automation must stand as a distinct strategic layer.",
      arch4Title: "Knowledge Universe",
      arch4Text: "Knowledge maps, research directions, and applied intelligence systems need their own surface.",
      arch5Title: "Human Mission OS",
      arch5Text: "The portal must express the final purpose: expanding human capability, not merely displaying technology.",
      arch6Title: "Production Shell",
      arch6Text: "Desktop, mobile, navigation, motion, visual depth, and semantic structure should all meet production quality.",

      platformsEyebrow: "CORE PLATFORMS",
      platformsTitle: "A central launchpad for the core platforms",
      platformsLead: "Users should immediately understand where the ecosystem is going, what each platform does, and which gateway they should enter first.",
      flowCardText: "Orchestration infrastructure for AI workflows, agent networks, node systems, and runtime automation.",

      flowEyebrow: "FLAGSHIP SYSTEM",
      flowTitle: "IAI Flow should appear as the central engine for the intelligent workflow era",
      flowLead: "When users enter HOME.IAI.ONE, they should instantly understand that Flow is the orchestration layer connecting AI, operational logic, runtime, and agent systems in one architecture.",
      flowPoint1: "Design, execute, and observe execution graphs under a long term scalable model.",
      flowPoint2: "Coordinate multiple agents inside a single pipeline instead of relying on isolated AI points.",
      flowPoint3: "Open the path to docs, modules, node building, and ecosystem integration logic.",
      flowButton: "Open IAI Flow",

      universeEyebrow: "KNOWLEDGE UNIVERSE",
      universeTitle: "A wide space knowledge map for AGI, humanity, and civilization",
      universeLead: "This section does not need heavy fake 3D. It needs to evoke a living knowledge system with depth, layers, and room to expand.",
      universeCenter: "A living map of intelligence systems",

      missionEyebrow: "MISSION LAYER",
      missionTitle: "An AGI portal must be more than beautiful. It must make structure, role, and future direction clear",
      missionLead: "HOME.IAI.ONE is the strategic gateway for the wider IAI ecosystem, where users, developers, founders, and partners can understand and enter the most important layers of operation.",
      missionCard1Title: "Strategic Entry Point",
      missionCard1Text: "The homepage must act as the first orientation layer for the whole IAI system, not merely as a presentation landing page.",
      missionCard2Title: "Operational Clarity",
      missionCard2Text: "Every layer in the system must have clear definitions, roles, and pathways.",
      missionCard3Title: "Human Directed AGI",
      missionCard3Text: "AGI must operate under human direction, with transparency and controllability.",
      missionCard4Title: "Portal Architecture",
      missionCard4Text: "HOME.IAI.ONE must serve as the entry gateway to the ecosystem, connecting Flow, runtime systems, governance, and public knowledge.",
      missionCard5Title: "Trust By Design",
      missionCard5Text: "Security, privacy, source verification, and auditability must exist at the first design layer.",
      missionCard6Title: "Civilization Scale Thinking",
      missionCard6Text: "The portal must express an intelligence infrastructure vision for individuals, communities, organizations, and future society.",

      ctaTitle: "Start from HOME.IAI.ONE. Enter the ecosystem through the right gateway.",
      ctaText: "If you need orchestration and automation, enter Flow. If you need an intelligence system, enter LifeCode. If you need the community layer, open Nhà Chung or Muôn Nơi."
    }
  };

  const doc = document.documentElement;
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langLabel = document.querySelector("[data-lang-label]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  const scrollButtons = Array.from(document.querySelectorAll("[data-scroll]"));
  const yearEl = document.getElementById("year");

  function getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "vi";
  }

  function setLang(lang) {
    const dict = i18n[lang] || i18n.vi;
    localStorage.setItem(STORAGE_KEY, lang);
    doc.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    if (langLabel) {
      langLabel.textContent = lang.toUpperCase();
    }
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function toggleMenu(forceState) {
    if (!menuToggle || !mobileMenu) return;

    const open = typeof forceState === "boolean"
      ? forceState
      : !mobileMenu.classList.contains("is-open");

    mobileMenu.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    body.style.overflow = open ? "hidden" : "";
  }

  function initMenu() {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener("click", () => toggleMenu());

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") toggleMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) toggleMenu(false);
    });
  }

  function initLanguage() {
    setLang(getSavedLang());

    if (!langToggle) return;

    langToggle.addEventListener("click", () => {
      setLang(getSavedLang() === "vi" ? "en" : "vi");
    });
  }

  function animateCount(el) {
    const target = Number(el.getAttribute("data-count") || "0");
    if (!Number.isFinite(target)) return;

    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function initCounters() {
    if (!counters.length) return;

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function initReveal() {
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    });

    reveals.forEach((el) => observer.observe(el));
  }

  function initScrollButtons() {
    scrollButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selector = button.getAttribute("data-scroll");
        if (!selector) return;

        const target = document.querySelector(selector);
        if (!target) return;

        const headerOffset = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

        window.scrollTo({
          top,
          behavior: "smooth"
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initMenu();
    initCounters();
    initReveal();
    initScrollButtons();
    updateHeader();

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    window.addEventListener("scroll", updateHeader, { passive: true });
  });
})();
