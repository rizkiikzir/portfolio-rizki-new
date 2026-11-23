
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Jangan menjalankan animasi jika pengguna memilih reduced motion
// atau script sudah berhasil diinisialisasi.
if (!prefersReducedMotion && root.dataset.motionReady !== "true") {
  let lenis: Lenis | null = null;
  let lenisTicker: ((time: number) => void) | null = null;
  let motionContext: gsap.Context | null = null;

  try {
    // ========================================
    // 01. LENIS — SMOOTH SCROLL
    // ========================================

    lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      respectReducedMotion: true,
    });

    // ========================================
    // 02. GSAP CONTEXT
    // ========================================

    // Semua animasi dikumpulkan dalam satu context.
    // Jika terjadi error, context dapat di-revert agar elemen
    // kembali ke kondisi CSS semula.
    motionContext = gsap.context(() => {
      // ========================================
      // HELPER — REVEAL ON SCROLL
      // ========================================

      const revealOnScroll = (
        element: HTMLElement,
        trigger: HTMLElement = element
      ) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 12,
            immediateRender: false,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger,
              start: "top 90%",
              once: true,
            },
          }
        );
      };

      // ========================================
      // 03. HERO — INTRODUCTION ANIMATION
      // ========================================

      const hero = document.querySelector<HTMLElement>(".hero");

      if (hero) {
        const status = hero.querySelector<HTMLElement>(".status-badge");
        const greeting = hero.querySelector<HTMLElement>(".hero-greeting");
        const name = hero.querySelector<HTMLElement>(".hero-title");
        const role = hero.querySelector<HTMLElement>(".hero-role");

        const description =
          hero.querySelector<HTMLElement>(".hero-description");

        const actions = hero.querySelector<HTMLElement>(".hero-actions");
        const socials = hero.querySelector<HTMLElement>(".hero-socials");
        const portrait = hero.querySelector<HTMLElement>(".hero-portrait");

        const heroTimeline = gsap.timeline();

        // Status badge
        if (status) {
          heroTimeline.fromTo(
            status,
            { autoAlpha: 0, y: 8, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0
          );
        }

        // Greeting
        if (greeting) {
          heroTimeline.fromTo(
            greeting,
            { autoAlpha: 0, y: 8, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.12
          );
        }

        // Name — stagger per word, not typewriter.
        if (name) {
          const originalName = name.textContent?.trim() ?? "";
          const nameWords = originalName.split(/\s+/);

          if (originalName) {
            const wordElements: HTMLSpanElement[] = [];

            name.setAttribute("aria-label", originalName);

            const fragment = document.createDocumentFragment();

            nameWords.forEach((word, index) => {
              const span = document.createElement("span");

              span.className = "hero-name-word";
              span.textContent = word;
              span.style.display = "inline-block";
              span.setAttribute("aria-hidden", "true");

              wordElements.push(span);
              fragment.appendChild(span);

              if (index < nameWords.length - 1) {
                fragment.appendChild(document.createTextNode(" "));
              }
            });

            name.replaceChildren(fragment);

            heroTimeline.fromTo(
              wordElements,
              {
                autoAlpha: 0,
                y: 12,
                immediateRender: false,
              },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.12,
                ease: "power2.out",
              },
              0.22
            );
          }
        }

        // Role
        if (role) {
          heroTimeline.fromTo(
            role,
            { autoAlpha: 0, y: 10, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.63
          );
        }

        // Description
        if (description) {
          heroTimeline.fromTo(
            description,
            { autoAlpha: 0, y: 10, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.76
          );
        }

        // CTA buttons
        if (actions) {
          heroTimeline.fromTo(
            actions,
            { autoAlpha: 0, y: 10, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.88
          );
        }

        // Social links
        if (socials) {
          heroTimeline.fromTo(
            socials,
            { autoAlpha: 0, y: 8, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            1
          );
        }

        // Portrait follows viewport position.
        // Portrait joins the Hero introduction timeline.
if (portrait) {
  heroTimeline.fromTo(
    portrait,
    {
      autoAlpha: 0,
      y: 12,
      immediateRender: false,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.35,
      ease: "power2.out",
    },
    0.7
  );
}
      }

      // ========================================
      // 04. SECTION HEADING — WORD REVEAL
      // ========================================

      const sectionHeaders = document.querySelectorAll<HTMLElement>(
        "main .section-header, main .about-heading"
        );

      sectionHeaders.forEach((header) => {
        const title = header.querySelector<HTMLElement>(".section-title");

        if (!title) return;

        const originalText =
          title.textContent?.replace(/\s+/g, " ").trim() ?? "";

        if (!originalText) return;

        const titleWords = originalText.split(" ");
        const wordElements: HTMLSpanElement[] = [];

        title.setAttribute("aria-label", originalText);

        const fragment = document.createDocumentFragment();

        titleWords.forEach((word, index) => {
          const span = document.createElement("span");

          span.className = "motion-word";
          span.textContent = word;
          span.style.display = "inline-block";
          span.setAttribute("aria-hidden", "true");

          wordElements.push(span);
          fragment.appendChild(span);

          if (index < titleWords.length - 1) {
            fragment.appendChild(document.createTextNode(" "));
          }
        });

        title.replaceChildren(fragment);

        const number =
          header.querySelector<HTMLElement>(".section-number");

        const divider =
          header.querySelector<HTMLElement>(".section-divider");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            once: true,
          },
        });

        if (number) {
          timeline.fromTo(
            number,
            { autoAlpha: 0, y: 8, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0
          );
        }

        timeline.fromTo(
          wordElements,
          { autoAlpha: 0, y: 10, immediateRender: false },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.05
        );

        if (divider) {
          timeline.fromTo(
            divider,
            {
              autoAlpha: 0,
              scaleX: 0,
              immediateRender: false,
            },
            {
              autoAlpha: 1,
              scaleX: 1,
              transformOrigin: "left center",
              duration: 0.35,
              ease: "power2.out",
            },
            0.1
          );
        }
      });

      // ========================================
      // 05. MAIN PAGE — CONTENT REVEAL
      // ========================================

      const sections = document.querySelectorAll<HTMLElement>(
        "main .section"
      );

      sections.forEach((section) => {
        const candidates = Array.from(
          section.querySelectorAll<HTMLElement>(
            "article, .contact-link, [data-reveal]"
          )
        );

        // Avoid animating nested articles twice.
        const items = candidates.filter((item) => {
          return !item.parentElement?.closest("article");
        });

        if (items.length === 0) return;

        gsap.fromTo(
          items,
          {
            autoAlpha: 0,
            y: 12,
            immediateRender: false,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.13,
            ease: "power2.out",
            scrollTrigger: {
              trigger: items[0],
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      // ========================================
      // 06. PROJECT DETAIL — INTRODUCTION
      // ========================================

      const projectDetail =
        document.querySelector<HTMLElement>(".project-detail");

      if (projectDetail) {
        const backLink =
          projectDetail.querySelector<HTMLElement>(
            ".back-link:not(.back-link--footer)"
          );

        const category =
          projectDetail.querySelector<HTMLElement>(".detail-category");

        const title =
          projectDetail.querySelector<HTMLElement>(".detail-header h1");

        const summary =
          projectDetail.querySelector<HTMLElement>(".detail-summary");

        const detailTimeline = gsap.timeline();

        if (backLink) {
          detailTimeline.fromTo(
            backLink,
            { autoAlpha: 0, y: 6, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            },
            0
          );
        }

        if (category) {
          detailTimeline.fromTo(
            category,
            { autoAlpha: 0, y: 8, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.1
          );
        }

        if (title) {
          detailTimeline.fromTo(
            title,
            { autoAlpha: 0, y: 12, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            },
            0.2
          );
        }

        if (summary) {
          detailTimeline.fromTo(
            summary,
            { autoAlpha: 0, y: 10, immediateRender: false },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              ease: "power2.out",
            },
            0.35
          );
        }

        // Project gallery.
        const carousel =
          projectDetail.querySelector<HTMLElement>(".project-carousel");

        if (carousel) {
          revealOnScroll(carousel);
        }

        // ========================================
        // 07. PROJECT DETAIL — CONTENT SECTIONS
        // ========================================

        const detailSections =
          projectDetail.querySelectorAll<HTMLElement>(
            ".detail-body > .detail-section, " +
              ".detail-body > .project-note, " +
              ".detail-body > .detail-actions, " +
              ".documentation-header, " +
              ".documentation-group-header, " +
              ".detail-footer"
          );

        detailSections.forEach((section) => {
          revealOnScroll(section);
        });

        // Documentation images appear progressively.
        const documentationGroups =
          projectDetail.querySelectorAll<HTMLElement>(
            ".documentation-group"
          );

        documentationGroups.forEach((group) => {
          const images = Array.from(
            group.querySelectorAll<HTMLElement>(
              ".documentation-item"
            )
          );

          if (images.length === 0) return;

          gsap.fromTo(
            images,
            {
              autoAlpha: 0,
              y: 12,
              immediateRender: false,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.35,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: group,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
      }
    });

    // ========================================
    // 08. LENIS — GSAP TICKER INTEGRATION
    // ========================================

    lenis.on("scroll", ScrollTrigger.update);

    lenisTicker = (time: number) => {
      lenis?.raf(time * 1000);
    };

    gsap.ticker.add(lenisTicker);
    gsap.ticker.lagSmoothing(0);

    // Tandai berhasil hanya setelah seluruh inisialisasi selesai.
    root.dataset.motionReady = "true";

    // ========================================
    // 09. REFRESH SCROLL POSITIONS
    // ========================================

    const refreshScrollTrigger = () => {
      if (root.dataset.motionReady === "true") {
        ScrollTrigger.refresh();
      }
    };

    document.fonts.ready.then(refreshScrollTrigger);

    if (document.readyState === "complete") {
      refreshScrollTrigger();
    } else {
      window.addEventListener(
        "load",
        refreshScrollTrigger,
        { once: true }
      );
    }
  } catch (error) {
    // ========================================
    // FALLBACK — RESTORE ORIGINAL CONTENT
    // ========================================

    // Batalkan animasi yang sempat dibuat agar tidak ada elemen
    // yang tertinggal dalam kondisi tersembunyi.
    motionContext?.revert();

    if (lenisTicker) {
      gsap.ticker.remove(lenisTicker);
    }

    lenis?.destroy();

    // Izinkan inisialisasi ulang jika diperlukan.
    delete root.dataset.motionReady;

    console.error(
      "[scroll-motion] Animation initialization failed. Original content has been restored.",
      error
    );
  }
}
