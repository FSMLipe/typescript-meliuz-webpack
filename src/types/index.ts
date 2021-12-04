export interface IProduct{
    id: number;
    name: string;
    price: number;
    plataform: string;
    image: string;
    offer: boolean;
    category: number[];
    description: string;
    discount: number;
}

export interface ILinkTab{
    label?: string;
    href: string;
}

export interface ILoadComponent{
    show: Boolean;
}

export interface ICardComponent {
    textTitle: string;
    img: string;
    altText: string;
    handleAction: (value: IProduct) => void;
    descriptionText: string;
    priceText: number;
    itemDefault: IProduct;
    handleDetails: (value: number) => void;
}

export interface IUserData{
    name?: string
    email?: string
}