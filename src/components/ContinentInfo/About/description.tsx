import { Flex, Text } from '@chakra-ui/react';

interface DescriptionProps {
  description: string;
}

export function Description({ description }: DescriptionProps) {
  return (
    <Flex>
      <Text fontSize={['0.85rem', '1.5rem']} textAlign="justify">
        {description}
      </Text>
    </Flex>
  );
}
