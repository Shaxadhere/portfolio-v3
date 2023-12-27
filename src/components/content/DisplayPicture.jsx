import React from "react";
import { Card, GridItem } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";

const DisplayPicture = () => {
  return (
    <Card
      h="680px"
      rounded="24px"
      bgImage={`url(${APP_IMAGES.ME})`}
      bgPos="center"
      filter={"grayscale(80%)"}
      bgSize="cover"
      _hover={{
        filter: "grayscale(0%)",
      }}
      transition="all 0.5s ease-in-out"
    />
  );
};

export default DisplayPicture;
