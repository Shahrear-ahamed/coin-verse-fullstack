export const changeProfile = async (data: any) => {
  const response = await fetch(`${process.env.url}/user/update-profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const changePassword = async (data: any) => {
  const response = await fetch(`${process.env.url}/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const allCoins = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => {
  const res = await fetch(
    `${process.env.url}/crypto/crypto-coins?limit=${limit}&page=${page}`,
    {
      credentials: "include",
    }
  );
  return await res.json();
};

export const getAllUsers = async () => {
  const res = await fetch(`${process.env.url}/admin/all-users`, {
    credentials: "include",
  });
  return await res.json();
};
