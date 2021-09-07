import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Box, Text, Flex } from '@chakra-ui/react';

SwiperCore.use([Pagination, Navigation]);

export function Swipper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            position="relative"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              backgroundImage="url('https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')"
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              filter="brightness(0.8)"
            ></Box>
            <Text
              color="gray.100"
              fontWeight="700"
              fontSize="3rem"
              position="absolute"
              textAlign="center"
            >
              Europa
              <Text color="gray.400" textAlign="center" fontSize="1.5rem">
                O continente mais antigo
              </Text>
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
