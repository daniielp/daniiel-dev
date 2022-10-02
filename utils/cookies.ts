export function getCookies() {
    const cookieStrings = document.cookie.split(';');
    const cookies = [];
    const regex = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$');
    for (let i = 0; i < cookieStrings.length; i++) {
        const cookieStr = cookieStrings[i];
        const match = regex.exec(cookieStr);
        if (match === null) continue;
        cookies.push({
            name: match[1],
            value: match[2],
        });
    }
    return cookies;
}

export function getCookie(name: string) {
    const cookies = getCookies();
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].name === name) return cookies[i];
    }
    return null;
}

export function setCookie(name: string, value: string|number, days:number, domain:string, path:string) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
    }
    if (domain !== undefined) {
        expires += '; domain=' + domain;
    }
    if (path !== undefined) {
        expires += '; path=' + path;
    } else {
        expires += '; path=/';
    }
    document.cookie =
        name + '=' + (value || '') + expires + '; SameSite=Lax';
}

export function deleteCookie(name: string, path: string, domain: string) {
    let str = name + '=; Max-Age=-99999999;';
    // try to delete the cookie without any path and domain
    document.cookie = str;
    str += ' path=' + (path || '/') + ';';
    // try to delete the cookie with path
    document.cookie = str;
    if (domain !== undefined) {
        str += ' domain=' + domain + ';';
        // try to delete the cookie with domain and path
        document.cookie = str;
    }
}