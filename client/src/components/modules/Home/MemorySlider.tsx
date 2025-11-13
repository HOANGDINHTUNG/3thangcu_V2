import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { IMemory } from "../../../interface/Memory";

interface Props {
  images: IMemory[];
}

const MemorySlider = ({ images }: Props) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full mb-6">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[260px] md:h-80 rounded-3xl overflow-hidden shadow-2xl"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="w-full h-full relative">
              <img
                src={img.url}
                alt={img.title || "Kỷ niệm"}
                className="w-full h-full object-cover"
              />
              {img.title && (
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent text-white text-xs md:text-sm px-4 py-3">
                  <div className="font-semibold mb-0.5">{img.title}</div>
                  {img.description && (
                    <div className="opacity-90">{img.description}</div>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MemorySlider;
