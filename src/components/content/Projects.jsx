import React from "react";
import { VStack, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";

const Projects = () => {
  return (
    <Box m="auto" maxW={{ base: "calc(100% - 50px)", lg: "full" }}>
      <Flex mb={2} justify="space-between" align="center">
        <Heading color="#d9d9d9" fontSize="24px">
          Projects
        </Heading>
        <Text color="#fff">View All</Text>
      </Flex>
      <VStack
        className="scrollbar-hidden"
        align="stretch"
        maxH="600px"
        overflowY="auto"
      >
        {INFORMATION.PROJECTS.map((item, index) => (
          <Box
            key={index}
            rounded="12px"
            color="#d9d9d9"
            py="16px"
            px="12px"
            cursor="pointer"
            as="a"
            target="_blank"
            href={item.link}
            _hover={{
              shadow: "md",
              bg: "#1f1f1f",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Flex justify="space-between">
              <Heading fontSize="16px">{item.title}</Heading>
              <Text>{item.date}</Text>
            </Flex>
            <Text color="#fff">{item.category}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
