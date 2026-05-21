import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${(features.length - 1) * 100}%`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    for (let i = 0; i < features.length - 1; i++) {
      timeline
        .to(`.feature-item-${i}`, { opacity: 0.3, duration: 1 }, i)
        .to(`.feature-video-${i}`, { opacity: 0, duration: 1 }, i)
        .to(`.feature-item-${i + 1}`, { opacity: 1, duration: 1 }, i)
        .to(`.feature-video-${i + 1}`, { opacity: 1, duration: 1 }, i);
    }
  }, []);

  return (
    <section
      id="features"
      className="relative bg-black isolate z-10"
    >
      <div
        ref={containerRef}
        className="relative w-full h-dvh overflow-hidden bg-black"
      >
        <h2 className="absolute top-10 left-0 right-0 text-center text-4xl md:text-5xl font-bold text-white z-20">
          Öne Çıkan Özellikler
        </h2>

        <div className="w-full h-full flex flex-col md:flex-row items-center pt-28">
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 z-10 gap-10">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={clsx("feature-item", `feature-item-${index}`)}
                style={{ opacity: index === 0 ? 1 : 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {feature.highlight}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 h-full relative flex items-center justify-center p-5 md:p-10">
            {featureSequence.map((feature, index) => (
              <video
                key={index}
                className={clsx(
                  "absolute w-[calc(100%-2.5rem)] md:w-full max-w-xl rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10",
                  `feature-video-${index}`,
                )}
                style={{
                  opacity: index === 0 ? 1 : 0,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                muted
                playsInline
                loop
                autoPlay
                src={feature.videoPath}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
