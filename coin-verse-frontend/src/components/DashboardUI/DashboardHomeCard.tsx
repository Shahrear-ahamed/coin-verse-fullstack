export default function DashboardHomeCard({ balance }: { balance: number }) {
  return (
    <div className="bg-[#A4F08F] rounded-md px-3 py-5 h-[120px] ld:h-[180px] cursor-pointer flex text-2xl justify-center items-center font-semibold hover:shadow-lg hover:shadow-[#405e387c] duration-300">
      <p className="text-gray-800">Balance - ${balance}</p>
    </div>
  );
}
