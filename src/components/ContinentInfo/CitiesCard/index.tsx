import { Flex, Text, Grid } from '@chakra-ui/react';
import { Card } from './card';
type CitiesType = {
  id: string;
  city: string;
  url: string;
  country: string;
  flag: string;
};

interface CitiesCardProps {
  cities: CitiesType[];
}

export function CitiesCard({ cities }: CitiesCardProps) {
  return (
    <Flex
      width="100%"
      maxWidth="1240"
      margin="0 auto"
      padding={['1rem', '0 2.5rem']}
      flexDirection="column"
    >
      <Text fontSize={['1.5rem', '2rem']} fontWeight="500">
        Top Cidades
      </Text>
      <Grid
        templateColumns={['1fr', 'repeat(4, 1fr)']}
        marginTop="2.5rem"
        marginBottom="2.5rem"
        gap={['1.25rem', '2.81rem']}
        justifyItems={['center', '']}
      >
        {cities.map((city) => (
          <Card data={city} key={city.id} />
        ))}
      </Grid>
    </Flex>
  );
}
