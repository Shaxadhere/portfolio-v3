import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import { DownloadIcon } from "@chakra-ui/icons";
import IconBox from "../data/IconBox";
import APP_IMAGES from "../../config/constants/images";

let timeout;

const Thanks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResumeDownload = () => {
    timeout = setTimeout(() => {
      onOpen();
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Button
        as="a"
        target="_blank"
        href={INFORMATION.RESUME}
        cursor={"pointer"}
        download={true}
        rightIcon={<DownloadIcon />}
        onClick={handleResumeDownload}
      >
        Resume
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          py="5"
          bg="gray.800"
          color="white"
          borderRadius="md"
          boxShadow="xl"
        >
          <ModalHeader fontSize="2xl" textAlign="center">
            🎉 Congrats!
          </ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="lg" textAlign="center">
              Now my resume is in your downloads folder.
              </Text>
              <Text fontSize="sm" textAlign="center" color="gray.400">
                Feel free to check out my other work while you're here.
              </Text>
              <HStack spacing={4} justifyContent="center">
                <SimpleGrid mt={2} spacing={2} columns={{ base: 4, lg: 3 }}>
                  <IconBox
                    display={{ base: "flex", lg: "none" }}
                    image={APP_IMAGES.GMAIL}
                    link={`mailto:${INFORMATION.EMAIL}`}
                    title={"Gmail"}
                  />
                  {[
                    {
                      title: "LinkedIn",
                      link: INFORMATION.LINKS.LINKEDIN,
                      image: APP_IMAGES.LINKEDIN,
                    },
                    {
                      title: "GitHub",
                      link: INFORMATION.LINKS.GITHUB,
                      image: APP_IMAGES.GITHUB,
                    },
                    {
                      title: "Twitter",
                      link: INFORMATION.LINKS.MEDIUM,
                      image: APP_IMAGES.MEDIUM,
                    },
                  ].map((item, index) => (
                    <IconBox
                      title={item.title}
                      image={item.image}
                      link={item.link}
                      key={index}
                      transition="all 0.3s"
                    />
                  ))}
                </SimpleGrid>
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button
              mt="2"
              variant={"link"}
              mr={3}
              onClick={onClose}
              color="#eaeaea"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Thanks;
