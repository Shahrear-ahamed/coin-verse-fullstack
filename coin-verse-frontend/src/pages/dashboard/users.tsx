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
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-4 text-xs font-semibold tracking-wide text-center text-gray-500 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">User Id</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {
                // show user data
                users &&
                  users?.map((user) => (
                    <tr
                      key={user?.userId}
                      className="grid grid-cols-4 text-center text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">
                          {user?.userId}
                        </p>
                      </td>
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">{user?.email}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        <p className="text-center font-medium ">
                          {user?.password}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-sm text-center">
                        <p className="text-center font-medium ">{user?.role}</p>
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
