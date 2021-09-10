import { Flex, Box, Text } from '@chakra-ui/react';

import { Swipper } from './Swipper';
interface CarrouselProps {
  continents: {
    id: string;
    continentName: string;
    url: string;
  }[];
}

export function Carrousel({ continents }: CarrouselProps) {
  return (
    <>
      <Flex margin={['1rem auto', '5rem auto']} flexDirection="column">
        <Box
          backgroundColor="gray.800"
          width="90px"
          height="1.5px"
          marginBottom={'2.5rem'}
          alignSelf="center"
        ></Box>
        <Text fontWeight="500" fontSize={['1.25rem', '2.25rem']} textAlign="center">
          Vamos nessa? <br /> Então escolha eu continente
        </Text>
      </Flex>
      <Flex width="100%" height={['15.625rem', '28.12rem']} marginBottom={['1rem', '4rem']}>
        <Swipper data={continents} />
      </Flex>
    </>
  );
}
