import { Card, CardBody, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { INFORMATION } from "../../config/constants/information";

const Reviews = () => {
  const ref = useRef(null);

  const array = [
    {
      name: "Techon 3 (2021)",
      description: "Winner of techon mobile app development competetion"
    },
    {
      name: "Techon 1 (2019)",
      description: "Winner of techon in web-application development"
    },
    {
      name: "Techwiz (2019)",
      description: "Participated in word-wide web application development Competetion"
    },
    {
      name: "Ecompetencia (2019)",
      description: "Winner of ecompetencia-2019 in web application development"
    },
    {
      name: "International Bebras Community (2016)",
      description: "International challenge on informatics and computational thinking"
    },
    
  ]

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#0e0e0e"
      h="full"
      rounded="24px"
    >
      <CardBody overflowX="auto" className="scrollbar-hidden">
        <HStack ref={ref} h="full" spacing={4} color="#d9d9d9">
          {array.map((item, index) => (
            <Flex
              key={index}
              flexDir="column"
              justify="center"
              h="full"
              minW="250px"
              maxW="250px"
            >
              <Text fontSize="12px">
                {item.description}
              </Text>
              <Heading fontSize="16px">{item.name}</Heading>
            </Flex>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default Reviews;
