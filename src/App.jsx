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
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <DisplayPicture />
        </GridItem>
        <GridItem colSpan={2}>
          <Brief />

          <Grid templateColumns="repeat(10, 1fr)" mt={6} gap={6}>
            <GridItem colSpan={7}>
              <Skills />
            </GridItem>
            <GridItem colSpan={3}>
              <LocalTime />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={1}>
          <Links />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;
