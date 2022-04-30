import { StudioBreakTimeService } from "api/StudioBreakTime.service";
import BoxInput from "components/input/BoxInput";
import { useState } from "react";
import FormValuesUtils from "utils/formValue.utils";
import InputElementsUtils from "utils/inputs.utils";

const CalendarSettings = () => {
    const inputElment = InputElementsUtils.studioBreakTimeCreate;
    const [formValue, setFormValue] = useState(FormValuesUtils.studioBreakTimeCreate);
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const hanldeOnSubmit = async () => {
        // const res = await StudioBreakTimeService.create({
        //     studioId: Number(studioId),
        //     date: formValue.date,
        //     time: formValue.startTime,
        //     reason: formValue.reason
        // });

        // console.log(res);
    };

    return (
        <div>
            <BoxInput onChange={handleOnChange} {...inputElment.date} value={formValue.week} />
            <BoxInput onChange={handleOnChange} {...inputElment.startTime} value={formValue.startTime} />
            <BoxInput onChange={handleOnChange} {...inputElment.endTime} value={formValue.endTime} />
            <BoxInput onChange={handleOnChange} {...inputElment.reason} value={formValue.reason} />
            <button onClick={hanldeOnSubmit}>저장하기</button>
        </div>
    )
}

export default CalendarSettings;