import Router from 'next/router';
import Cookies from 'js-cookie';
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
import { LoginAccount, GetAccountConfig, LoginAccountToken } from './http-functions/account'

export const UniversalLogin = (DATA) => {
    // TODO once API is done

    // const User = LoginAccount(DATA);
    const User = { userName: DATA.username, id: 1, token: uuidv4(), expiry: 7200};

    // if (User.id) {
    if (User.userName === 'TheBenEdwards' && DATA.password === 'password1234') {
        const Expiry = moment(new Date()).add(User.expiry, 's').toDate();
        Cookies.remove('PortalCookie');
        Cookies.set('PortalCookie', User.token, { expires: Expiry });
        // GetAccountConfig(User.id)
        // .then((res) => {
            // this.props.setTheme(CreateTheme(res.data.configStrings))
            Router.push("/portal");
        // })
        // .catch((err) => {
            // console.log(err)
        // })
    } else {
        console.log('No Account Found')
    }
}

export const UniversalLogout = () => {
    Cookies.remove('PortalCookie');
    Router.push("/logout");
}

export const LoginFromToken = (TOKEN) => {
    // TODO once API is done

    // const User = LoginAccountToken(TOKEN);

    // if (User) {
    //     // GetAccountConfig(User.id)
    //     // .then((res) => {
    //         // this.props.setTheme(CreateTheme(res.data.configStrings))
    //         Router.push("/portal");
    //     // })
    //     // .catch((err) => {
    //         // console.log(err)
    //     // })
    // } else {
    //     console.log('No Account Found')
    // }
}