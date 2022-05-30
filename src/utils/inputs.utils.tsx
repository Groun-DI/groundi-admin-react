import ValidationUtils from "./validation.utils";

class InputElementsUtils {
    static centerCreate = {
        centerName: {
            label: "업체명 입력",
            name: "name",
            type: "text",
            value: '',
            errorMessage: "",
            required: true,
            invalid: false,
            filter: ValidationUtils.isRequired
        },
        phoneNumber: {
            name: "phoneNumber",
            value: undefined,
            type: "number",
            placeholder: "- 없이 입력",
            label: "",
            required: true,
            errorMessage: "",
            invalid: false
        },
        address: {
            name: "address",
            type: "text",
            placeholder: "주소를 입력해주세요",
            label: "",
            required: true,
            errorMessage: "",
            invalid: false
        },
        detailAddress: {
            name: "detailAddress",
            type: "text",
            placeholder: "건물명, 층, 호수 등 상세 주소를 입력해주세요.",
            label: "",
            errorMessage: "",
            invalid: true
        },
        businessAttachment: {
            name: "businessAttachment",
            type: "text",
            placeholder: "등록된 서류",
            label: "사업자 파일 업로드",
            required: true,
            errorMessage: "",
            invalid: false
        },
        busniessLicenseNumber: {
            name: "busniessLicenseNumber",
            type: "number",
            placeholder: "- 없이 입력",
            label: "사업자 번호를 입력해주세요.",
            required: true,
            errorMessage: "",
            invalid: false
        }
    };

    static studioCreate = {
        studioName: {
            name: "name",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        content: {
            name: "content",
            type: "textarea",
            placeholder: "\"자신에 대한 간략한 소개면 좋아요!\"\n*무엇을 중요하게 생각해요. 무엇을 나누고 싶어요.",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        basicOccupancy: {
            name: "basicOccupancy",
            type: "number",
            placeholder: "2",
            errorMessage: "",
            label: "기준인원",
            invalid: false,
            required: true
        },
        maximumOccupancy: {
            name: "maximumOccupancy",
            type: "number",
            placeholder: "4",
            errorMessage: "",
            label: "최대인원",
            invalid: false,
            required: true
        },
        overCharge: {
            name: "overCharge",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        lowestPrice: {
            name: "lowestPrice",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        highestPrice: {
            name: "highestPrice",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        precautionContent: {
            name: "precautionContent",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        amenities: {
            name: "amenities",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        precautions: {
            name: "precautions",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        complimentaries: {
            name: "complimentaries",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingIsAvailable: {
            name: "parkingIsAvailable",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingPaymentType: {
            name: "parkingPaymentType",
            type: "radio",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingFirstHour: {
            name: "parkingFirstHour",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: true,
            required: true
        },
        parkingFirstMinute: {
            name: "parkingFirstMinute",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: true,
            required: true
        },
        parkingFirstPayment: {
            name: "parkingFirstPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingAdditionHour: {
            name: "parkingAdditionHour",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: true,
            required: true
        },
        parkingAdditionMinute: {
            name: "parkingAdditionMinute",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: true,
            required: true
        },
        parkingAdditionPayment: {
            name: "parkingAdditionPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingAllDayPayment: {
            name: "parkingAllDayPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        parkingOneTimePayment: {
            name: "parkingOneTimePayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "1회 주차시",
            invalid: false,
            required: true
        },
        parkingContent: {
            name: "parkingContent",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        refundCode: {
            name: "refundCode",
            type: "radio",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
    }

    static centerParkingLotCreate = {
        isAvailable: {
            name: "isAvailable",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        paymentType: {
            name: "paymentType",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        firstHour: {
            name: "firstHour",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        firstMinute: {
            name: "firstMinute",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        firstPayment: {
            name: "firstPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        additionHour: {
            name: "additionHour",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        additionMinute: {
            name: "additionMinute",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        additionPayment: {
            name: "additionPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        allDayPayment: {
            name: "allDayPayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        oneTimePayment: {
            name: "oneTimePayment",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
        content: {
            name: "content",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "",
            invalid: false,
            required: true
        },
    }

    static studioBreakTimeCreate = {
        date: {
            name: "date",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "선택날짜",
            invalid: false,
            required: true
        },
        endTime: {
            name: "endTime",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "대여 금지 시간",
            invalid: false,
            required: true
        },
        startTime: {
            name: "startTime",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "대여 금지 시간",
            invalid: false,
            required: true
        },
        reason: {
            name: "reason",
            type: "text",
            placeholder: "",
            errorMessage: "",
            label: "사유",
            invalid: false,
            required: true
        }
    }
}

export default InputElementsUtils;

type Error = {
    message: string;
    invalid: boolean;
}

type InputElementDTO = {
    label: string
    name: string
    type: string
    errorMessage: string
    invalid: boolean
    required: boolean
    filter: <T>(value: T) => Error;
}

export class InputElement<T> {
    label: string
    name: string
    type: string
    invalid: boolean
    required: boolean
    filter: <T>(value: T) => Error;
    private value: T;
    private errorMessage: string;

    constructor(elements: InputElementDTO) {
        this.label = elements.label
        this.name = elements.name
        this.type = elements.type
        this.errorMessage = elements.errorMessage
        this.invalid = elements.invalid
        this.required = elements.required
        this.filter = elements.filter
    }

    setValue(value: T) {
        this.value = value;
    }

    getValue(): T {
        console.log(this.value);
        return this.value;
    }
    isValue(): boolean {
        if (this.value) return true;
        return false;
    }

    setError(messgae: string) {
        this.errorMessage = messgae
    }

    getError(): string {
        console.log(this.errorMessage);
        return this.errorMessage
    }
}