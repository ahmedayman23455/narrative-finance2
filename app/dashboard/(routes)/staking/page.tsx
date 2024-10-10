import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

import AreaStakingChart from "@/components/dashboard/area-chart";
import StakingCards from "@/components/dashboard/StakingCards";
import { funds } from "@/data/demoFunds";
import StakingContent from "./_components/StakingContent";

const StakingPage = () => {
  return (
    <div
      className={cn(
        "relative h-full pt-10 px-4 pb-4 lg:pl-[264px] lg:pt-0 lg:pb-20"
      )}
    >
      <div className="w-full relative">
        {/* header */}
        <div
          className="sticky mt-8 lg:mt-0 right-0 left-0 top-0 
        lg:py-4 flex items-center justify-between lg:z-[80] "
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl  text-black dark:text-white font-semibold">
              Liquidity pools
            </h1>
            <p>Deposit assets, Earn interests, Borrow assets </p>
          </div>

          <div className=" items-center gap-4 hidden lg:flex">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="text-sm truncate w-[106px]">
                Ahmed Ayma nAyma nAymanAyman Ayman Ayman
              </p>
            </div>

            <Button size="sm">Disconnect</Button>
          </div>
        </div>

        <StakingContent />
      </div>
    </div>
  );
};

export default StakingPage;
