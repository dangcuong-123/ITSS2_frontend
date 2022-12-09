import { createContext, useContext } from "react";
import { action, observable, makeObservable, computed } from "mobx";

class AccountStore {
  AccountInfo = {
    email: "",
    accountname: "demo",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
  };

  isAuthenticated = true;

  constructor() {
    makeObservable(this, {
      AccountInfo: observable,
      updateAccountInfo: action,
      account: computed,
    });
  }

  updateAccountInfo(accountInfo) {
    this.AccountInfo = accountInfo;
  }

  get account() {
    return this.AccountInfo;
  }

  setIsAuthenticated(isAuthenticated) {
    this.isAuthenticated = isAuthenticated;
  }
}

const accountStore = new AccountStore();
export default accountStore;

const StoreContext = createContext();

export const AccountProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const AccountUseContext = () => useContext(StoreContext);
