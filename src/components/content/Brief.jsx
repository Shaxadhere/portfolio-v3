import { Card, CardBody, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import { INFORMATION } from "../../config/constants/information";

const Brief = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#0e0e0e"
      h="200px"
      rounded="24px"
    >
      <CardBody>
        <Flex flexDir="column" h="full" justify="space-around" color="#d9d9d9">
          <Flex justify="space-between">
            <Heading>IM {INFORMATION.NAME}</Heading>
            <Button
              as="a"
              target="_blank"
              href={INFORMATION.RESUME}
              download={true}
              rightIcon={<DownloadIcon />}
            >
              Resume
            </Button>
          </Flex>
          <Text>{INFORMATION.BRIEF}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Brief;
