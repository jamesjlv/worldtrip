import { Flex, Img } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex flexDirection="row" w="100%" maxWidth={310} margin="0 auto" position="relative">
      <Img src="/Logo.png" alt="Logotipo" padding={7} />
    </Flex>
  );
}
