import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CameraScrollRig = () => {
  const { camera } = useThree();
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    camera.lookAt(lookTarget.current);
  });

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#product-viewer",
      start: "top top",
      end: "+=120%",
      pin: true,
      scrub: 1,
      animation: gsap
        .timeline()
        .to(camera.position, { x: 0, y: 1.9, z: 2.4, ease: "none" })
        .to(lookTarget.current, { x: 0, y: 1.3, z: 0, ease: "none" }, 0)
        .to(
          camera,
          {
            fov: 26,
            ease: "none",
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          0,
        ),
    });

    return () => trigger.kill();
  }, [camera]);

  return null;
};

export default CameraScrollRig;
