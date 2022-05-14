import { createContext, useContext, useState } from "react";
import { StudioCreate } from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";
import { useCallback } from "react";
import client from "services/axios";

let CenterId: number | null = null;

interface Value {
    formValues: StudioCreate,
    inputElements: typeof InputElementsUtils.studioCreate,
    SetFormValue: (name: string, value: string | string[]) => any,
    Submit: () => Promise<any>,
}

const defaultValue: Value = {
    formValues: new StudioCreate(),
    inputElements: InputElementsUtils.studioCreate,
    SetFormValue: (name: string, value: string | string[]) => { },
    Submit: () => { return Promise.resolve('LoginOut') }
}

export const createStudioContext = createContext<Value>(defaultValue);

export const useStudioCreateContext = (centerId: number): Value => {
    CenterId = centerId;
    return useContext(createStudioContext);
}

export const CreateStduioProvider = (props: { children: React.ReactNode }) => {
    const inputElements = InputElementsUtils.studioCreate;
    const [formValues, setFormValues] = useState(new StudioCreate());

    const SetFormValue = useCallback((name: string, value: string | string[]) => {
        setFormValues(oldArray => ({ ...oldArray, [name]: value }));
    }, []);

    const Submit = async () => {
        if (!CenterId) {
            const res = await client.post(process.env.REACT_APP_API_URL + `centers/${CenterId}/studios`, formValues);
            return res.data;
        }
    }

    const value = { formValues, inputElements, SetFormValue, Submit };
    return <createStudioContext.Provider value={value} {...props} />
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { CreateStduioProvider, useStudioCreateContext, createStudioContext };