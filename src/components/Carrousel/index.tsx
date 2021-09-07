import { Flex, Box, Text } from '@chakra-ui/react';
import { Swipper } from './Swipper';

export function Carrousel() {
  return (
    <>
      <Flex margin="5rem auto" flexDirection="column">
        <Box
          backgroundColor="gray.800"
          width="90px"
          height="1.5px"
          marginBottom="2.5rem"
          alignSelf="center"
        ></Box>
        <Text fontWeight="500" fontSize="2.25rem" textAlign="center">
          Vamos nessa? <br /> Então escolha eu continente
        </Text>
      </Flex>
      <Flex width="100%" height="28.12rem" marginBottom="4rem">
        <Swipper />
      </Flex>
    </>
  );
}
