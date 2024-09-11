import React, { useEffect } from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Experience from "./Experience";
import ProjectsList from "./ProjectsList";

// Create motion components from Chakra components
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Github = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <MotionBox
      ref={ref}
      m="auto"
      mt={10}
      maxW={{ base: "calc(100vw - 50px)", md: "calc(100% - 400px)" }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Heading mb={"40px"} color="#d9d9d9" textAlign={"center"}>
        My Github Activity
      </Heading>
      <MotionImage
        mb={20}
        w="full"
        src="https://ghchart.rshah.org/shaxadhere"
        _groupHover={{
          opacity: 0.7,
        }}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
        }}
      />
    </MotionBox>
  );
};

export default Github;
