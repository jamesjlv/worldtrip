import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Box, Text, Flex } from '@chakra-ui/react';

import Link from 'next/link';
import { useRouter } from 'next/router';

interface SwipperProps {
  data: {
    id: string;
    continentName: string;
    url: string;
    banner?: string;
  }[];
}

SwiperCore.use([Navigation, Pagination]);

export const Swipper = ({ data }: SwipperProps) => {
  let path = '';
  if (process.browser) {
    path = location.href;
  }

  return (
    <Flex w="100%" h={['250px', '450px']} maxW="1240px" mx="auto" mb={['5', '10']}>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        {data.map(({ continentName, url, banner }, index) => {
          return (
            <SwiperSlide key={index}>
              <Flex
                width="100%"
                height="100%"
                position="relative"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  backgroundImage={`url('${url}')`}
                  backgroundPosition="center"
                  backgroundSize="cover"
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  filter="brightness(0.5)"
                ></Box>
                <Link href={`${path}/to/${continentName}`} passHref>
                  <Text
                    color="gray.100"
                    fontWeight="700"
                    fontSize="3rem"
                    position="absolute"
                    textAlign="center"
                  >
                    {continentName}
                    <Text color="gray.400" textAlign="center" fontSize="1.5rem">
                      {banner}
                    </Text>
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};
