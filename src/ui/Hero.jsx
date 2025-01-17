import { useEffect, useRef } from "react";
import "../styles/ui/hero.scss";

export default function Hero() {
      const canvasRef = useRef(null);
      useEffect(() => {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            const frameCount = 147;

            const currentFrame = (index) => {
                  return `/src/assets/xioami-watch-3-hero-asset/Home_${index
                        .toString()
                        .padStart(3, "0")}.jpg`;
            };

            const img = new Image();
            img.src = currentFrame(0);
            img.onload = function () {
                  context.drawImage(img, 0, 0, canvas.width, canvas.height);
            };

            const preloadImages = () => {
                  Array.from({ length: frameCount }, (_, i) => {
                        const img = new Image();
                        img.src = currentFrame(i);
                  });
            };

            const updateImage = (index) => {
                  img.src = currentFrame(index);
                  context.drawImage(img, 0, 0, canvas.width, canvas.height);
            };

            // Animating on scroll
            window.addEventListener("scroll", () => {
                  const html = document.documentElement;
                  const wrap = document.querySelector(".hero");
                  const scrollTop = html.scrollTop;
                  const maxScrollTop = wrap.scrollHeight - window.innerHeight;
                  const scrollFraction = scrollTop / maxScrollTop;
                  const frameIndex = Math.min(
                        frameCount - 1,
                        Math.floor(scrollFraction * frameCount)
                  );
                  requestAnimationFrame(() => updateImage(frameIndex + 1));

                  if (scrollTop > 10) {
                        document
                              .querySelector(".hero__sticky")
                              .classList.add("fixed");
                  } else {
                        document
                              .querySelector(".hero__sticky")
                              .classList.toggle("fixed");
                  }
            });

            preloadImages();
      }, []);
      return (
            <div className="hero">
                  <div className="hero__sticky">
                        <div className="hero__sticky--product">
                              <p className="bold">
                                    <span>Redmi</span> Watch 3
                              </p>
                              <ul>
                                    <li className="overview">Overview</li>
                                    <li>Specs</li>
                              </ul>
                        </div>
                  </div>

                  <canvas
                        width={window.innerWidth}
                        height={window.innerHeight}
                        data-pin-scroll
                        className="hero__wrap__canvas"
                        ref={canvasRef}
                        id="watch"
                  ></canvas>

                  <div className="hero__text">
                        <h1 className="hero__text__title">REDMI WATCH 3</h1>
                  </div>
            </div>
      );
}
