import currencies from "./globals";
import React from "react";
import axios from "axios";

export const API_KEY = '72de75e1b9-6cd1e4c68c-s0g2ks';

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
    let convertedBudget = budget;

    switch(curCurrency) {
        case '$':
            //@ts-ignore
            rate =  await fetchRates('USD', 'EUR');
            convertedBudget = (Number((budget * rate).toFixed(2)));
            return [currencies.EUR, convertedBudget];
        case '€':
            rate =  await fetchRates('EUR', 'RUB');
            convertedBudget = (Number((budget * rate).toFixed(2)));
            return [currencies.RUB, convertedBudget];
        case '₽':
            rate =  await fetchRates('RUB', 'KZT');
            convertedBudget = (Number((budget * rate).toFixed(2)));
            return [currencies.KZT, convertedBudget];
        case '₸':
            rate =  await fetchRates('KZT', 'USD');
            convertedBudget = (Number((budget * rate).toFixed(2)));
            return [currencies.USD, convertedBudget];
    }
}