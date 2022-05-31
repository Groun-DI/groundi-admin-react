export type NgsResAddressBody = {
    roadAddr: string;
    jibunAddress: string;
    distance: number;
    addressElements: Array<NgsAddressElement>;
}

export type NgsAddressElement = {
    longName: string;
    shortName: string;
    code: string;
}


export type AddressDto = {
    address: string,
    detail_address: string,
    latitude: string,
    longitude: string
}
