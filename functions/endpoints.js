const BASE_URL = process.env.API_URL;

export const CREATE_ACCOUNT = `${BASE_URL}/Account/CreateAccount`;

export const LOGIN_ACCOUNT = `${BASE_URL}/Account/LoginAccount`;

export const GET_ACCOUNT_CONFIG = (USER_ID) => `${BASE_URL}/Account/GetAccountConfig?id=${USER_ID}`;

export const LOGIN_ACCOUNT_TOKEN = (TOKEN_ID) => `${BASE_URL}/Account/LoginAccountToken?id=${TOKEN_ID}`;