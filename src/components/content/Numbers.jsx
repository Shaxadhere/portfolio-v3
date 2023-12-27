import { Flex, Heading, chakra } from "@chakra-ui/react";
import React from "react";

const Numbers = () => {
  return (
    <Flex m="auto"  maxW={{ base: "calc(100%5 - 50px)", lg: "full" }} px={3} h="full" justify="space-between" align="center">
      <Heading color="#d9d9d9" fontSize="24px">
        <chakra.span fontSize="32px">3+ </chakra.span>
        <br /> YEARS OF <br /> EXPERIENCE
      </Heading>
      <Heading color="#d9d9d9" fontSize="24px">
        <chakra.span fontSize="32px">8.243</chakra.span>
        <br />
        CUPS OF <br /> COFFEE
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
