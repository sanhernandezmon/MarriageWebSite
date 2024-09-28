// components/Gallery.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Image, Box } from "@chakra-ui/react";

const images = [
  `${process.env.PUBLIC_URL}/img1.jpg`,
  `${process.env.PUBLIC_URL}/img2.jpg`,
];
const Gallery = () => {
  return (
    <Box w="100%" maxW="600px" maxH="500px" mx="auto" my={5}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Gallery;
