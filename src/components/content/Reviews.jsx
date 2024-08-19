import { Card, CardBody } from "@chakra-ui/react";
import { useRef } from "react";
import AutoScrollHStack from "../misc/AutoScrollHStack";

const Reviews = () => {
  const ref = useRef(null);

  const array = [
    {
      name: "Techon 3 (2021)",
      description: "Winner of techon mobile app development competetion",
    },
    {
      name: "Techon 1 (2019)",
      description: "Winner of techon in web-application development",
    },
    {
      name: "Techwiz (2019)",
      description:
        "Participated in word-wide web application development Competetion",
    },
    {
      name: "Ecompetencia (2019)",
      description: "Winner of ecompetencia-2019 in web application development",
    },
    {
      name: "International Bebras Community (2016)",
      description:
        "International challenge on informatics and computational thinking",
    },
  ];

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#0e0e0e"
      h={{ base: "fit-content", lg: "full" }}
      rounded="24px"
    >
      <CardBody overflowX="auto" className="scrollbar-hidden">
        <AutoScrollHStack data={array} />
      </CardBody>
    </Card>
  );
};

export default Reviews;
