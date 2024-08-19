import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import Brief from "./components/content/Brief";
import DisplayPicture from "./components/content/DisplayPicture";
import Experience from "./components/content/Experience";
import Links from "./components/content/Links";
import LocalTime from "./components/content/LocalTime";
import Numbers from "./components/content/Numbers";
import Projects from "./components/content/Projects";
import Reviews from "./components/content/Reviews";
import Skills from "./components/content/Skills";

const App = () => {
  return (
    <Box w={"full"} minH="100vh" py={{ base: "30px", lg: "60px" }}>
      <Grid templateColumns="repeat(20, 1fr)" templateRows="repeat(12, 1fr)">
        <GridItem
          p={{ base: 0, lg: 3 }}
          rowSpan={{ base: 12, md: 12 }}
          colSpan={{ base: 20, lg: 8 }}
        >
          <DisplayPicture />
        </GridItem>
        <GridItem
          px={{ base: 0, lg: 3 }}
          py={{ base: 3, lg: 3 }}
          rowSpan={{ base: 10, md: 4 }}
          colSpan={{ base: 20, lg: 8 }}
        >
          <Brief />
        </GridItem>
        <GridItem
          p={{ base: 0, lg: 3 }}
          rowSpan={{ base: 10, md: 4 }}
          colSpan={{ base: 20, lg: 4 }}
        >
          <Links />
        </GridItem>
        <GridItem
          p={{ base: 0, lg: 3 }}
          rowSpan={{ base: 12, md: 8 }}
          colSpan={{ base: 20, lg: 5 }}
        >
          <Skills />
        </GridItem>
        <GridItem
          px={{ base: 0, lg: 3 }}
          py={{ base: 3, lg: 3 }}
          rowSpan={{ base: 10, md: 8 }}
          colSpan={{ base: 20, lg: 3 }}
        >
          <LocalTime />
        </GridItem>
        <GridItem
          p={{ base: 0, lg: 3 }}
          rowSpan={{ base: 12, md: 16 }}
          colSpan={{ base: 20, lg: 4 }}
        >
          <Projects />
        </GridItem>
        <GridItem
          p={{ base: 0, lg: 3 }}
          rowSpan={{ base: 12, md: 3 }}
          colSpan={{ base: 20, md: 8 }}
        >
          <Numbers />
        </GridItem>
        <GridItem
          px={{ base: 0, lg: 3 }}
          py={{ base: 3, lg: 3 }}
          rowSpan={{ base: 12, md: 3 }}
          colSpan={{ base: 20, md: 8 }}
        >
          <Reviews />
        </GridItem>
      </Grid>
      <Box
        m="auto"
        mt={10}
        maxW={{ base: "calc(100vw - 50px)", md: "calc(100% - 400px)" }}
      >
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
