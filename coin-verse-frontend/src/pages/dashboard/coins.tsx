import DashboardLayout from "@/components/layout/DashboardLayout";
import { Data, Response } from "@/interface/coins";
import { allCoins } from "@/service/apiRequest";
import millify from "millify";
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { NextPageWithLayout } from "../_app";

const Coins: NextPageWithLayout = () => {
  const [coinsData, setCoinsData] = useState<Data>();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);

  const cPage = coinsData?.pagination?.page!;
  const cLimit = coinsData?.pagination?.limit!;

  useEffect(() => {
    const coins = async () => {
      const coinData: Response<Data> = await allCoins({ page, limit });

      if (coinData.statusCode === 200) {
        setCoinsData(coinData.data);
      }
    };

    coins();
  }, [limit, page]);

  const nextPage = () => {
    if (coinsData?.pagination.nextPage) setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (coinsData?.pagination.previousPage) setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h1 className="text-2xl">Cryptocurrency prices and signals</h1>
      <div className="max-w-[1000px] w-full overflow-hidden rounded-lg shadow-xs mx-auto mt-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-5 text-xs font-semibold tracking-wide text-center text-gray-500 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3 col-span-2">All coins</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Market cap</th>
                <th className="px-4 py-3">24h</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {
                // show crypto data

                coinsData?.coins.map((coin) => (
                  <tr
                    key={coin.uuid}
                    className="grid grid-cols-5 text-center text-gray-700 dark:text-gray-400">
                    <td className="px-4 py-3 col-span-2 items-center">
                      <div className="grid grid-cols-3 items-center text-sm">
                        <div className="relative col-span-1 w-8 mr-3 rounded-full block">
                          <Image
                            className="object-cover w-full h-full rounded-full"
                            src={coin.iconUrl}
                            alt=""
                            width={32}
                            height={32}
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"></div>
                        </div>
                        <div className="col-span-2 text-left">
                          <p className="font-semibold">{coin.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {coin.symbol}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      $ {parseFloat(Number(coin.price).toFixed(2))}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      ${" "}
                      {millify(Number(coin.marketCap), {
                        precision: 2,
                        space: true,
                      })}
                    </td>
                    <td
                      className={`${
                        Number(coin.change) > 0
                          ? "text-[#07ef74]"
                          : "text-[#ff314a]"
                      } px-4 py-3 text-sm font-semibold tracking-widest`}>
                      {coin.change}%
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            {`Showing ${cPage === 1 ? 1 : cLimit + 1}-${
              cPage === 1 ? cLimit : cLimit * cPage!
            } of ${coinsData?.stats.total}`}
          </span>
          <span className="col-span-2"></span>
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex space-x-10 items-center">
                <li>
                  <button
                    onClick={previousPage}
                    disabled={!coinsData?.pagination.previousPage}
                    className="px-3 py-2 rounded-md bg-gray-300"
                    aria-label="Previous">
                    <GrFormPrevious />
                  </button>
                </li>
                <li className="px-4 py-2 cursor-pointer text-black transition-colors duration-150 bg-[#A4F08F] rounded-md ">{`Page ${coinsData?.pagination.page}`}</li>
                <li>
                  <button
                    onClick={nextPage}
                    disabled={!coinsData?.pagination.nextPage}
                    className="px-3 py-2 rounded-md bg-gray-300"
                    aria-label="Next">
                    <GrFormNext />
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Coins;

Coins.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
