export const ValidateCreateAccount = (DATA) => {
    let valid = true;
    let errors = [];
    if (!DATA.firstname) {
        valid = false;
        errors.push({
            name: "firstnameError",
            error: "First Name is required."
        })
    }
    if (!DATA.lastname) {
        valid = false;
        errors.push({
            name: "lastnameError",
            error: "Last Name is required."
        })
    }
    if (!DATA.dateOfBirth) {
        valid = false;
        errors.push({
            name: "dateOfBirthError",
            error: "Date Of Birth is required."
        })
    }
    if (!DATA.username) {
        valid = false;
        errors.push({
            name: "usernameError",
            error: "Username is required."
        })
    }
    if (!DATA.email) {
        valid = false;
        errors.push({
            name: "emailError",
            error: "Email is required."
        })
    }
    if (!DATA.password) {
        valid = false;
        errors.push({
            name: "passwordError",
            error: "Password is required."
        })
    }
    if (!DATA.passwordConfirm) {
        valid = false;
        errors.push({
            name: "passwordConfirmError",
            error: "Confiremd Password is required."
        })
    }
    return {
        valid,
        errors
    }
};

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