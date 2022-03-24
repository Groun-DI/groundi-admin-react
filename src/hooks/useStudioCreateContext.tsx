import { createContext, useContext, useState } from "react";
import FormValuesUtils from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";
import { useCallback } from "react";
import client from "services/axios";

interface Value {
    formValues: typeof FormValuesUtils.studioCreate,
    inputElements: typeof InputElementsUtils.studioCreate,
    SetFormValue: (name: string, value: string | string[]) => any,
    Submit: () => Promise<any>,
}

const defaultValue: Value = {
    formValues: FormValuesUtils.studioCreate,
    inputElements: InputElementsUtils.studioCreate,
    SetFormValue: (name: string, value: string | string[]) => { },
    Submit: () => { return Promise.resolve('LoginOut') }
}

export const createStudioContext = createContext<Value>(defaultValue);

export const useStudioCreateContext = (): Value => {
    return useContext(createStudioContext);
}

export const CreateStduioProvider = (props: { children: React.ReactNode }) => {
    const inputElements = InputElementsUtils.studioCreate;
    const [formValues, setFormValues] = useState(FormValuesUtils.studioCreate);

    const SetFormValue = useCallback((name: string, value: string | string[]) => {
        setFormValues(oldArray => ({ ...oldArray, [name]: value }));
    }, []);

    const Submit = async () => {
        console.log(formValues);
        const res = await client.post(process.env.REACT_APP_API_URL + 'studio/create', { 
            ...formValues, 
            centerId: Number(formValues.centerId),
            basicOccupancy: Number(formValues.basicOccupancy),
            maximumOccupancy: Number(formValues.maximumOccupancy),
            overCharge:Number(formValues.overCharge),
            lowestPrice:Number(formValues.lowestPrice),
            highestPrice:Number(formValues.highestPrice),
            parkingFirstPayment:Number(formValues.parkingFirstPayment),
            parkingAdditionPayment:Number(formValues.parkingAdditionPayment),
            parkingAllDayPayment:Number(formValues.parkingAllDayPayment),
            parkingOneTimePayment:Number(formValues.parkingOneTimePayment),
            parkingIsAvailable: (formValues.parkingIsAvailable === "true") });
        return res.data;
    }

    const value = { formValues, inputElements, SetFormValue, Submit };
    return <createStudioContext.Provider value={value} {...props} />
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { CreateStduioProvider, useStudioCreateContext, createStudioContext };