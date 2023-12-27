import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  CardBody,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GlareIcon from "./components/icons/GlareIcon";
import DisplayPicture from "./components/content/DisplayPicture";
import Brief from "./components/content/Brief";
import Skills from "./components/content/Skills";
import LocalTime from "./components/content/LocalTime";
import Links from "./components/content/Links";

const App = () => {
  return (
    <Box w="full" h="100vh">
      <Grid
        templateColumns="repeat(20, 1fr)"
        templateRows="repeat(10, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={8} colSpan={{ base: 20, md: 8 }}>
          <DisplayPicture />
        </GridItem>
        {/* <GridItem rowSpan={2} colSpan={5}>
          <DisplayPicture />
        </GridItem> */}
        <GridItem rowSpan={2} colSpan={8}>
          <Brief />
        </GridItem>
        <GridItem rowSpan={2} colSpan={4}>
          <Links />
        </GridItem>
        <GridItem rowSpan={4} colSpan={5}>
          <Skills />
        </GridItem>
        <GridItem rowSpan={4} colSpan={3}>
          <LocalTime />
        </GridItem>
        <GridItem rowSpan={8} colSpan={4}>
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
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
