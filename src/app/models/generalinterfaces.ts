
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
