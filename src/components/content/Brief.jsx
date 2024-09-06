import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Button,
  chakra,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import { INFORMATION } from "../../config/constants/information";
import Thanks from "../misc/Thanks";

const Brief = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#0e0e0e"
      h="full"
      rounded="24px"
    >
      <CardBody>
        <Flex flexDir="column" h="full" justify="space-around" color="#d9d9d9">
          <Flex
            mb={{ base: 2, lg: 0 }}
            flexDir={{ base: "column", lg: "row" }}
            justify="space-between"
          >
            <Heading>I'M SHEHZAD</Heading>
            <Thanks />
          </Flex>
          <Text>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <chakra.a
              color="#745cd6"
              target="_blank"
              href={INFORMATION.LINKS.KODERLABS}
            >
              Koderlabs
            </chakra.a>
            .
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Brief;
