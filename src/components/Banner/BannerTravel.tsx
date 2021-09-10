import { Text, Box, Flex } from '@chakra-ui/react';

interface ContinentInfoProps {
  id: string;
  continentName: string;
  description: string;
  url_image: string;
}

interface BannerTravelProps {
  continent: ContinentInfoProps;
}

export function BannerTravel({ continent }: BannerTravelProps) {
  return (
    <Flex width="100%" height={['9.37rem', '31.25rem']} flexDirection="column" position="relative">
      <Box
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url("${continent.url_image}")`}
        alt="Five continents and infinity possibilities"
        bgSize="100%"
        width="100%"
        height={['9.37rem', '31.25rem']}
        filter="brightness(0.7)"
        position="absolute"
      />
      <Flex zIndex="banner" width="100%" maxWidth="1240" height="31.25rem" margin="0 auto">
        <Text
          color="gray.200"
          fontWeight="600"
          fontSize={['1.75rem', '48']}
          alignSelf={['center', 'flex-end']}
          marginBottom={['0', '3.68rem']}
          textAlign={['center', 'initial']}
          width="100%"
          marginLeft={['', '2.5rem']}
        >
          {continent.continentName}
        </Text>
      </Flex>
    </Flex>
  );
}
