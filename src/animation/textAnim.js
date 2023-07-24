import Splitting from "splitting";
import { observe } from "./Observer";
import { gsap } from "gsap";

export default function split() {
  const header = document.querySelectorAll("[data-animation='header']");
  const paragraph = document.querySelectorAll("[data-animation='paragraph']");

  header.forEach((item) => {
    Splitting({
      target: item,
      by: "chars",
    });
    gsap.set(item.querySelectorAll(".char"), {
      opacity: 0,
      yPercent: 100,
      transformStyle: "preserve-3d",
    });
    observe(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".char");
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.04,
        delay: 0.4,
        duration: 1,
        ease: "easeOut",
      });
    });
  });

  paragraph.forEach((item) => {
    Splitting({
      target: item,
      by: "lines",
    });
    gsap.set(item.querySelectorAll(".word"), {
      opacity: 0,
      yPercent: 100,
      transformStyle: "preserve-3d",
    });
    observe(item, {
      threshold: 1,
    }).then(() => {
      const elem = item.querySelectorAll(".word");
      gsap.to(elem, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.1,
        duration: 1,
        delay: 0.2,
        ease: "easeOut",
      });
    });
  });
}
