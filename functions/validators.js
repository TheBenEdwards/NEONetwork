export const ValidateLogin = (DATA) => {
    let valid = true;
    let errors = [];
    if (!DATA.username) {
        valid = false;
        errors.push({
            name: "usernameError",
            error: "Username is required."
        })
    }
    if (!DATA.password) {
        valid = false;
        errors.push({
            name: "passwordError",
            error: "Password is required."
        })
    }
    return {
        valid,
        errors
    }
};