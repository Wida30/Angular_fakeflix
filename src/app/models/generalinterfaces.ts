

export interface navigatorInterface {
    img: imageInterface,
    links: linkInterface[],
}

export interface imageInterface {
    src: string,
    alt: string,
}

export interface linkInterface {
    text: string,
    link: string,
}

export interface entertainmentInterface {
    title:string,
    img:imageInterface[],
}

export interface toptInterface {
    title:string
    number:number[],
    img:imageInterface[],
}

export interface imagenmasnuero {
    number: number,
    src: string,
    alt: string,
}

export interface toptInterfaceDos {
    title:string,
    img: imagenmasnuero[],
}