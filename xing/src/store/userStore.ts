import { makeAutoObservable } from "mobx";

const UserInfoKey = "UserInfoKey";
const AccountKey = "AccountKey";

class UserInfo {
  userName: string = "";
  userAge: number = 0;
}

class AccountInfo {
  account?: string;
  area?: string;
}

class UserStoreManager {
  loginState = false;
  userInfo: UserInfo = new UserInfo();
  accountInfo: AccountInfo = new AccountInfo();
  constructor() {
    makeAutoObservable(this);
    this.loadUserInfo();
    this.loadAccount();
  }
  loadAccount() {
    const accountJsonString = localStorage.getItem(AccountKey);
    if (accountJsonString) {
      this.loginState = true;
      this.accountInfo = JSON.parse(accountJsonString) as AccountInfo;
    }
  }
  loadUserInfo() {
    const userJsonString = localStorage.getItem(UserInfoKey);
    if (userJsonString) {
      this.loginState = true;
      this.userInfo = JSON.parse(userJsonString) as UserInfo;
    }
  }
  saveAccount(account: AccountInfo) {
    this.accountInfo = account;
    localStorage.setItem(AccountKey, JSON.stringify(account));
  }
  saveUserInfo(userInfo: UserInfo) {
    this.loginState = true;
    this.userInfo = userInfo;
    localStorage.setItem(UserInfoKey, JSON.stringify(userInfo));
  }
  clearUserInof() {
    this.loginState = false;
    this.userInfo = new UserInfo();
    localStorage.clear();
  }
}
export const UserStore = new UserStoreManager();
