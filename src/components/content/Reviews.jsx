import { Card, CardBody, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

const Reviews = () => {
  const ref = useRef(null);

  return (
    <Card bg="#0e0e0e" h="full" rounded="24px">
      <CardBody overflowX="auto" className="scrollbar-hidden">
        <HStack ref={ref} h="full" spacing={4} color="#d9d9d9">
          {new Array(20).fill(0).map((item, index) => (
            <Flex
              key={index}
              flexDir="column"
              justify="center"
              h="full"
              minW="250px"
              maxW="250px"
            >
              <Heading fontSize="16px">Shehzad Ahmed</Heading>
              <Text fontSize="12px">
                "I create intuitive and visually stunning UI/UX designs that
                help businesses connect with their target audiences."
              </Text>
            </Flex>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Reviews;
