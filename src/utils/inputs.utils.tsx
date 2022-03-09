
class InputElementsUtils {
    static centerCreate = {
        centerName: {
            name: "name",
            type: "text",
            placeholder: "운영중인 센터명을 입력해주세요",
            label: "업체명을 입력해주세요.",
            required: true,
            errorMessage: "",
            invalid: false
        },
        phoneNumber: {
            name: "phoneNumber",
            type: "number",
            placeholder: "- 없이 입력",
            label: "전화번호를 입력해주세요.",
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
        ceoName: {
            name: "ceoName",
            type: "text",
            placeholder: "홍길동",
            label: "대표자명을 입력해주세요.",
            required: true,
            errorMessage: "",
            invalid: false
        },
        busniessType: {
            name: "busniessType",
            type: "text",
            placeholder: "사업자 등록증에 있는 기입된 업종명을 그대로 입력해주세요.",
            label: "업종을 입력해주세요.",
            required: true,
            errorMessage: "",
            invalid: false
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
        busniessCode: {
            name: "busniessCode",
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
            type: "text",
            placeholder: "",
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
}



export default InputElementsUtils;