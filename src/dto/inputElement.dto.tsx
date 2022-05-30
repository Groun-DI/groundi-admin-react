import InputValidationCodeDTO from "./validation.dto"

type inputElementDTO = {
    label: string
    name: string
    type: string
    required: boolean
    filter: <T>(value: T) => InputValidationCodeDTO;
}

export default inputElementDTO