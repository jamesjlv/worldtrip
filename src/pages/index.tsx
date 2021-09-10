import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Banner } from '../components/Banner';
import { Carrousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

interface HomeProps {
  continents: {
    id: string;
    continentName: string;
    url: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex flexDirection="column" w="100vw" h="100vh">
      <Header />
      <Banner />
      <Flex flexDirection="column" width="100%" maxW="1280" margin="0 auto">
        <TravelTypes />
        <Carrousel continents={continents} />
      </Flex>
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3001/continents');
  const results = await res.json();
  let continents = [];
  if (results) {
    results.map((continent): any => {
      continents.push({
        id: continent.id,
        continentName: continent.title,
        url: continent.url,
        banner: continent.banner,
      });
    });
  }

  return {
    props: {
      continents,
    },
    revalidate: 10,
  };
};
