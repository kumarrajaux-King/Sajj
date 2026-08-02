"use client";

import { useEffect, useRef } from "react";

type InteractiveElement = HTMLElement & {
  dataset: DOMStringMap & { motionBound?: string };
};

export function MotionController() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const aura = auraRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    root.classList.add("motion-enabled");

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const headings = Array.from(document.querySelectorAll<HTMLElement>("main section h2, main section h3, main .inner-hero h1, main .contact-hero h1"));
    headings.forEach((heading) => heading.classList.add("motion-heading"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      headings.forEach((heading) => heading.classList.add("motion-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add(entry.target.hasAttribute("data-reveal") ? "is-visible" : "motion-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10%", threshold: 0.12 },
      );

      [...revealElements, ...headings].forEach((element) => observer.observe(element));
      cleanups.push(() => observer.disconnect());
    }

    let scrollFrame = 0;
    const updateScrollEffects = () => {
      scrollFrame = 0;
      const scrollTop = window.scrollY;
      const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--page-progress", String(Math.min(scrollTop / scrollRange, 1)));
      document.querySelector<HTMLElement>(".site-header")?.classList.toggle("is-scrolled", scrollTop > 24);

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
        const speed = Number(element.dataset.parallax || "0.08");
        const rect = element.getBoundingClientRect();
        const offset = Math.max(-42, Math.min(42, (rect.top - window.innerHeight * 0.5) * speed));
        element.style.setProperty("--parallax-shift", `${offset.toFixed(1)}px`);
      });
    };

    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };
    updateScrollEffects();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    });

    if (finePointer && !reducedMotion) {
      const moveAura = (event: PointerEvent) => {
        if (!aura) return;
        aura.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        aura.classList.add("is-active");
      };
      const hideAura = () => aura?.classList.remove("is-active");
      window.addEventListener("pointermove", moveAura, { passive: true });
      document.documentElement.addEventListener("mouseleave", hideAura);
      cleanups.push(() => {
        window.removeEventListener("pointermove", moveAura);
        document.documentElement.removeEventListener("mouseleave", hideAura);
      });

      document.querySelectorAll<InteractiveElement>(".button, .header-cta").forEach((element) => {
        if (element.dataset.motionBound) return;
        element.dataset.motionBound = "magnetic";
        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left - rect.width / 2) * 0.13;
          const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
          element.style.setProperty("--magnetic-x", `${x.toFixed(1)}px`);
          element.style.setProperty("--magnetic-y", `${y.toFixed(1)}px`);
        };
        const reset = () => {
          element.style.setProperty("--magnetic-x", "0px");
          element.style.setProperty("--magnetic-y", "0px");
        };
        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", reset);
          delete element.dataset.motionBound;
        });
      });

      document.querySelectorAll<InteractiveElement>(".service-card, .case-card, .insight-card, .salary-feature").forEach((element) => {
        if (element.dataset.motionBound) return;
        element.dataset.motionBound = "tilt";
        const onMove = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          element.style.setProperty("--tilt-x", `${((0.5 - y) * 5).toFixed(2)}deg`);
          element.style.setProperty("--tilt-y", `${((x - 0.5) * 6).toFixed(2)}deg`);
          element.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
          element.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
        };
        const reset = () => {
          element.style.setProperty("--tilt-x", "0deg");
          element.style.setProperty("--tilt-y", "0deg");
        };
        element.addEventListener("pointermove", onMove);
        element.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          element.removeEventListener("pointermove", onMove);
          element.removeEventListener("pointerleave", reset);
          delete element.dataset.motionBound;
        });
      });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-enabled");
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <div ref={auraRef} className="pointer-aura" aria-hidden="true" />
    </>
  );
}
