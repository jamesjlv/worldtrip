import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex margin="0 auto" width="100%" boxSizing="border-box" overflow="hidden">
      <Flex
        display={['flex', 'flex']}
        flexWrap="wrap"
        flexDirection="row"
        w="100%"
        justifyContent={['center', 'space-evenly']}
        marginTop={['2rem', '7rem']}
      >
        <Flex
          flexDirection={['row', 'column']}
          justifyContent="center"
          align="center"
          marginBottom={['.5rem', '0']}
          marginRight={['2.5rem', '0']}
        >
          {isWideVersion ? (
            <Image src="/cocktail.png" alt="cocktail" />
          ) : (
            <span
              style={{
                width: '8px',
                height: '8px',
                color: '#FFBA08',
                backgroundColor: '#FFBA08',
                borderRadius: '50%',
                marginRight: '.5rem',
              }}
            >
              .
            </span>
          )}
          <Text fontWeight="600" fontSize={['1.125rem', '24']} marginTop={['0', '1rem']}>
            vida noturna
          </Text>
        </Flex>
        <Flex
          flexDirection={['row', 'column']}
          justifyContent="center"
          alignItems="center"
          marginBottom={['.5rem', '0']}
          marginRight={['2.5rem', '0']}
        >
          {isWideVersion ? (
            <Image src="/surf1.png" alt="cocktail" />
          ) : (
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#FFBA08',
                borderRadius: '50%',
                marginRight: '.5rem',
              }}
            >
              {' '}
            </span>
          )}
          <Text fontWeight="600" fontSize={['1.125rem', '24']} marginTop={['0', '1rem']}>
            praia
          </Text>
        </Flex>
        <Flex
          flexDirection={['row', 'column']}
          justifyContent="center"
          align="center"
          marginBottom={['.5rem', '0']}
          marginRight={['2.5rem', '0']}
        >
          {isWideVersion ? (
            <Image src="/building1.png" alt="cocktail" />
          ) : (
            <span
              style={{
                width: '8px',
                height: '8px',
                color: '#FFBA08',
                backgroundColor: '#FFBA08',
                borderRadius: '50%',
                marginRight: '.5rem',
              }}
            >
              .
            </span>
          )}
          <Text fontWeight="600" fontSize={['1.125rem', '24']} marginTop={['0', '1rem']}>
            moderno
          </Text>
        </Flex>
        <Flex
          flexDirection={['row', 'column']}
          justifyContent="center"
          align="center"
          marginBottom={['.5rem', '0']}
          marginRight={['2.5rem', '0']}
        >
          {isWideVersion ? (
            <Image src="/museum1.png" alt="cocktail" />
          ) : (
            <span
              style={{
                width: '8px',
                height: '8px',
                color: '#FFBA08',
                backgroundColor: '#FFBA08',
                borderRadius: '50%',
                marginRight: '.5rem',
              }}
            >
              .
            </span>
          )}
          <Text fontWeight="600" fontSize={['1.125rem', '24']} marginTop={['0', '1rem']}>
            clássico
          </Text>
        </Flex>
        <Flex
          flexDirection={['row', 'column']}
          justifyContent="center"
          align="center"
          marginBottom={['.5rem', '0']}
          marginRight={['2.5rem', '0']}
        >
          {isWideVersion ? (
            <Image src="/earth.png" alt="cocktail" />
          ) : (
            <span
              style={{
                width: '8px',
                height: '8px',
                color: '#FFBA08',
                backgroundColor: '#FFBA08',
                borderRadius: '50%',
                marginRight: '.5rem',
              }}
            >
              .
            </span>
          )}
          <Text fontWeight="600" fontSize={['1.125rem', '24']} marginTop={['0', '1rem']}>
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
