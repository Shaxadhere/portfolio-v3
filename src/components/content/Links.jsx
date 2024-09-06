import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import IconBox from "../data/IconBox";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";
import { INFORMATION } from "../../config/constants/information";

const Links = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#000"
      h="200px"
      rounded="24px"
    >
      <Flex w="full" justify={"space-between"}>
        <Heading color="#fff" fontSize="40px">
          LINKS
        </Heading>
        <IconBox
          display={{ base: "none", lg: "flex" }}
          image={APP_IMAGES.GMAIL}
          link={`mailto:${INFORMATION.EMAIL}`}
          title={"Gmail"}
        />
      </Flex>
      <Box />
      <SimpleGrid mt={2} spacing={2} columns={{ base: 4, lg: 3 }}>
        <IconBox
          display={{ base: "flex", lg: "none" }}
          image={APP_IMAGES.GMAIL}
          link={`mailto:${INFORMATION.EMAIL}`}
          title={"Gmail"}
        />
        {[
          {
            title: "LinkedIn",
            link: INFORMATION.LINKS.LINKEDIN,
            image: APP_IMAGES.LINKEDIN,
          },
          {
            title: "GitHub",
            link: INFORMATION.LINKS.GITHUB,
            image: APP_IMAGES.GITHUB,
          },
          {
            title: "Twitter",
            link: INFORMATION.LINKS.MEDIUM,
            image: APP_IMAGES.MEDIUM,
          },
        ].map((item, index) => (
          <IconBox
            title={item.title}
            image={item.image}
            link={item.link}
            key={index}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default Links;
