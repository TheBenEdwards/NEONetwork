import Cookies from 'js-cookie'  
import { HTTP } from '../http'
import {
    CREATE_ACCOUNT,
    LOGIN_ACCOUNT,
    GET_ACCOUNT_CONFIG,
    LOGIN_ACCOUNT_TOKEN
} from '../endpoints'

export const CreateAccount = async (DATA) => {
    const Token = Cookies.get("token");
    return HTTP({
        Method: "POST",
        Url: CREATE_ACCOUNT,
        Headers: {
            Authorization: `Bearer ${Token}`
        },
        Data: DATA
    })
};

export const LoginAccount = async (DATA) => {
    const Token = Cookies.get("token");
    return HTTP({
        Method: "POST",
        Url: LOGIN_ACCOUNT,
        Headers: {
            Authorization: `Bearer ${Token}`
        },
        Data: DATA
    })
};

export const GetAccountConfig = async (USER_ID) => {
    const Token = Cookies.get("token");
    return HTTP({
        Method: "GET",
        Url: GET_ACCOUNT_CONFIG(USER_ID),
        Headers: {
            Authorization: `Bearer ${Token}`
        },
    })
};

export const LoginAccountToken = async (TOKEN_ID) => {
    const Token = Cookies.get("token");
    return HTTP({
        Method: "GET",
        Url: LOGIN_ACCOUNT_TOKEN(TOKEN_ID),
        Headers: {
            Authorization: `Bearer ${Token}`
        },
    })
};