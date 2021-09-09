import { GetStaticProps } from 'next';
import { BannerTravel } from '../../components/Banner/BannerTravel';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';

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
  id: string;
  continentName: string;
  description: string;
  url_image: string;
  infotype: InfoType[];
  cities: CitiesType[];
}

interface ContinentProps {
  slug: string;
  continent: ContinentInfoProps;
}

export default function Continent({ continent }: ContinentProps) {
  const continentInfo = {
    id: continent.id,
    continentName: continent.continentName,
    description: continent.description,
    url_image: continent.url_image,
  };
  return (
    <>
      <Header backToHome />
      <BannerTravel continent={continentInfo} />
      <ContinentInfo
        cities={continent.cities}
        info={continent.infotype}
        description={continent.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await fetch(`http://localhost:3001/continents?title=${slug}`);
  const [result] = await res.json();

  const continent = {
    id: String(result.id),
    continentName: result.title,
    description: result.description,
    url_image: result.url,
    infotype: result.infotype,
    cities: result.cities,
  };

  return {
    props: {
      slug,
      continent,
    },
    revalidate: 10,
  };
};
