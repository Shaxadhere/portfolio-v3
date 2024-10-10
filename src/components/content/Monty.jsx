import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

const onMouseMove = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const anchor = document.getElementById("anchor");
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
  });
};

const angle = (cx, cy, ex, ey) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
};

const Monty = () => {
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Box display={{base:"none",lg:"block"}}>
      <Box className="monty-container">
        <Image
          id="anchor"
          src="https://shaxadhere.github.io/look-morty-eyeball-animation/assets/look-morty.png"
        />
        <Box id="eyes">
          <Image
            className="eye eye-morty"
            src="https://shaxadhere.github.io/look-morty-eyeball-animation/assets/eyeball.png"
            top={"61px"}
            left={"-130px"}
            bottom={"0px"}
          />
          <Image
            className="eye eye-morty"
            src="https://shaxadhere.github.io/look-morty-eyeball-animation/assets/eyeball.png"
            top={"46px"}
            left={"-52px"}
          />
          <Image
            className="eye eye-rick"
            src="https://shaxadhere.github.io/look-morty-eyeball-animation/assets/eyeball.png"
            top="-100px"
            left={"34px"}
          />
          <Image
            className="eye eye-rick"
            src="https://shaxadhere.github.io/look-morty-eyeball-animation/assets/eyeball.png"
            top={"-107px"}
            left={"99px"}
          />
        </Box>
      </Box>
      <Flex justify="center" pos="relative" top="-200px" maxW={"fit-content"} mx="auto">
        <Heading color="#fff" fontSize="sm">
          look morty, This guy is checking out the whole profile
        </Heading>
      </Flex>
    </Box>
  );
};

export default Monty;
