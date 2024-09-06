import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { INFORMATION } from "../../config/constants/information";
import ProjectCard from "../data/ProjectCard";

const ProjectsList = () => {
  return (
    <Box
      m="auto"
      maxW={{
        base: "full",
        md: "calc(100% - 200px)",
        xl: "calc(100% - 400px)",
      }}
      mt={{ base: "40px", md: "80px" }}
    >
      <Heading mb={"40px"} color="#d9d9d9" textAlign={"center"}>
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} m="auto">
        {INFORMATION.PROJECTS.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsList;
