import { Heading, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionHeading = motion(Heading); // Motion variant of Chakra Heading
const MotionSpan = motion(chakra.span); // Motion variant of Chakra span

const TextSwitch = ({ initalValue, hoveredValue }) => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover status

  return (
    <MotionHeading
      textAlign={{ base: "center", lg: "left" }}
      color="#d9d9d9"
      fontSize="24px"
      onHoverStart={() => setIsHovered(true)} // Set hover to true on hover start
      onHoverEnd={() => setIsHovered(false)} // Reset hover on hover end
      initial={{ opacity: 1 }}
      whileHover={{ scale: 1.1, opacity: 0.9 }} // Optional scaling and opacity change on hover
      transition={{ duration: 0.3 }}
    >
      <MotionSpan fontSize={isHovered ? "" : "32px"}>
        {isHovered ? hoveredValue : `${initalValue}+`}
      </MotionSpan>
      {!isHovered && (
        <>
          <br /> YEARS OF <br /> EXPERIENCE
        </>
      )}
    </MotionHeading>
  );
};

export default TextSwitch;
