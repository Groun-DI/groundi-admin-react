type Error = {
    errorMessage: string;
    invalid: boolean;
}

class ValidationUtils {
    private static error: Error = { errorMessage: '', invalid: true };

    static isRequired(value: string | number | []): Error {
        if (value === "") {
            this.error.errorMessage = '필수 입력 값입니다.';
            this.error.invalid = false;
        }

        return this.error;
    }
}

export default ValidationUtils;