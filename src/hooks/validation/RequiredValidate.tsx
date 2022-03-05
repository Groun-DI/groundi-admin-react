type Error = {
    errorMessage: string;
    invalid: boolean;
}

const RequiredValidate = (value: string | number | []) => {
    const error: Error = { errorMessage: '', invalid: false };
    if (value === "") {
        error.errorMessage = '필수 입력 값입니다.';
        error.invalid = false;
    }

    return error;
}

export default RequiredValidate;