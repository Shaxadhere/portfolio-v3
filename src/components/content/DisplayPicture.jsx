import React from "react";
import { Card } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";

const DisplayPicture = () => {
  return (
    <Card
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      m="auto"
      h="full"
      w="full"
      rounded="24px"
      bgImage={`url(${INFORMATION.PROFILE_PICTURE})`}
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
