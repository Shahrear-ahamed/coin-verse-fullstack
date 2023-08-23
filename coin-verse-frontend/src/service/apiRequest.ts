import { ICredentials, IStepStore } from "@/interface/share";

export const signUp = async (data: ICredentials) => {
  try {
    const res = await fetch(`${process.env.url}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const signIn = async (data: ICredentials) => {
  try {
    console.log(data);
    const res = await fetch(`${process.env.url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    return await res.json();
  } catch (err) {
    return err;
  }
};

export const homePage = async () => {
  try {
    // const res = await fetch(`${process.env.url}/crypto/home`);
    const res = await fetch(`${process.env.CRYPTO_API}?limit=14`, {
      headers: {
        "x-access-token": process.env.CRYPTO_TOKEN!,
      },
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const getProfile = async () => {
  try {
    const response = await fetch(`${process.env.url}/auth/current-user`, {
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    return err;
  }
};

export const changeProfile = async (data: any) => {
  try {
    const response = await fetch(`${process.env.url}/user/update-profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    return err;
  }
};

export const changePassword = async (data: any) => {
  try {
    const response = await fetch(`${process.env.url}/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    return err;
  }
};

export const allCoins = async ({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) => {
  try {
    const res = await fetch(
      `${process.env.url}/crypto/crypto-coins?limit=${limit}&page=${page}`,
      {
        credentials: "include",
      }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.url}/admin/all-users`, {
      credentials: "include",
    });
    return await res.json();
  } catch (err) {
    return err;
  }
};

export const closeModal = async () => {
  try {
    const result = await fetch(`${process.env.url}/auth/close-modal`, {
      method: "POST",
      credentials: "include",
    });

    return await result.json();
  } catch (err) {
    return err;
  }
};

export const logOut = async () => {
  try {
    const response = await fetch(`${process.env.url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await response.json();
  } catch (err) {
    return err;
  }
};

export const addWallet = async (walletData: IStepStore) => {
  try {
    const response = await fetch(`${process.env.url}/wallet/add-wallet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(walletData),
    });

    return await response.json();
  } catch (err) {
    return err;
  }
};
