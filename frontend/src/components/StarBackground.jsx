import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: "#000F26",
        },

        particles: {
          number: { value: 80 },

          color: {
            value: ["#4DA3FF", "#8EC5FF", "#C6E2FF"],
          },

          size: {
            value: { min: 1, max: 3 },
          },

          opacity: {
            value: 0.6,
            random: true,
          },

          move: {
            enable: true,
            speed: 0.3,
          },
          
        },
      }}
      style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
}}
    />
  );
}