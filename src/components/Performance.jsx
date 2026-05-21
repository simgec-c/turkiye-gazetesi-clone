import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  performanceImages,
  performanceImgPositions,
} from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // Text Animation
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      if (isMobile) return;

      // Image Positioning Timeline
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Position Each Performance Image
      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Ayrıcalıklı haber okuma.</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.alt || `Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p>
          Aboneliğimi istediğim zaman iptal edebilir miyim? Evet, aboneliğinizi
          dilediğiniz zaman hesap ayarlarınızdan veya müşteri hizmetlerimizi
          arayarak hiçbir ek ücret ödemeden iptal edebilirsiniz. İptal işleminiz
          bir sonraki fatura döneminden itibaren geçerli olur, yani{" "}
          <span className="text-white">
            E-Gazete'ye hangi cihazlardan ulaşabilirim? E-Gazete'ye
            bilgisayarınızdan web sitemiz aracılığıyla, tablet ve akıllı
            telefonlarınızdan ise iOS ve Android uygulamalarımızı indirerek
            ulaşabilirsiniz.
          </span>{" "}
          Yıllık aboneliklerde taksit imkanı var mı? Evet, yıllık abonelik
          ödemelerinizi anlaşmalı kredi kartlarına vade farksız 6 taksite kadar
          bölebilirsiniz.
        </p>
      </div>
    </section>
  );
};
export default Performance;
