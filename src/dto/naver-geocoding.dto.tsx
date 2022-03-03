export type NgsResAddressBody = {
    roadAddress: string;
    jibunAddress: string;
    englishAddress: string;
    x: string;
    y: string;
    distance: number;
    addressElements: Array<NgsAddressElement>;
}

export type NgsAddressElement = {
    longName: string;
    shortName: string;
    code: string;
}

