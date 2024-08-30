import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  chakra,
  Text,
} from "@chakra-ui/react";

const Experience = () => {
  return (
    <Box m="auto" maxW={{ base: "full", md:"calc(100% - 200px)", xl: "calc(100% - 400px)" }}>
      <Heading mb={"40px"} color="#d9d9d9" textAlign={"center"}>
        Experiences
      </Heading>

      <SimpleGrid spacing={10} columns={{ base: 1, lg: 2 }} m="auto">
        {[
          {
            designation: "Software Engineer",
            company: "Koderlabs",
            link: "https://koderlabs.com",
            text: `Develop high-performing, and easily maintainable code for a broad range of clients.
            Utilize various programming languages, platforms, frameworks like TypeScript, React.js, React Native, Vue.js and JavaScript.`,
            logo: "https://www.koderlabs.com/assets/img/logo/new-logo.png",
            logoStyles: {
              bgPos: "bottom",
              h: "55px",
              pos: "absolute",
              bottom: "20px",
              right: "6px",
              w: "283px",
              zIndex: 0,
              bgSize: "contain",
            },
          },
          {
            designation: "MERN Stack Developer",
            company: "Fine Solutions",
            link: "https://koderlabs.com",
            text: `Worked with a team of three designers to build a marketing website & auditing web application for UrAudits. 
            Worked on Next.js websites and landing pages.
            Worked on a Human Resource Management System.`,
            logo: "/fine.png",
            logoStyles: {
              bgPos: "bottom",
              h: "85px",
              pos: "absolute",
              bottom: "20px",
              right: "10px",
              w: "calc(100vw - 275px)",
              zIndex: 0,
              bgSize: "contain",
            },
          },
          {
            designation: "Full Stack Developer",
            company: "ARTT",
            link: "https://artt.edu.pk",
            text: `Collaborated with marketing team to develop a marketing website.
            Contributed to the development of learning management systems, which included implementing video lectures with DRM protection and integrating Zoom for live classes.
            Worked on accounting systems for ARTT.`,
            logo: "/artt.png",
            logoStyles: {
              bgPos: "bottom",
              h: "100px",
              pos: "absolute",
              bottom: "20px",
              right: "-39px",
              w: "230px",
              zIndex: 0,
              bgSize: "contain",
            },
          },
        ].map((item, index) => (
          <Card
            key={index}
            m="auto"
            maxW={{ base: "calc(100% - 50px)", lg: "full" }}
            h="200px"
            bg="#0e0e0e"
            rounded="24px"
          >
            <CardBody>
              <Flex
                flexDir="column"
                h="full"
                justify="space-around"
                color="#d9d9d9"
                zIndex={1}
              >
                <Flex>
                  <Box>
                    <Heading fontSize="20px">
                      {item.designation} @{" "}
                      <chakra.a target="_blank" href={item.link}>{item.company}</chakra.a>
                    </Heading>
                  </Box>
                </Flex>
                <Text zIndex={"inherit"}>{item.text}</Text>
                {/* <Box
                  bgImage={`url(${item.logo})`}
                  bgRepeat={"no-repeat"}
                  filter={"grayscale(1)"}
                  // {...item.logoStyles}
                /> */}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;
