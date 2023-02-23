import { request, DOMAIN } from "@/utils";

const API_MAP = Object.freeze({
  LoginByName: DOMAIN.SYS + "/v1/login/pwd",
  UserInfo: DOMAIN.SYS + "/v1/user",
  VerifyCode: DOMAIN.SYS + "/v1/captcha",
});

// 用户名登陆
export const loginByName = (data) => {
  return request.POST(API_MAP.LoginByName, data);
};

// 获取用户信息，无权限
export const getUserInfo = (data) => {
  return request.GET(API_MAP.UserInfo, data);
};

export const getVerifyCode = () => {
  return request.GET(API_MAP.VerifyCode, {});
};
