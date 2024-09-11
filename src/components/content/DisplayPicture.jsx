import React, { useState } from "react";
import { Card, Box, Image } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";

const DisplayPicture = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      m="auto"
      h="full"
      w="full"
      minH={{ base: "350px", lg: "400px" }}
      rounded="24px"
      overflow="hidden"
      transition="all 0.5s ease-in-out"
    >
      {/* Blurred Background Image */}
      <Box
        bgImage={`url(${INFORMATION.ProfilePictureBlurred})`}
        bgPos="center"
        bgSize="cover"
        filter={isImageLoaded ? "grayscale(0%)" : "blur(20px) grayscale(80%)"}
        transition="filter 0.5s ease-in-out"
        h="full"
        w="full"
      />

      {/* Actual Image */}
      <Image
        src={INFORMATION.PROFILE_PICTURE}
        alt="Profile Picture"
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
        opacity={isImageLoaded ? 1 : 0}
        onLoad={() => setIsImageLoaded(true)} // Trigger state change when the image is loaded
        transition="opacity 0.5s ease-in-out"
      />
    </Card>
  );
};

export default DisplayPicture;
