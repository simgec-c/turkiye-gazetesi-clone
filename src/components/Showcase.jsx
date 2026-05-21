import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      });

      timeline.to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/deneme.png" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Türkiye Gazetesi Dijital Premium ana özellikleri:</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                İşte Karşınızda{" "}
                <span className="text-white">Haber Asistanı</span>.
              </p>
              <p>
                – Doğal dilde soru sorup milyonlarca içerikten anında derlenmiş,
                kaynaklı cevap alırsınız.
              </p>
              <p>
                56 Yıllık Dijital Arşiv – Geçmiş tüm sayılara erişim; kelime ve
                tarih aralığıyla arama, orijinal küpür görüntüleme.Haftalık
                Canlı Söyleşi – Ekrem Buğra Ekinci ve Osman Ünlü ile canlı
                yayında soru-cevap, arşivden tekrar izleme.
              </p>
              <p className="text-primary">
                Haber Özetleri – Yapay zekâ uzun haberleri saniyeler içinde
                tarafsızca özetler.
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Artık</p>
              <h3>Sıfır ekran</h3>
              <p>Haberleri ve köşe yazılarını sesli dinleyin</p>
            </div>
            <div className="space-y-2">
              <p>Her</p>
              <h3>Hafta</h3>
              <p>Piyasa analizleri ve uzman ekonomi yorumları</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
