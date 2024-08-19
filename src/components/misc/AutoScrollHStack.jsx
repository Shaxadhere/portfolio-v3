import React, { useEffect, useRef, useState } from "react";
import { HStack, Flex, Text, Heading } from "@chakra-ui/react";

const AutoScrollHStack = ({ data }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          // Smooth scroll back to the start
        //   scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollLeft += 2; // Scroll right slowly
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
    <HStack
     className="scrollbar-hidden"
      ref={scrollRef}
      h="full"
      spacing={4}
      color="#d9d9d9"
      overflowX="auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.map((item, index) => (
        <Flex
          key={index}
          flexDir="column"
          justify="center"
          h="full"
          minW="250px"
          maxW="250px"
        >
          <Text fontSize="12px">{item.description}</Text>
          <Heading fontSize="16px">{item.name}</Heading>
        </Flex>
      ))}
    </HStack>
  );
};

export default AutoScrollHStack;