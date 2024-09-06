import React from "react";
import { IconButton, Link, Image, Tooltip } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";

const FloatingGithubButton = () => {
  return (
    <span>
      <Tooltip label="View on github">
        <Link
          href="https://github.com/shaxadhere/portfolio-v3"
          isExternal
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="1000"
        >
          <IconButton
            icon={
              <Image
                src={APP_IMAGES.GITHUB}
                w="50px"
                h="50px"
                filter={"invert(1) grayscale(1)"}
              />
            }
            isRound
            size="lg"
            aria-label="GitHub"
            bg="gray.800"
            color="white"
            _hover={{ bg: "gray.700" }}
            _active={{ bg: "gray.600" }}
            boxShadow="lg"
          />
        </Link>
      </Tooltip>
    </span>
  );
};

export default FloatingGithubButton;
