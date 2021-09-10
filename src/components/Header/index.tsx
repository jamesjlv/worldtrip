import { Flex, Image } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import Link from 'next/link';
interface HeaderProps {
  backToHome?: boolean;
}

export function Header({ backToHome = false }: HeaderProps) {
  return (
    <Flex flexDirection="row" margin="0 auto" position="relative" width="100%" maxWidth="1240">
      {backToHome && (
        <Flex
          alignItems="center"
          padding={['0', '2rem 0']}
          marginLeft="2.5rem"
          zIndex="2"
          className="link"
        >
          <Link href="/" passHref>
            <ChevronLeftIcon boxSize={['2rem', '2.5rem']} />
          </Link>
        </Flex>
      )}
      <Flex width="100%" justifyContent="center" marginLeft={`${backToHome ? '-5rem' : 'none'}`}>
        <Image
          src="/Logo.png"
          alt="Logotipo"
          padding={['1rem', '2rem 0']}
          objectFit="contain"
          boxSize={['100px', 'fit-content']}
          height="auto"
        />
      </Flex>
    </Flex>
  );
}
