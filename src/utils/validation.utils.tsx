import { InputElement } from "./inputs.utils";

type Error = {
    message: string;
    invalid: boolean;
}

class ValidationUtils {
    static isRequired<T>(value: T): Error {
        let code: Error = { message: '', invalid: true };

        if (typeof value === "number") {
            if (value < 0) {
                code.message = '필수 입력 값입니다.';
                code.invalid = false;
            } else {
                code.message = ''
                code.invalid = true;
            }
        } else if (typeof value === "string") {
            console.log(value);
            if (value.length < 1) {
                code.message = '필수 입력 값입니다.';
                code.invalid = false;
            } else {
                code.message = '';
                code.invalid = true;
            }
        }
        console.log(code);
        return code;
    }

    static isStringOfDigits<T>(value: T): Error {
        let code: Error = { message: '', invalid: true };
        // const valueLength: number = (typeof value === 'string' ? value.length : value);
        // if (valueLength <= 0) {
        //     this.error.message = '필수 입력 값입니다.';
        //     this.error.invalid = false;
        // } else if (valueLength >= maxLength) {
        //     this.error.message = '설정값보다 큼니다';
        //     this.error.invalid = false;
        //     // this.error.value = this.error.value.substr(0, maxLength);
        // } else {
        //     this.error.message = '';
        //     this.error.invalid = true;
        // }
        return code;
    }

    static isNumberOfDigits<T>(value: T): Error {
        let code: Error = { message: '', invalid: true };
        // if (value <= minLength) {
        //     this.error.message = '필수 입력 값입니다.';
        //     this.error.invalid = false;

        // } else if (value >= maxLength) {
        //     this.error.message = '설정값보다 큼니다.';
        //     this.error.invalid = false;
        // } else {
        //     this.error.message = '';
        //     this.error.invalid = true;
        // }
        return code;
    }

    static isBussniessCode<T>(value: T): Error {
        let code: Error = { message: '', invalid: true };
        // const maxLength = 10;
        // if (value.length < maxLength) {
        //     this.error.message = '사업자 등록번호는 필수 입력값으로 10자리 입니다';
        //     this.error.invalid = false;
        //     console.log(value);
        // } else if (value.length > maxLength) {
        //     this.error.message = '';
        //     this.error.invalid = false;
        //     // this.error.value = this.error.value.substr(0, maxLength);
        // } else {
        //     this.error.message = '';
        //     this.error.invalid = true;
        // }
        return code;
    }
}

export default ValidationUtils;