import { Grid } from '@chakra-ui/react';
import { Description } from './description';
import { Infotype } from './infotype';

type continentInfo = {
  id: number;
  quantity: number;
  info: string;
};

interface AboutProps {
  description: string;
  infoType: continentInfo[];
}

export function About({ description, infoType }: AboutProps) {
  return (
    <Grid
      templateColumns={['1fr', 'repeat(2, 1fr)']}
      width="100%"
      maxWidth="1240"
      margin="0 auto"
      padding={['1.5rem 1rem', '5rem 2.5rem']}
    >
      <Description description={description} />
      <Infotype infoType={infoType} />
    </Grid>
  );
}
