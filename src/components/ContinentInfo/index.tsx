import { About } from './About';
import { CitiesCard } from './CitiesCard';

type InfoType = {
  id: number;
  quantity: number;
  info: string;
};

type CitiesType = {
  id: string;
  city: string;
  url: string;
  country: string;
  flag: string;
};

interface ContinentInfoProps {
  cities: CitiesType[];
  info: InfoType[];
  description: string;
}

export function ContinentInfo({ cities, info, description }: ContinentInfoProps) {
  return (
    <>
      <About description={description} infoType={info} />
      <CitiesCard cities={cities} />
    </>
  );
}
