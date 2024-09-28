import React, { useState } from "react";
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import GlareIcon from "../icons/GlareIcon";
import { INFORMATION } from "../../config/constants/information";
import { COLORS } from "../../config/constants/colors";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      role="group"
      bg={COLORS.PRIMARY}
      h="full"
      rounded="24px"
    >
      <CardBody
        _groupHover={{
          bg: "#00000028",
          transform: "scale(0.9)",
        }}
        rounded="20px"
        transition="all 0.2s ease-in-out"
        p="40px"
      >
        <Flex flexDir="column" justify="space-between" color="#e8e6ee" h="full">
          <Flex justify="space-between" alignItems="center" w="full">
            <Heading fontSize="24px">SKILLS</Heading>

            {hoveredSkill ? (
              <MotionImage
                key={hoveredSkill} // Ensures animation retriggers when hoveredSkill changes
                rounded="lg"
                src={INFORMATION.SKILLS[hoveredSkill]}
                alt={hoveredSkill}
                w="120px"
                h="120px"
                objectFit={"contain"}
                transition="all 0.4s ease-in-out"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              />
            ) : (
              <GlareIcon
                w="30px"
                h="30px"
                transition="all 0.4s ease-in-out"
                _groupHover={{
                  transform: "rotate(45deg)",
                  position: "relative",
                  top: "10px",
                  right: "10px",
                }}
              />
            )}
          </Flex>

          <VStack spacing="0px" align="stretch">
            {Object.keys(INFORMATION.SKILLS).map((skill, index) => (
              <Text
                py="8px"
                cursor={"pointer"}
                fontSize="16px"
                key={index}
                _hover={{ textDecor: "underline" }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)} // Reset on mouse leave
              >
                {skill}
              </Text>
            ))}
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Skills;
