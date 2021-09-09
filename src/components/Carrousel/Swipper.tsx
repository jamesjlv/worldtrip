import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation, Lazy, Virtual } from 'swiper';
import { Box, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

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
  return (
    <>
      <Swiper
        lazy
        preloadImages={true}
        onInit={(swiper: any) => swiper.navigation.update()}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {data.map(({ id, continentName, url, banner }, index) => {
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
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
