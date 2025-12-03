import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import AutoScrollVStack from "../misc/AutoScrollVStack";
import { sortProjectsByDate } from "../../utils/date.utils";

const Projects = () => {
  return (
    <Box m="auto" maxW={{ base: "calc(100% - 50px)", lg: "full" }}>
      <Flex mb={2} justify="space-between" align="center">
        <Heading color="#d9d9d9" fontSize="24px">
          Projects
        </Heading>
      </Flex>
      <AutoScrollVStack data={sortProjectsByDate(INFORMATION.PROJECTS)} />
    </Box>
  );
};

export default Projects;
