import { InputElement } from "./inputs.utils";

export const name = new InputElement<string>({
    name: "name",
    type: "text",
    placeholder: "운영중인 센터명을 입력해주세요",
    label: "업체명을 입력해주세요.",
    required: true,
    errorMessage: "",
    invalid: false
});
export const areaNumber = new InputElement<string>({
    name: "areaNumber",
    type: "string",
    placeholder: "- 없이 입력",
    label: "대표 전화번호를 입력해주세요",
    required: true,
    errorMessage: "",
    invalid: false
});
export const phoneNumber = new InputElement<string>({
    name: "phoneNumber",
    type: "string",
    placeholder: "- 없이 입력",
    label: "",
    required: true,
    errorMessage: "",
    invalid: false
});

export const address = new InputElement<string>({
    name: "address",
    type: "text",
    placeholder: "주소를 입력해주세요",
    label: "",
    required: true,
    errorMessage: "",
    invalid: false
});

export const detailAddress = new InputElement<string>({
    name: "detailAddress",
    type: "text",
    placeholder: "건물명, 층, 호수 등 상세 주소를 입력해주세요.",
    label: "",
    required: true,
    errorMessage: "",
    invalid: true
})
export const busniessLicenseFile = new InputElement<File>({
    name: "busniessLicenseFile",
    type: "text",
    placeholder: "등록된 서류",
    label: "사업자 파일 업로드",
    required: true,
    errorMessage: "",
    invalid: false
});
export const busniessLicenseNumber = new InputElement<number>({
    name: "busniessLicenseNumber",
    type: "number",
    placeholder: "- 없이 입력",
    label: "사업자 번호를 입력해주세요.",
    required: true,
    errorMessage: "",
    invalid: false
});