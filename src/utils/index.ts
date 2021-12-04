import { IProduct } from "@/types"

export const convertToCurrency = (value: number) => {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export const getDiscountPrice = (discount: number, price: number) => {
    const result = price - ((price * discount) /100);

    return convertToCurrency(result);
}