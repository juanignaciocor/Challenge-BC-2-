export const isValidName = name => {
    return /^[a-zA-Z\-]+$/.test(name);
};

export const isValidEmail = email => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
        email
    );

};

export const isAlphanumeric = address => {
    return /^[a-z0-9]+$/i.test(address)

}
export const isValidNumber = number => {
    return /^[1-9]\d*$/.test(number)
}