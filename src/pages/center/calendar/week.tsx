import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router";
import client from "services/axios";
import styled from "styled-components";
import Flex from "components/style/Flex";
import { theme } from "styles/theme";
import CalendarHeader from "containers/CalendarHeader";
import { StudioRentalTimeService } from "api/studio-rental-time.service";
import BoxInput from "components/input/BoxInput";
import InputElementsUtils from "utils/inputs.utils";
import FormValuesUtils from "utils/formValue.utils";
import { StudioBreakTimeService } from "api/StudioBreakTime.service";
import { CalendarProvider } from "hooks/useCalendarContext";
import Calendar from "containers/Calendar";
import StudioRentalTimeModal from "entities/StudioRentalTime.entity";
import StudioHolidayModal from "entities/StudioHoliday.entity";
import { StudioHolidayService } from "api/StudioHoliday.service";


const Page = () => {
    const { centerId, studioId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rentalTimes, setRentalTimes] = useState<StudioRentalTimeModal>();
    const navigation = useNavigate();
    const inputElment = InputElementsUtils.studioBreakTimeCreate;
    const [formValue, setFormValue] = useState(FormValuesUtils.studioBreakTimeCreate);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const hanldeOnSubmit = async () => {
        const res = await StudioBreakTimeService.create({
            studioId: Number(studioId),
            date: formValue.date,
            time: formValue.startTime,
            reason: formValue.reason
        });

        console.log(res);
    };

    useEffect(() => {
        client.get('studio/' + centerId).then((res) => {
            if (res.data.length === 0) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
        });
    }, [centerId, navigation, pathname]);


    useEffect(() => {
        const getStudioRentalTime = async () => {
            if (studioId) {
                setRentalTimes(await StudioRentalTimeService.findOne(Number(studioId)));
            }
        }

        getStudioRentalTime();
    }, [studioId]);

    return (
        <>
            <CalendarProvider>
                <Container>
                    <ContentMain>
                        <ContentLeft>
                            <CalendarHeader />
                            <CalendarMain>
                                {
                                    studioId && rentalTimes && (
                                        <Calendar
                                            studioId={Number(studioId)}
                                            rentalTime={rentalTimes}/>
                                    )
                                }
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