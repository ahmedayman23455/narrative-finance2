import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface IStakingCard {
  poolApy: string;
  price: string;
  volume24h: string;
  tvl: string;
  coinsName: string;
  coinImages: string[]; // Array of image URLs
}

const StakingCard = ({
  poolApy,
  price,
  volume24h,
  tvl,
  coinsName,
  coinImages,
}: IStakingCard) => {
  return (
    <div
      className=" h-auto flex flex-col gap-4 bg-white dark:bg-[#1E1E1E] p-4 rounded-xl dark:border 
    dark:border-[#363638]"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center ">
          <Image src={coinImages[0]} width={32} height={32} alt="coin" />
          <Image
            className="-ml-2"
            src={coinImages[1]}
            width={32}
            height={32}
            alt="coin"
          />
        </div>

        <p className="text-[#646464] font-semibold">{coinsName}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h6 className="text-sm font-medium text-[#484856] dark:text-[#D2D2D2]">
            Pool APY
          </h6>
          <p className="font-semibold text-xl text-[#484856] dark:text-white">
            {poolApy}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h6 className="text-sm font-medium text-[#484856] dark:text-[#D2D2D2]">
            Price
          </h6>
          <p className="font-semibold text-xl text-[#484856] dark:text-white">
            {price}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h6 className="text-sm font-medium text-[#484856] dark:text-[#D2D2D2]">
            24H VOL
          </h6>
          <p className="font-semibold text-xl text-[#484856] dark:text-white">
            {volume24h}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h6 className="text-sm font-medium text-[#484856] dark:text-[#D2D2D2]">
            TVL
          </h6>
          <p className="font-semibold text-xl text-[#484856] dark:text-white">
            {tvl}
          </p>
        </div>
      </div>

      <Button size="lg"> Supply Liquidity</Button>
    </div>
  );
};

export default StakingCard;
