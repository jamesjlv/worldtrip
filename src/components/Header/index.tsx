import { Flex, Image, Link } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
interface HeaderProps {
  backToHome?: boolean;
}

export function Header({ backToHome = false }: HeaderProps) {
  return (
    <Flex flexDirection="row" margin="0 auto" position="relative" width="100%" maxWidth="1240">
      {backToHome && (
        <Link href="/" alignItems="center" padding="2rem 0" marginLeft="2.5rem" zIndex="2">
          <ChevronLeftIcon boxSize="2.5rem" />
        </Link>
      )}
      <Flex width="100%" justifyContent="center" marginLeft={`${backToHome ? '-5rem' : 'none'}`}>
        <Image src="/Logo.png" alt="Logotipo" padding="2rem 0" />
      </Flex>
    </Flex>
  );
}
