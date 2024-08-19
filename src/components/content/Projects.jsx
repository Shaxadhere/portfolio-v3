import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import AutoScrollVStack from "../misc/AutoScrollVStack";

const Projects = () => {
  return (
    <Box m="auto" maxW={{ base: "calc(100% - 50px)", lg: "full" }}>
      <Flex mb={2} justify="space-between" align="center">
        <Heading color="#d9d9d9" fontSize="24px">
          Projects
        </Heading>
        <Text color="#fff">View All</Text>
      </Flex>
      <AutoScrollVStack data={INFORMATION.PROJECTS} />
    </Box>
  );
};

export default Projects;
