export const setUserLS = (login, token) => {
    localStorage.setItem(`user`, login);
    localStorage.setItem(`token`, token);
}

export const getUserLS = () => {
    if (localStorage["token"] && localStorage["token"] !== "null") {
        debugger
        return ({            
            login: localStorage.getItem(`user`),
            token: localStorage.getItem(`token`),
            isAuth: true
        })
    } else {
        return ({
            login: null,
            token: null,
            isAuth: false
        })
    }
}

export const deleteUserLS = () => {
    localStorage.setItem(`user`, null);
    localStorage.setItem(`token`, null);
}
 
export const setFavoriteListLS = (login, token) => {
    localStorage.setItem(`${login}-user`, token)
}