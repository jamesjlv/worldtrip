import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },
    gray: {
      '800': '#47585B',
      '600': '#999999',
      '400': '#DADADA',
      '200': '#F5F8FA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800',
      },
      '.swiper-button-next, .swiper-button-prev': {
        color: 'yellow.500',
        padding: ['0', '0 4rem'],
      },
      ':root': {
        '--swiper-theme-color': '#FFBA08',
      },
      '.swiper-pagination-bullet': {
        width: ['.5rem', '1rem'],
        height: ['.5rem', '1rem'],
      },
      '.link': {
        cursor: 'pointer',
      },
    },
  },
});
