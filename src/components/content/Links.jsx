import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import IconBox from "../data/IconBox";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";

const Links = () => {
  return (
    <Card m="auto"  maxW={{ base: "calc(100%5 - 50px)", lg: "full" }} bg="#000" h="200px" rounded="24px">
      <Flex w="full" justify={"space-between"}>
        <Heading color="#fff" fontSize="40px">
          LINKS
        </Heading>
        <IconBox
          image={APP_IMAGES.GMAIL}
          link={"mailto:shaxad.here@gmail.com"}
          title={"Gmail"}
        />
      </Flex>
      <Box />
      <SimpleGrid mt={2} spacing={2} columns={3}>
        {[
          {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/im-shehzad/",
            image: APP_IMAGES.LINKEDIN,
          },
          {
            title: "GitHub",
            link: "https://github.com/shaxadhere",
            image: APP_IMAGES.GITHUB,
          },
          {
            title: "Twitter",
            link: "https://twitter.com/shaxadhere",
            image: APP_IMAGES.TWITTER,
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
