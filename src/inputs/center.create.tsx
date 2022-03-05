
export const CenterCreateInput = {
    centerName: {
        name: "name",
        type: "text",
        placeholder: "운영중인 센터명을 입력해주세요",
        label: "업체명을 입력해주세요.",
        required: true,
        errorMessage : "",
        invalid: false
    },
    phoneNumber: {
        name: "phoneNumber",
        type: "number",
        placeholder: "- 없이 입력",
        label: "전화번호를 입력해주세요.",
        required: true,
        errorMessage : "",
        invalid: false
    },
    address: {
        name: "address",
        type: "text",
        placeholder: "주소를 입력해주세요",
        label: "",
        required: true,
        errorMessage : "",
        invalid: false
    },
    detailAddress: {
        name: "detailAddress",
        type: "text",
        placeholder: "건물명, 층, 호수 등 상세 주소를 입력해주세요.",
        label: "",
        errorMessage : "",
        invalid: false
    }
}