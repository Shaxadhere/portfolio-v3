import { Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import GlareIcon from "../icons/GlareIcon";
import { INFORMATION } from "../../config/constants/information";

const Skills = () => {
  return (
    <Card m="auto"  maxW={{ base: "calc(100% - 50px)", lg: "full" }} role="group" bg="#745cd6" h="444px" rounded="24px">
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
          <Flex justify="space-between" w="full">
            <Heading fontSize="24px">SKILLS</Heading>
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
          </Flex>

          <VStack spacing="8px" align="stretch">
            {INFORMATION.SKILLS.map(
              (skill, index) => (
                <Text fontSize="16px" key={index}>
                  {skill}
                </Text>
              )
            )}
          </VStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Skills;
