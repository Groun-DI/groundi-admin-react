
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



export const CreateStudioInputData = {
    studioName: {
        name: "studioName",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    content: {
        name: "content",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    basicOccupancy: {
        name: "basicOccupancy",
        type: "number",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "[0-9]{1,3}$",
        required: true
    },
    maximumOccupancy: {
        name: "maximumOccupancy",
        type: "number",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "[0-9]{3}",
        required: true
    },
    overCharge: {
        name: "overCharge",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    lowestPrice: {
        name: "lowestPrice",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    highestPrice: {
        name: "highestPrice",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    precaution: {
        name: "precaution",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    amenities: {
        name: "amenities",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    precautions: {
        name: "precautions",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    },
    complimentaries: {
        name: "complimentaries",
        type: "text",
        placeholder: "",
        errorMessage: "",
        label: "",
        pattern: "",
        required: true
    }
}
