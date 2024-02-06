

export const get_site_infos = () => {
    return {
        site_name: "ProShop",
    };
};
export const get_currency = () => {
    return '$';
};

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}