import { Grid, Flex, Text, Tooltip, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

type continentInfo = {
  id: number;
  quantity: number;
  info: string;
  toltip?: string;
};

interface InfoTypeProps {
  infoType: continentInfo[];
}

export function Infotype({ infoType }: InfoTypeProps) {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      {infoType?.map((info) => (
        <Flex
          flexDirection="column"
          alignItems={['left', 'center']}
          justifyContent="center"
          key={info.id}
        >
          <Text fontSize={['1.5rem', '3rem']} color="yellow.500" fontWeight="600">
            {info.quantity}
          </Text>
          <Text
            fontSize={['1.125rem', '1.5rem']}
            color="gray.800"
            fontWeight="600"
            display="inline-flex"
            alignItems="center"
          >
            {info.info}
            {info?.toltip && (
              <Tooltip hasArrow label={info?.toltip}>
                <InfoOutlineIcon fontSize={['0', '1rem']} marginLeft="0.5rem" />
              </Tooltip>
            )}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
}
