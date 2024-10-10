import React, { useEffect, useRef, useState } from "react";
import { VStack, Box, Flex, Heading, Text } from "@chakra-ui/react";

const AutoScrollVStack = ({ data }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          // Smooth scroll to the top
          // scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollTop += 1; // Scroll down slowly
        }
      }, 50); // Adjust speed by changing the interval time
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    if (!isHovered) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <VStack
      className="scrollbar-hidden"
      align="stretch"
      maxH={{base:"auto",lg:"600px"}}
      overflowY="auto"
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          rounded="12px"
          color="#d9d9d9"
          py="16px"
          px="12px"
          cursor="pointer"
          as="a"
          target="_blank"
          href={item.link}
          _hover={{
            shadow: "md",
            bg: "#1f1f1f",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Flex justify="space-between">
            <Heading fontSize="16px">{item.title}</Heading>
            <Text>{item.date}</Text>
          </Flex>
          <Text color="#fff">{item.category}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default AutoScrollVStack;
