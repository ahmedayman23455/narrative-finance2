"use client";
import StakingCards from "@/components/dashboard/StakingCards";
import React from "react";
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
import { funds } from "@/data/demoFunds";
import { Button } from "@/components/ui/button";

const StakingContent = () => {
  const [selectedPair, setSelectedPair] = React.useState("$N-Sol");
  console.log("🚀 ~ StakingContent ~ selectedPair:", selectedPair);
  return (
    <>
      {/* grid */}
      <StakingCards setSelectedPair={setSelectedPair} />

      <div className="space-y-4 xl:gap-4 xl:space-y-0 xl:grid xl:grid-cols-3 grid-rows-[auto_auto_auto]  mb-24 ">
        {/* My Pool Share Valuation */}
        <div
          className=" w-full flex flex-col  gap-4 bg-white dark:bg-[#1E1E1E] p-4 rounded-xl dark:border 
dark:border-[#363638] col-span-2 row-start-3 row-end-4"
        >
          <h3 className="text-[#585967] dark:text-[#fff] font-semibold">
            My Pool Share Valuation
          </h3>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center ">
                <Image
                  src="/assets/site/logoIcon.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
                <Image
                  className="-ml-2"
                  src="/assets/site/coins/coin30.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h5 className="text-xs text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $N-Sol/USDT
                </h5>
                <p className="text-sm text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $30.000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center ">
                <Image
                  src="/assets/site/logoIcon.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
                <Image
                  className="-ml-2"
                  src="/assets/site/coins/coin30.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h5 className="text-xs text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $N-AI/USDT
                </h5>
                <p className="text-sm text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $30.000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center ">
                <Image
                  src="/assets/site/logoIcon.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
                <Image
                  className="-ml-2"
                  src="/assets/site/coins/coin30.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h5 className="text-xs text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $N-MEME/USDT
                </h5>
                <p className="text-sm text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $30.000
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center ">
                <Image
                  src="/assets/site/logoIcon.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
                <Image
                  className="-ml-2"
                  src="/assets/site/coins/coin30.png"
                  width={32}
                  height={32}
                  alt="coin"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h5 className="text-xs text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $N-EVM/USDT
                </h5>
                <p className="text-sm text-[#848C99] dark:text-[#AEAEB2] font-semibold">
                  $30.000
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Button className="flex-1 max-w-[296px]" size="lg">
              Farm LP Tokens
            </Button>

            <Button
              className="max-w-[296px] flex-1 border border-[#1A3EFF] bg-transparent text-[#848C99]"
              size="lg"
            >
              Trade Lp Tokens
            </Button>
          </div>
        </div>

        {/* Liquity */}
        <div
          id="liquidity"
          className="row-start-2 row-end-4 w-full flex flex-col gap-4 bg-white dark:bg-[#1E1E1E] p-4 rounded-xl dark:border 
dark:border-[#363638] col-span-1"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[#242424] dark:text-[#fff] font-semibold text-xl ">
              Liquidity
            </h3>

            <Select defaultValue="Supply">
              <SelectTrigger className="w-[130px] bg-[#DADEFF] text-[#484856] dark:text-white font-semibold  border-[#1A3EFF] bg-transparent text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Supply">Supply</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="pairedToken" className="flex flex-col gap-4">
            <div className="relative flex flex-col gap-4 w-full  justify-between">
              {/* > tabs */}

              <div className="flex flex-col gap-4 lg:flex-row items-center justify-between w-full">
                <TabsList className="!w-full">
                  <TabsTrigger value="pairedToken">Paired Token</TabsTrigger>
                  <TabsTrigger value="singleToken">Single Token</TabsTrigger>
                </TabsList>

                {/* <div>right side</div> */}
              </div>

              <TabsContent value="pairedToken">
                <div className="relative flex flex-col gap-12">
                  <div className="p-4 bg-[#1A3EFF] text-white rounded-md">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col gap-4 items-start justify-between">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Input
                        </label>

                        <div className="relative text-3xl font-semibold">
                          <Input
                            type="number"
                            name="amount"
                            id="amount"
                            className="w-full p-0 outline-none !bg-none !shadow-none text-3xl border-none !focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="py-1 px-2 bg-white text-[#000] font-bold rounded-md mb-2 ">
                        Max
                      </div>

                      <div className="flex flex-col gap-4">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Avl : 30,123,1405
                        </label>

                        <Select defaultValue="SOL">
                          <SelectTrigger className="w-[190px] h-12 bg-transparent border-none text-white  font-semibold text-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SOL">
                              <div className="!flex items-center gap-2 w-full">
                                <Image
                                  src="/assets/site/coins/coin30.png"
                                  width={24}
                                  height={24}
                                  alt="ETH"
                                  priority
                                />
                                <p>USDT</p>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="relative p-4 bg-[#1A3EFF] text-white rounded-md">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col gap-4 items-start justify-between">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Input
                        </label>

                        <div className="relative text-3xl font-semibold">
                          <Input
                            type="number"
                            name="amount"
                            id="amount"
                            className=" p-0 outline-none !bg-none !shadow-none text-3xl border-none !focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="py-1 px-2 bg-white text-[#000] font-bold rounded-md mb-2 ">
                        Max
                      </div>

                      <div className="flex flex-col gap-4">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Avl : 30,123,1405
                        </label>

                        <Select
                          value={selectedPair}
                          onValueChange={setSelectedPair}
                        >
                          <SelectTrigger className="w-[190px] h-12 bg-transparent border-none text-white  font-semibold text-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {funds.map((fund, i) => (
                              <SelectItem key={i} value={fund.tag || ""}>
                                <div className="!flex items-center gap-2 w-full">
                                  <Image
                                    src={fund.image}
                                    width={24}
                                    height={24}
                                    alt="ETH"
                                    priority
                                  />
                                  <p>{fund.tag}</p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#1A3eff] p-2 flex items-center justify-center rounded-md">
                      <div className="  py-1 px-2 bg-white text-[#000] font-bold rounded-md ">
                        <Plus />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center px-6 mt-2 justify-between text-[#919194] font-medium">
                  <p>Current Rate</p>
                  <p>1 USDT = 4 SOL</p>
                </div>

                <div className="flex flex-col gap-4 w-full mt-12">
                  <Button size="lg"> Approve USDT and SOLANA </Button>
                  <Button
                    size="lg"
                    className=" border border-[#1A3EFF] bg-transparent text-[#848C99]"
                  >
                    Supply Liquidity
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="singleToken">
                <div className="relative flex flex-col gap-12">
                  <div className="p-4 bg-[#1A3EFF] text-white rounded-md">
                    <div className="flex items-end justify-between gap-4">
                      <div className="flex flex-col gap-4 items-start justify-between">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Input
                        </label>

                        <div className="relative text-3xl font-semibold">
                          <Input
                            type="number"
                            name="amount"
                            id="amount"
                            className="w-full p-0 outline-none !bg-none !shadow-none text-3xl border-none !focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="py-1 px-2 bg-white text-[#000] font-bold rounded-md mb-2 ">
                        Max
                      </div>

                      <div className="flex flex-col gap-4">
                        <label htmlFor="amount" className="text-sm font-medium">
                          Avl : 30,123,1405
                        </label>

                        <Select defaultValue={selectedPair}>
                          <SelectTrigger className="w-[190px] h-12 bg-transparent border-none text-white  font-semibold text-xl">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {funds.map((fund, i) => (
                              <SelectItem key={i} value={fund.tag || ""}>
                                <div className="!flex items-center gap-2 w-full">
                                  <Image
                                    src={fund.image}
                                    width={24}
                                    height={24}
                                    alt="ETH"
                                    priority
                                  />
                                  <p>{fund.tag}</p>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center px-6 mt-2 justify-between text-[#919194] font-medium">
                  <p>Current Rate</p>
                  <p>1 USDT = 4 SOL</p>
                </div>

                <div className="flex flex-col gap-4 w-full mt-12">
                  <Button size="lg">SOLANA </Button>
                  <Button
                    size="lg"
                    className=" border border-[#1A3EFF] bg-transparent text-[#848C99]"
                  >
                    Supply Liquidity
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Chart */}
        <div
          className="row-start-2 row-end-3  col-start-1 col-end-3 bg-[#F2F7FD] dark:bg-[#1E1E1E]  p-4 rounded-xl dark:border 
dark:border-[#363638] flex gap-4 max-lg:flex-wrap"
        >
          <div className="flex flex-col  bg-white w-full p-4 dark:bg-[#242424] dark:border dark:border-[#363638] h-full rounded-xl">
            <Tabs
              defaultValue="pairedToken"
              className="flex flex-col gap-4 h-full"
            >
              <div className="flex flex-col gap-8 justify-between h-full">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-col ">
                    <h6 className="text-sm font-medium text-[#484856] dark:text-[#D2D2D2]">
                      Liquidity
                    </h6>
                    <p className="font-semibold text-xl text-[#484856] dark:text-white">
                      $14,612,415
                    </p>
                  </div>

                  <div>
                    <TabsList className="!w-full">
                      <TabsTrigger value="pairedToken">
                        Paired Token
                      </TabsTrigger>
                      <TabsTrigger value="volume">Volume</TabsTrigger>
                      <TabsTrigger value="tvl">TVL</TabsTrigger>
                      <TabsTrigger value="fees">Fees</TabsTrigger>
                    </TabsList>
                  </div>
                </div>

                <TabsContent value="pairedToken">
                  <AreaStakingChart />
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="bg-white w-max dark:bg-[#242424] dark:border dark:border-[#363638] h-full rounded-xl p-4 flex flex-col gap-8 max-lg:w-full">
            <div
              className="flex items-center justify-between gap-4  text-base font-semibold 
      text-[#6B6C78] dark:text-[#AEAEB2] bg-[#F2F4F7] dark:bg-[#1E1E1E] px-2 rounded-md"
            >
              <p className="whitespace-nowrap">Total locked value</p>
              <p>$11.51M</p>
            </div>

            <div
              className="flex items-center justify-between gap-4  text-base font-semibold 
      text-[#6B6C78] dark:text-[#AEAEB2] bg-[#F2F4F7] dark:bg-[#1E1E1E] px-2 rounded-md"
            >
              <p className="whitespace-nowrap">Pool Ratio</p>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#7BE382] rounded-full"></div>
                  <p>52.7% USDT</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-[10px] h-[10px] bg-[#9C3FD0] rounded-full"></div>
                  <p>47.3% SOL</p>
                </div>
              </div>
            </div>

            <div
              className="flex items-center justify-between gap-4  text-base font-semibold 
      text-[#6B6C78] dark:text-[#AEAEB2] bg-[#F2F4F7] dark:bg-[#1E1E1E] px-2 rounded-md"
            >
              <p className="whitespace-nowrap">24H Earnings</p>
              <p>$75,563</p>
            </div>

            <div
              className="flex items-center justify-between gap-4  text-base font-semibold 
      text-[#6B6C78] dark:text-[#AEAEB2] bg-[#F2F4F7] dark:bg-[#1E1E1E] px-2 rounded-md"
            >
              <p className="whitespace-nowrap">LP Token</p>
              <p>$Solana</p>
            </div>

            <div
              className="flex items-center justify-between gap-4  text-base font-semibold 
      text-[#6B6C78] dark:text-[#AEAEB2] bg-[#F2F4F7] dark:bg-[#1E1E1E] px-2 rounded-md"
            >
              <p className="whitespace-nowrap">Blockchain</p>
              <p>Multichain</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingContent;
