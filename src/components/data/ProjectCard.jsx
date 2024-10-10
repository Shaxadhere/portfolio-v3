import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  VStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      w="full"
      h="260px"
      bg="#0e0e0e"
      rounded="24px"
      color="#d9d9d9"
      className="image-container"
      _before={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundPositionX: "left",
        backgroundPositionY: "top",
        borderRadius: "24px",
      }}
    >
      <CardBody
        className="image-content"
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgBlendMode={"multiply"}
      >
        <VStack align="start" p={{ base: "2", lg: "6" }} spacing="4">
          {project.logo && (
            <Image
              h="40px"
              filter={"invert(1) grayscale(1)"}
              src={project.logo}
              alt={project.title}
              {...project.logoStyles}
            />
          )}
          <Heading color={""} size="md">
            {project.title}
          </Heading>

          <Text fontSize="sm">{project.category}</Text>

          <Box
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {project.link ? (
              <Link href={project.link} isExternal color="teal.300">
                Visit Project
              </Link>
            ) : (
              <Text color="gray.500">Private Project</Text>
            )}
          </Box>

          <Text fontSize="xs" color="gray.500">
            {project.date}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
