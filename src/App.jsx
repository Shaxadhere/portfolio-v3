import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  CardBody,
  Flex,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GlareIcon from "./components/icons/GlareIcon";
import DisplayPicture from "./components/content/DisplayPicture";
import Brief from "./components/content/Brief";
import Skills from "./components/content/Skills";
import LocalTime from "./components/content/LocalTime";
import Links from "./components/content/Links";
import Projects from "./components/content/Projects";
import Numbers from "./components/content/Numbers";
import { HStack } from "@chakra-ui/react";
import Reviews from "./components/content/Reviews";

const App = () => {
  return (
    <Box w="full" h="100vh">
      <Grid
        templateColumns="repeat(20, 1fr)"
        templateRows="repeat(20, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={12} colSpan={{ base: 20, md: 8 }}>
          <DisplayPicture />
        </GridItem>
        <GridItem rowSpan={4} colSpan={8}>
          <Brief />
        </GridItem>
        <GridItem rowSpan={4} colSpan={4}>
          <Links />
        </GridItem>
        <GridItem rowSpan={8} colSpan={5}>
          <Skills />
        </GridItem>
        <GridItem rowSpan={8} colSpan={3}>
          <LocalTime />
        </GridItem>
        <GridItem rowSpan={16} colSpan={4}>
          <Projects />
        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 20, md: 8 }}>
          <Numbers />
        </GridItem>
        <GridItem rowSpan={3} colSpan={{ base: 20, md: 8 }}>
          <Reviews />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
