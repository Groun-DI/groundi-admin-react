
export type CreateStudioDto = {
    centerId: number;
    name: string;
    content: string;
    basicOccupancy: number;
    maximumOccupancy: number;
    overCharge: number;
    lowestPrice: number;
    highestPrice: number;
    precaution: string;
    amenities: [];
    precautions: [];
    complimentaries: [];
}
