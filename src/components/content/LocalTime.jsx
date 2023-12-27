import React from "react";
import { Card, CardBody, Flex, Box, Heading, Text } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";

const LocalTime = () => {
  return (
    <Card h="full" role="group" bg="#0e0e0e" rounded="24px">
      <CardBody
        _groupHover={{
          bgImage: `url(${APP_IMAGES.CITY_IMAGE})`,
          filter: "grayscale(20%)",
          bgSize: "cover",
          bgPos: "center",
          transition: "all 0.5s ease-in-out",
          rounded: "24px",
        }}
      >
        <Flex
          color="#d9d9d9"
          h="full"
          flexDir={"column"}
          justify={"space-between"}
        >
          <Heading fontSize="40px">16:00</Heading>
          <Box>
            <Heading fontSize="24px">LOCAL TIME</Heading>
            <Text>Karachi,</Text>
            <Text>Pakistan</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default LocalTime;
