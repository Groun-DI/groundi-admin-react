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

type SelectDragTime = {
    date: string;
    startTime: string;
    endTime: string;
}

const Page = () => {
    const hours = moment("9:00:00 PM", "hh:mm:ss A").tz("Asia/Seoul").utc();
    const [weekDays, setDate] = useState<moment.Moment[]>([]);
    const [today, setToday] = useState<moment.Moment>();
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

    const handleDateChange = useCallback(async (data: moment.Moment[]) => {
        setDate(data);

        for (let i = 0; data.length > i; i++) {
            setBreakTimes((await client.get(`studio-breaktime/${Number(studioId)}/date/${data[i].format('YYYY-MM-DD')}T00:00:00.000Z`)).data);
        }

    }, [studioId]);

    const handleSetToday = useCallback((data: moment.Moment) => {
        setToday(data);
    }, []);

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

    const SelectBox = (day: moment.Moment) => {
        let top: number = 0;
        let height: number = 0;

        console.log(breakTimes);


        // if (breakTims.length > 0) {
        //     console.log(breakTims)
        //     for (let i = 0; breakTims.length > i; i++) {
        //         height = handleSetClock(breakTims[i].openTims, breakTims[i].closeTime).length * 50;
        //     }

        //     console.log(height);

        // }

        return (
            <BreakTimeBox
                top={0}
                height={80}
            />
        )

    }

    return (
        <>
            <Container>
                <ContentMain>
                    <ContentLeft>
                        <CalendarHeader setToday={handleSetToday} onChange={handleDateChange} format="day" />
                        <CalendarMain>
                            <Calendar>
                                <LeftContent>
                                    <LeftContentMain>
                                        {
                                            Array(24).fill(1).map((data, key) => {
                                                hours.add(60, 'm');
                                                return <HourBox key={key}>{hours.format('h A')}</HourBox>
                                            })
                                        }
                                    </LeftContentMain>
                                </LeftContent>
                                <RightContent>
                                    <RightContentHeader>
                                        {
                                            weekDays.map((day, key) => (
                                                <WeekBox key={key}>{week[key]}({day.format('D')}일)</WeekBox>
                                            ))
                                        }
                                    </RightContentHeader>
                                    <RightContentMain>
                                        <div>
                                            {
                                                Array(24).fill(1).map((data, key) => (
                                                    <LineBox key={key} />
                                                ))
                                            }
                                        </div>
                                        <SelectDragWrap>
                                            {
                                                weekDays.map((day, key) => (
                                                    <SelectDragContainer>
                                                        {
                                                            SelectBox(day)
                                                        }
                                                    </SelectDragContainer>
                                                ))
                                            }
                                        </SelectDragWrap>
                                    </RightContentMain>
                                </RightContent>
                            </Calendar>
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
        </>
    )
}

const BreakTimeBox = styled.div<{ top: number, height: number }>`
    position: absolute;
    width: 100%;
    top: ${({ top }) => top}px;
    left: 0px;
    height: ${({ height }) => height}px;
    background-color: ${theme.color.main_light};
`
const SelectDragWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
`

const SelectDragContainer = styled.div`
    position: relative;
    width: calc(100% /7);
    height: 100%;
    border-right: 1px solid ${theme.color.border};
`

const ContentLeft = styled.div`
    width: 80%;
    padding: 20px;
    margin-top: 3vh;
`

const ContentRight = styled.div`
    width: 20%;
    border-left: 1px solid ${theme.color.border};
`
const BoxByTime = styled.td`
    height: 40px;
    border-top: 1px solid ${theme.color.border};
    border-right: 1px solid ${theme.color.border};
    border-bottom: 1px solid ${theme.color.border};
    border-left: 1px solid ${theme.color.border};
`
const WeekBox = styled.div`
    width: calc(100% / 7);
`

const HourBox = styled.div`
    height: 80px;
`

const LineBox = styled.div`
    height: 80px;
    border-bottom: 1px solid ${theme.color.border};
`

const RightContentMain = styled.div`
    position: relative;
`

const RightContentHeader = styled.div`
    display: flex;
    border-bottom: 2px solid ${theme.color.border};
`

const LeftContentMain = styled.div`
    margin-top: 85px;
`

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%; 
`

const LeftContent = styled.div`
    width: 100px;
`

const Calendar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
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