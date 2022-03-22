type Error = {
    value: string,
    errorMessage: string;
    invalid: boolean;
}

class ValidationUtils {
    private static error: Error = { errorMessage: '', invalid: true, value: '' };

    static isRequired(value: string): Error {
        this.error.value = value;

        if (value === "") {
            this.error.errorMessage = '필수 입력 값입니다.';
            this.error.invalid = false;
        } else {
            this.error.errorMessage = '';
            this.error.invalid = true;
        }
        return this.error;
    }

    static isNumberOfDigits(value: string, maxLength: number): Error {
        const valueLength: number = (typeof value === 'string' ? value.length : value);
        console.log(valueLength);
        if (valueLength < 0) {
            this.error.errorMessage = '필수 입력 값입니다.';
            this.error.invalid = false;
            this.error.value = value;
        } else if (valueLength > maxLength) {
            this.error.errorMessage = '설정값보다 큼니다';
            this.error.invalid = false;
            this.error.value = this.error.value.substr(0, maxLength);
        } else {
            this.error.errorMessage = '';
            this.error.invalid = true;
            this.error.value = value;
        }
        return this.error;
    }

    static isBussniessCode(value: string):Error{
        const maxLength = 10;

        if(value.length < maxLength){
            this.error.errorMessage = '사업자 등록번호는 필수 입력값으로 10자리 입니다';
            this.error.invalid = false;
            this.error.value = value;
            console.log(value);
        }else if (value.length > maxLength) {
            this.error.errorMessage = '';
            this.error.invalid = false;
            this.error.value = this.error.value.substr(0, maxLength);
        } else {
            this.error.errorMessage = '';
            this.error.invalid = true;
            this.error.value = value;
        }
        
        return this.error;
    }
}

export default ValidationUtils;