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
  Image,
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
            h={{base:"auto",lg:"220px"}}
            bg="#0e0e0e"
            rounded="24px"
            as="a"
            href={item.logo &&item.link}
            target={item.logo &&"_blank"}
          >
            <CardBody pos={"relative"} role="group">
              <Flex
                // _groupHover={
                //   item.logo && { opacity: 0.1, bg: "#fff", rounded: "lg" }
                // }
                transition={"all 0.3s ease"}
                flexDir="column"
                h="full"
                justify="space-around"
                color="#d9d9d9"
                zIndex={1}
              >
                <Flex>
                  <Box>
                    <Heading display={"flex"} fontSize="20px">
                      {item.designation} @ {item.company}
                    </Heading>
                    <Text zIndex={"inherit"}>{item.timeline}</Text>
                  </Box>
                </Flex>
                <Text zIndex={"inherit"}>{item.text}</Text>
              </Flex>
              {item.logo && (
                <Image
                  pos={"absolute"}
                  right={0}
                  bottom={0}
                  opacity={0.2}
                  filter={"invert(1) grayscale(1)"}
                  src={item.logo}
                  h="auto"
                  alt={item.company}
                  transition={"all 0.3s ease"}
                  // _groupHover={{
                  //   transform: item.onHoverTransform,
                  //   opacity: 1,
                  //   filter: "none",
                  // }}
                  {...item.logoStyles}
                />
              )}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
