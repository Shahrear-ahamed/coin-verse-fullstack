/* eslint-disable @next/next/no-img-element */
import { CoinsData } from "@/pages";
import { useRouter } from "next/router";

export default function HomeCryptoCoins({
  coinsData,
}: {
  coinsData: CoinsData;
}) {
  const router = useRouter();
  const coins = coinsData.data;

  const handleRedirect = () => {
    router.push("/dashboard/coins");
  };

  return (
    coinsData.status && (
      <section className="relative max-w-screen-md w-[90%] mx-auto pb-10 px-2 overflow-x-auto">
        <button
          onClick={handleRedirect}
          className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-gray-300 hover:text-gray-200 duration-300">
          See more
        </button>
        <table className="min-w-full rounded-md coins_mask">
          <tbody className="bg-[#4E8397] divide-y divide-[#65a9c2]">
            {coins.map((coin) => (
              <tr key={coin.uuid} className="rounded-md h-16 font-semibold">
                <td className="px-6 w-20 py-4">
                  <img
                    src={coin.iconUrl}
                    alt={`${coin.name} Icon`}
                    width={26}
                    height={26}
                  />
                </td>
                <td className="px-4 py-4">
                  <span className="text-gray-700">{coin.name}</span>
                  <span className="rounded-[4px] font-normal text-gray-600 text-sm px-2 py-1 bg-slate-200 ml-2">
                    {coin.symbol}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-700">
                  ${parseFloat(coin.price).toFixed(2)}
                </td>
                <td className="px-4 py-4 text-gray-700">
                  ${(parseFloat(coin.marketCap) / 1_000_000_000).toFixed(2)}B
                </td>
                <td
                  className={`${
                    Number(coin.change) > 0 ? "text-green-700" : "text-red-700"
                  } px-4 py-4`}>
                  {coin.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    )
  );
}
