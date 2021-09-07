import { Flex, Grid, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Flex margin="0 auto" width="100%">
      <Flex flexDirection="row" w="100%" justifyContent="space-evenly" marginTop="7rem">
        <Flex flexDirection="column" justifyContent="center" align="center">
          <Image src="/cocktail.png" alt="cocktail" />
          <Text fontWeight="600" fontSize="24" marginTop="1rem">
            vida noturna
          </Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" align="center">
          <Image src="/surf1.png" alt="cocktail" />
          <Text fontWeight="600" fontSize="24" marginTop="1rem">
            praia
          </Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" align="center">
          <Image src="/building1.png" alt="cocktail" />
          <Text fontWeight="600" fontSize="24" marginTop="1rem">
            moderno
          </Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" align="center">
          <Image src="/museum1.png" alt="cocktail" />
          <Text fontWeight="600" fontSize="24" marginTop="1rem">
            clássico
          </Text>
        </Flex>
        <Flex flexDirection="column" justifyContent="center" align="center">
          <Image src="/earth.png" alt="cocktail" />
          <Text fontWeight="600" fontSize="24" marginTop="1rem">
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
