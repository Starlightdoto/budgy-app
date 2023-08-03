import currencies from "./globals";
import React from "react";
import axios from "axios";

export const API_KEY = 'be481d13a9-0b5af3fce8-rysnow';

async function fetchRates(from: string, to: string) {
    const url = `https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        return response.data.result[to];
    } catch(e) {
        console.log(e);
    }
}

export const convert = async (curCurrency : string, budget: number, setBudget: React.Dispatch<React.SetStateAction<number>>) => {

    let rate;

    switch(curCurrency) {
        case '$':
            //@ts-ignore
            rate =  await fetchRates('USD', 'EUR');
            setBudget(Number((budget * rate).toFixed(2)));
            return currencies.EUR;
        case '€':
            rate =  await fetchRates('EUR', 'RUB');
            setBudget(Number((budget * rate).toFixed(2)));
            return currencies.RUB;
        case '₽':
            rate =  await fetchRates('RUB', 'KZT');
            setBudget(Number((budget * rate).toFixed(2)));
            return currencies.KZT;
        case '₸':
            rate =  await fetchRates('KZT', 'USD');
            setBudget(Number((budget * 0.0022).toFixed(2)));
            return currencies.USD;
    }
}