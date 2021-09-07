import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Carrousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex flexDirection="column" w="100vw" h="100vh">
      <Header />
      <Banner />
      <Flex flexDirection="column" width="100%" maxW="1280" margin="0 auto">
        <TravelTypes />
        <Carrousel />
      </Flex>
    </Flex>
  );
}
