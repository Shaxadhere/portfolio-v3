import { Box, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Brief from "./components/content/Brief";
import DisplayPicture from "./components/content/DisplayPicture";
import Experience from "./components/content/Experience";
import Links from "./components/content/Links";
import LocalTime from "./components/content/LocalTime";
import Numbers from "./components/content/Numbers";
import Projects from "./components/content/Projects";
import Reviews from "./components/content/Reviews";
import Monty from "./components/content/Monty";
import Skills from "./components/content/Skills";
import ProjectsList from "./components/content/ProjectsList";
import FloatingGithubButton from "./components/misc/FloatingGithubButton";
import Github from "./components/content/Github";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);

const gridItems = [
  {
    component: <DisplayPicture />,
    rowSpan: { base: 12, md: 12 },
    colSpan: { base: 20, lg: 8 },
  },
  {
    component: <Brief />,
    rowSpan: { base: 10, md: 4 },
    colSpan: { base: 20, lg: 8 },
  },
  {
    component: <Links />,
    rowSpan: { base: 10, md: 4 },
    colSpan: { base: 20, lg: 4 },
  },
  {
    component: <Skills />,
    rowSpan: { base: 12, md: 8 },
    colSpan: { base: 20, lg: 5 },
  },
  {
    component: <LocalTime />,
    rowSpan: { base: 10, md: 8 },
    colSpan: { base: 20, lg: 3 },
  },
  {
    component: <Projects />,
    rowSpan: { base: 12, md: 16 },
    colSpan: { base: 20, lg: 4 },
  },
  {
    component: <Numbers />,
    rowSpan: { base: 12, md: 3 },
    colSpan: { base: 20, md: 8 },
  },
  {
    component: <Reviews />,
    rowSpan: { base: 12, md: 3 },
    colSpan: { base: 20, md: 8 },
  },
];

const pageVariants = {
  initial: { opacity: 0, x: -1000, rotate: 45 },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 30, // Lower stiffness for slower motion
      damping: 15, // Slightly higher damping for more controlled movement
      duration: 2, // Increase duration for a slower animation
    },
  },
};

const App = () => {
  const experienceControls = useAnimation();
  const projectsControls = useAnimation();

  const [experienceRef, experienceInView] = useInView({
    threshold: 0.2,
  });
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (experienceInView) {
      experienceControls.start("visible");
    }
  }, [experienceControls, experienceInView]);

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start("visible");
    }
  }, [projectsControls, projectsInView]);

  return (
    <Flex justify={"center"}>
      <Box
        w={"full"}
        minH="100vh"
        py={{ base: "30px", lg: "60px" }}
        maxW={"1800px"}
      >
        <Grid
          templateColumns="repeat(20, 1fr)"
          gap={{ base: 5, lg: 0 }}
          templateRows="repeat(12, 1fr)"
        >
          {gridItems.map((item, index) => (
            <MotionGridItem
              key={index}
              p={{ base: 0, lg: 3 }}
              initial="initial"
              animate="animate"
              variants={pageVariants}
              transition={{ delay: index * 0.5 }} // Further increase delay for slower stagger
              rowSpan={item.rowSpan}
              colSpan={item.colSpan}
            >
              {item.component}
            </MotionGridItem>
          ))}
        </Grid>
        <Github />
        <MotionBox
          ref={experienceRef}
          initial="hidden"
          animate={experienceControls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <Experience />
        </MotionBox>

        <FloatingGithubButton />
      </Box>
    </Flex>
  );
};

export default App;
