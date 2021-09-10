import { Image, Text, Box, Grid, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundPosition={['center -120px', 'center -530px']}
      backgroundImage="url('https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1205&q=80')"
      alt="Five continents and infinity possibilities"
      bgSize="100%"
      width="100%"
      height={['9.75rem', '335px']}
      objectFit="cover"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth="1240"
        margin="0 auto"
        marginTop={['1.75rem', '80px']}
        padding={['0 1rem', '0 2rem']}
        height={['9.75rem', '335px']}
      >
        <Grid templateColumns={['1fr', '1fr 1fr']} gap={[0, 6]} width="100%">
          <Box width="100%">
            <Text color="gray.200" fontWeight="500" fontSize={['1.25rem', '36']}>
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text
              color="gray.400"
              fontWeight="regular"
              fontSize={['0.875rem', '20']}
              marginTop={['.5rem', '1rem']}
            >
              Chegou a hora de tirar do papel a viagem que você {isWideVersion && <br />} sempre
              sonhou.
            </Text>
          </Box>
          {isWideVersion && (
            <Box
              width="100%"
              display="flex"
              alignContent="flex-end"
              justifyContent="flex-end"
              paddingRight="2rem"
            >
              <Image src="/airplane.png" width="417px" alt="airplane" />
            </Box>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
