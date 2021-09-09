import { Flex, Image, Grid, Text } from '@chakra-ui/react';
import ReactCountryFlag from 'react-country-flag';

type CardData = {
  id: string;
  city: string;
  url: string;
  country: string;
  flag: string;
};

interface CardProps {
  data: CardData;
}

export function Card({ data }: CardProps) {
  const { id, country, city, url, flag } = data;
  return (
    <Flex
      height="17.43rem"
      width="15.62rem"
      flexDirection="column"
      borderRadius="sm"
      backgroundColor="white"
    >
      <Image
        src={url}
        alt={city}
        height="10.8rem"
        minHeight="10.8rem"
        objectFit="cover"
        borderRadius="4px 4px 0 0 "
      />
      <Grid
        templateColumns="1fr 1fr"
        borderBottom="1px solid #FFBA08"
        borderLeft="1px solid #FFBA08"
        borderRight="1px solid #FFBA08"
        height="100%"
        padding="1.5rem"
        overflow="hidden"
      >
        <Flex flexDirection="column" height="100%" justifyContent="center">
          <Text fontFamily="Barlow" fontSize="1.25rem" fontWeight="600">
            {city}
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="1rem"
            fontWeight="500"
            color="gray.600"
            marginTop="0.25rem"
          >
            {country}
          </Text>
        </Flex>
        <Flex flexDirection="column" height="100%" alignItems="flex-end" justifyContent="center">
          <ReactCountryFlag
            countryCode={`${flag}`}
            svg
            style={{
              width: '30px',
              height: '30px',
              'border-radius': '50%',
              'object-fit': 'cover',
            }}
          />
        </Flex>
      </Grid>
    </Flex>
  );
}
