

export const get_site_infos = () => {
    return {
        site_name: "ProShop",
    };
};
export const render_currency = () => {
    if(true) return '$';
    return 'DH';
};
export const get_currency = () => {
    return 'usd';
};

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}