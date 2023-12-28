import { Flex, Heading, chakra } from "@chakra-ui/react";
import React from "react";
import { INFORMATION } from "../../config/constants/information";

const Numbers = () => {
  return (
    <Flex
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      px={3}
      h="full"
      justify="space-between"
      align="center"
    >
      <Heading color="#d9d9d9" fontSize="24px">
        <chakra.span fontSize="32px">{INFORMATION.EXPIRIENCE}+ </chakra.span>
        <br /> YEARS OF <br /> EXPERIENCE
      </Heading>
      <Heading color="#d9d9d9" fontSize="24px">
        <chakra.span fontSize="32px">{INFORMATION.TOTAL_PROJECTS}+</chakra.span>
        <br />
        PROJECTS <br /> COMPLETED
      </Heading>
      <Heading color="#d9d9d9" fontSize="24px">
        <chakra.span fontSize="32px">18.637</chakra.span>
        <br />
        HOURS
        <br /> SPENT
      </Heading>
    </Flex>
  );
};

export default Numbers;
