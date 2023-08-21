export interface ICredentials {
  email: string;
  password: string;
}

export interface IStepStore {
  walletName: string;
  email: string;
  password: string;
}

export interface IStepStoreProps {
  stepStore: IStepStore;
  setStepStore: (stepStore: IStepStore) => void;
}
