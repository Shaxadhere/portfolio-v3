import {
  Box,
  Card,
  Grid,
  GridItem,
  Image,
  Heading,
  CardBody,
  Flex,
  Text,
  chakra,
  VStack,
  SimpleGrid,
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
import Reviews from "./components/content/Reviews";
import Experience from "./components/content/Experience";

const App = () => {
  return (
    <Box w="full" minH="100vh" py={{ base: "30px", lg: "60px" }}>
      <Grid
        templateColumns="repeat(20, 1fr)"
        templateRows="repeat(12, 1fr)"
        gap={6}
      >
        <GridItem rowSpan={{ base: 12, md: 12 }} colSpan={{ base: 20, lg: 8 }}>
          <DisplayPicture />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 4 }} colSpan={{ base: 20, lg: 8 }}>
          <Brief />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 4 }} colSpan={{ base: 20, lg: 4 }}>
          <Links />
        </GridItem>
        <GridItem rowSpan={{ base: 12, md: 8 }} colSpan={{ base: 20, lg: 5 }}>
          <Skills />
        </GridItem>
        <GridItem rowSpan={{ base: 10, md: 8 }} colSpan={{ base: 20, lg: 3 }}>
          <LocalTime />
        </GridItem>
        <GridItem rowSpan={{ base: 12, md: 16 }} colSpan={{ base: 20, lg: 4 }}>
          <Projects />
        </GridItem>
        <GridItem rowSpan={{ base: 12, md: 3 }} colSpan={{ base: 20, md: 8 }}>
          <Numbers />
        </GridItem>
        <GridItem rowSpan={{ base: 12, md: 3 }} colSpan={{ base: 20, md: 8 }}>
          <Reviews />
        </GridItem>
      </Grid>
      <Box m="auto" maxW={{ base: "calc(100vw - 50px)", md: "calc(100% - 400px)" }}>
        <Heading mb={"40px"} color="#d9d9d9" textAlign={"center"}>
          My Github Activity
        </Heading>
        <Image
          mb={20}
          w="full"
          src="https://ghchart.rshah.org/shaxadhere"
          _groupHover={{
            opacity: 0.7,
          }}
        />
      </Box>

      <Experience />
    </Box>
  );
};

export default App;
