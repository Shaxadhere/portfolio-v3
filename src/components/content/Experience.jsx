import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  chakra,
  Text,
} from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";

const Experience = () => {
  return (
    <Box
      m="auto"
      maxW={{
        base: "full",
        md: "calc(100% - 200px)",
        xl: "calc(100% - 400px)",
      }}
    >
      <Heading mb={"40px"} color="#d9d9d9" textAlign={"center"}>
        Experiences
      </Heading>

      <SimpleGrid spacing={10} columns={{ base: 1, lg: 2 }} m="auto">
        {INFORMATION.EXPIRIENCE_LIST.map((item, index) => (
          <Card
            key={index}
            m="auto"
            maxW={{ base: "calc(100% - 50px)", lg: "full" }}
            h="220px"
            bg="#0e0e0e"
            rounded="24px"
          >
            <CardBody>
              <Flex
                flexDir="column"
                h="full"
                justify="space-around"
                color="#d9d9d9"
                zIndex={1}
              >
                <Flex>
                  <Box>
                    <Heading fontSize="20px">
                      {item.designation} @{" "}
                      <chakra.a target="_blank" href={item.link}>
                        {item.company}
                      </chakra.a>
                    </Heading>
                    <Text zIndex={"inherit"}>{item.timeline}</Text>
                  </Box>
                </Flex>
                <Text zIndex={"inherit"}>{item.text}</Text>
                {/* <Box
                  bgImage={`url(${item.logo})`}
                  bgRepeat={"no-repeat"}
                  filter={"grayscale(1)"}
                  // {...item.logoStyles}
                /> */}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
