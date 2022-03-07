
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

export class CreateStudioValue {
    centerId: string = '';
    name: string = '';
    content: string = '';
    basicOccupancy: string = '';
    maximumOccupancy: string;
    overCharge: string = '';
    lowestPrice: string = '';
    highestPrice: string = '';
    precaution: string = '';
    amenities: [];
    precautions: [];
    complimentaries: [];
}



