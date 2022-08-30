import ValidationUtils from "./validation.utils";
import InputElementDTO from "../dto/inputElement.dto";

const CenterCreateInputElements = {
    name: {
        name: "name",
        type: "text",
        label: "센터명 입력",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,
    areaNumber: {
        name: "areaNumber",
        type: "string",
        label: "전화번호 - 없이 입력",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,
    phoneNumber: {
        name: "phoneNumber",
        type: "string",
        label: "전화번호 - 없이 입력",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,

    address: {
        name: "address",
        type: "text",
        label: "센터주소 입력",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,

    detailAddress: {
        name: "detailAddress",
        type: "text",
        label: "건물명, 층, 호수 등 상세 주소 입력.",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,

    busniessLicenseFile: {
        name: "busniessLicenseFile",
        type: "text",
        label: "사업자 파일 업로드",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO,

    busniessLicenseNumber: {
        name: "busniessLicenseNumber",
        type: "number",
        label: "사업자 번호 - 없이 입력",
        required: true,
        filter: ValidationUtils.isRequired
    } as InputElementDTO
}

export default CenterCreateInputElements;