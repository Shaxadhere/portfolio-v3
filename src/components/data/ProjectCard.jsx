import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  chakra,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
      }}
    >
      <CardBody
        className="image-content"
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        bgBlendMode={"multiply"}
      >
        <VStack align="start" p="6" spacing="4">
          <Image
            h="40px"
            filter={"invert(1) grayscale(1)"}
            src={project.logo}
            alt={project.title}
          />
          <Heading color={""} size="md">
            {project.title}
          </Heading>

          <Text fontSize="sm">{project.category}</Text>

          <Box
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link href={project.link} isExternal color="teal.300">
              Visit Project
            </Link>
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
