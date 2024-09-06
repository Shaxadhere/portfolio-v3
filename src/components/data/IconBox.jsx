import { Image, Flex } from "@chakra-ui/react";
import React from "react";

const IconBox = ({ title, link = "#", image, imageProps, ...rest }) => {
  return (
    <Flex
      h={{ base: "85px", lg: "100px" }}
      w={{ base: "full", lg: "104px" }}
      rounded="8px"
      justify={"center"}
      align={"center"}
      bg="#fff"
      maxW="full"
      as="a"
      target="_blank"
      href={link}
      role="group"
      overflow="hidden"
      flexDir="column"
      {...rest}
    >
      <Image
        maxW="full"
        maxH="60px"
        w="60px"
        h="full"
        src={image}
        filter="grayscale(100%)"
        _groupHover={{
          filter: "grayscale(0%)",
          //   transform: "translateY(-140%)",
          transition: "all 0.3s ease-in-out",
        }}
        {...imageProps}
      />
    </Flex>
  );
};

export default IconBox;
