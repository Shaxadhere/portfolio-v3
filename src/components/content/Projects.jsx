import React from "react";
import { VStack, Box, Flex, Heading, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box>
      <Flex justify="space-between" align="center">
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
        {new Array(100).fill(0).map((_, index) => (
          <Box
            key={index}
            rounded="12px"
            color="#d9d9d9"
            py="16px"
            px="12px"
            cursor="pointer"
            as="a"
            target="_blank"
            href="https://app.evolv-systems.com"
            _hover={{
              shadow: "md",
              bg: "#1f1f1f",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Flex justify="space-between">
              <Heading fontSize="16px">Evolv LMS</Heading>
              <Text>2020</Text>
            </Flex>
            <Text color="#fff">Frontend Development</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
