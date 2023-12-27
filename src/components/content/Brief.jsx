import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Brief = () => {
  return (
    <Card bg="#0e0e0e" h="200px" rounded="24px">
      <CardBody>
        <Flex flexDir="column" h="full" justify="space-around" color="#d9d9d9">
          <Heading>IM SHEHZAD</Heading>
          <Text>
            I create intuitive and visually stunning UI/UX designs that help
            businesses connect with their target audiences, achieve their
            objectives, and stand out in today's competitive digital landscape
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Brief;
