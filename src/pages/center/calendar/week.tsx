import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router";
import client from "services/axios";
import styled from "styled-components";
import Flex from "components/style/Flex";
import { theme } from "styles/theme";
import CalendarHeader from "containers/CalendarHeader";
import moment from 'moment-timezone';
import Typography from "components/style/Typography";
import { StudioRentalTimeService } from "api/studio-rental-time.service";
import BoxInput from "components/input/BoxInput";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import { SelectDrag } from "components/select-drag";
import { StudioBreakTimeService } from "api/StudioBreakTime.service";
import week from "data/week.json";
import { CalendarProvider } from "hooks/useCalendarContext";
import Calendar from "containers/Calendar";

type SelectDragTime = {
    date: string;
    startTime: string;
    endTime: string;
}

const Page = () => {
    const { centerId, studioId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [breakTimes, setBreakTimes] = useState<any[]>([]);
    const [operatingHours, setOperatingHours] = useState<string[]>([]);
    const navigation = useNavigate();
    const inputElment = InputElementsUtils.studioBreakTimeCreate;
    const [formValue, setFormValue] = useState(FormValuesUtils.studioBreakTimeCreate);
    const [enabel, setenabel] = useState(true);
    const [selectItem, setSelectItem] = useState<SelectDragTime>({ date: '', startTime: '', endTime: '' });


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSetClock = useCallback((openTime: string, closeTime: string) => {
        let hours: string[] = [];
        const openMoment = moment(openTime).tz("Asia/Seoul").utc();
        const closeMoment = moment(closeTime).tz("Asia/Seoul").utc();

        for (let i = openMoment; i <= closeMoment; i.add(30, 'm')) {
            hours.push(i.format(''));
        }

        return hours;

    }, []);

    const hanldeOnSubmit = async () => {
        const res = await StudioBreakTimeService.create({
            studioId: Number(studioId),
            date: formValue.date,
            time: formValue.startTime,
            reason: formValue.reason
        });

        console.log(res);
    };


    const SelectionItem = useCallback((value: string[], date: string) => {
        const startTime = Number(value[0]);
        const endTime = Number(value[value.length - 1]);
        setSelectItem({ date: date, startTime: operatingHours[startTime], endTime: operatingHours[endTime] });
        setFormValue({ ...formValue, date: date, startTime: operatingHours[startTime], endTime: operatingHours[endTime] });
    }, [operatingHours]);

    useEffect(() => {
        const getStudioRentalTime = async () => {
            if (studioId) {
                const { openTime, closeTime } = await StudioRentalTimeService.findOne(studioId);
                setOperatingHours(handleSetClock(openTime, closeTime));
            }
        }

        getStudioRentalTime();
    }, [studioId, handleSetClock]);

    useEffect(() => {
        client.get('studio/' + centerId).then((res) => {
            if (res.data.length === 0) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
        });
    }, [centerId, navigation, pathname]);

    
    return (
        <>
            <CalendarProvider>
                <Container>
                    <ContentMain>
                        <ContentLeft>
                            <CalendarHeader />
                            <CalendarMain>
                                <Calendar studioId={Number(studioId)}/>
                            </CalendarMain>
                        </ContentLeft>
                        <ContentRight>
                            <BoxInput onChange={handleOnChange} {...inputElment.date} value={formValue.date} />
                            <BoxInput onChange={handleOnChange} {...inputElment.startTime} value={formValue.startTime} />
                            <BoxInput onChange={handleOnChange} {...inputElment.endTime} value={formValue.endTime} />
                            <BoxInput onChange={handleOnChange} {...inputElment.reason} value={formValue.reason} />
                            <button onClick={hanldeOnSubmit}>저장하기</button>
                        </ContentRight>
                    </ContentMain>
                </Container>
            </CalendarProvider>
        </>
    )
}


const ContentLeft = styled.div`
    width: 80%;
    padding: 20px;
    margin-top: 3vh;
`

const ContentRight = styled.div`
    width: 20%;
    border-left: 1px solid ${theme.color.border};
`

const CalendarMain = styled.div`
    width: 100%;
`

const ContentMain = styled(Flex)`
    align-items: flex-start;
`
const Container = styled.div`

`

export default Page;