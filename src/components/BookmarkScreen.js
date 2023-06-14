import { Container, Flex, Heading } from "@chakra-ui/react";

const BookmarkScreen = () => {
  return (
    <>
      <div>
        <Container maxW="container.md" pt={10}>
          <Flex>
            <Heading
              className="text-white/90 "
              align="start"
              mt={24}
              as="h3"
              size="xl"
            >
              All BookMarks
            </Heading>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BookmarkScreen;
