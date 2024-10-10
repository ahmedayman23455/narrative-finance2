"use client";
import React, { useEffect, useState } from "react";
import StakingCard from "./StakingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { funds } from "@/data/demoFunds";
import "swiper/css";
import "swiper/css/scrollbar";

interface IStakingCards {
  setSelectedPair: (pair: string) => void;
}

const StakingCards = ({ setSelectedPair }: IStakingCards) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div className="w-full mx-auto mt-4 md:mt-10 mb-4">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={12}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            slidesPerGroup: 2.2,
          },
          1280: {
            slidesPerView: 3.2,
            slidesPerGroup: 3.2,
          },
          1800: {
            slidesPerView: 4.2,
            slidesPerGroup: 4.2,
          },
        }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        scrollbar={{ draggable: true }}
        grabCursor={false}
        mousewheel={{ forceToAxis: true }}
        freeMode={true}
      >
        {funds.map((fund) => {
          return (
            <SwiperSlide key={fund.id}>
              <StakingCard
                fundTag={fund.tag}
                coinsName={`${fund.tag?.toUpperCase()}/USDT`}
                poolApy="100%"
                price="$20.00"
                volume24h="$8,450"
                tvl="$8,750,000"
                coinImages={[
                  "/assets/site/logoIcon.png",
                  "/assets/site/coins/coin30.png",
                ]}
                setSelectedPair={setSelectedPair}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StakingCards;
