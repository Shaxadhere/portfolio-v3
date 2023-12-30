import React, { useEffect } from "react";
import { Card, CardBody, Flex, Box, Heading, Text } from "@chakra-ui/react";
import moment from "moment-timezone";
import APP_IMAGES from "../../config/constants/images";
import useForceUpdate from "../../config/hooks/useForceUpdate";
import { INFORMATION } from "../../config/constants/information";

const LocalTime = () => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      h="full"
      role="group"
      bg="#0e0e0e"
      rounded="24px"
    >
      <CardBody
        _groupHover={{
          bgImage: `url(${INFORMATION.CITY_PICTURE})`,
          filter: "saturate(1)",
          bgSize: "cover",
          bgPos: "center",
          transition: "all 0.5s ease-in-out",
        }}
        rounded="24px"
      >
        <Flex
          color="#fff"
          h="full"
          flexDir={"column"}
          justify={"space-between"}
        >
          <Heading fontSize="40px">
            {moment(new Date())
              .tz(INFORMATION.LOCAL_TIME_ZONE || "Asia/Karachi")
              .format("HH:mm")}
          </Heading>
          <Box>
            <Heading fontSize="24px">LOCAL TIME</Heading>
            <Text>{INFORMATION.CITY},</Text>
            <Text>{INFORMATION.COUNTRY}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default LocalTime;
