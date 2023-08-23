export interface ICredentials {
  email: string;
  password: string;
}

export interface IStepStore {
  walletName: string;
  id: string;
  password: string;
}

export interface IWalletResponse {
  walletName: string;
  id: string;
  password: string;
  _id: string;
}

export interface IStepStoreProps {
  stepStore: IStepStore;
  setStepStore: (stepStore: IStepStore) => void;
}
