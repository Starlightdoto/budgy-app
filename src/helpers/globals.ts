const enum currencies {
    USD = '$',
    EUR = '€',
    RUB = '₽',
    KZT = '₸',
}

export const getCurrencyKey = (value:string) => {
    //@ts-ignore
    return Object.keys(currencies).find(key => currencies[key] === value);
}

export default currencies;