import React, { useCallback, useEffect, useRef, useState } from "react";
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

const Page = () => {
    const [date, setDate] = useState<moment.Moment[]>([]);
    const [today, setToday] = useState<moment.Moment>();
    const { centerId, studioId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [operatingHours, setOperatingHours] = useState<string[]>([]);
    const navigation = useNavigate();
    const week = ["월", "화", "수", "목", "금", "토", "일"]
    const inputElment = InputElementsUtils.studioBreakTimeCreate;
    const [formValue, setFormValue] = useState(FormValuesUtils.studioBreakTimeCreate);
    const calendarRef = useRef<any>();
    const [enabel, setenabel] = useState(true);
    const [selectItem, setSelectItem] = useState({ nowDate: null, startClock: null, endClock: null });

    const handlerMouseFocus = () => {

    }

    useEffect(() => {
        window.addEventListener('mousedown', handlerMouseFocus);
        return () => {
            window.removeEventListener('mouseup', handlerMouseFocus);
        }
    }, []);

    useEffect(() => {
        client.get('studio/' + centerId).then((res) => {
            if (res.data.length === 0) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
        });
    }, [centerId, navigation, pathname]);

    const handleDateChange = useCallback((data: moment.Moment[]) => {
        setDate(data);
    }, []);

    const handleSetToday = useCallback((data: moment.Moment) => {
        setToday(data);
    }, []);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSetClock = useCallback((openTime: string, closeTime: string) => {
        const openMoment = moment(openTime).tz("Asia/Seoul").utc();
        const closeMoment = moment(closeTime).tz("Asia/Seoul").utc();

        for (let i = openMoment; i <= closeMoment; i.add(30, 'm')) {
            setOperatingHours(oldArray => [...oldArray, i.format('hh:mm A')]);
        }

    }, []);


    const SelectionItem = (value: any, date: any) => {

    };


    useEffect(() => {
        const getStudioRentalTime = async () => {
            if (studioId) {
                const { openTime, closeTime } = await StudioRentalTimeService.findOne(studioId);
                handleSetClock(openTime, closeTime);
            }
        }
        getStudioRentalTime();

    }, [studioId, handleSetClock]);

    return (
        <>
            <Container>
                <ContentMain>
                    <ContentLeft>
                        <CalendarHeader setToday={handleSetToday} onChange={handleDateChange} format="day" />
                        <CalendarTable>
                            <thead>
                                <tr>
                                    <th></th>
                                    {
                                        operatingHours.map((data, key) => (
                                            <th key={key}><StyledTypographyMicro>{data}</StyledTypographyMicro></th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <TBody ref={calendarRef}>
                                {
                                    date.map((data, key) => (
                                        <tr key={key}>
                                            <th><StyledTypographySmall state={data.format('D') === today?.format('D')}>{week[key]}({data.format('D')}일)</StyledTypographySmall></th>
                                            <SelectDrag
                                                onSelectionChange={SelectionItem}
                                                enabled={enabel}
                                                date={data.format('D')}
                                            >
                                                {
                                                    operatingHours.map((data, key) => (
                                                        <BoxByTime key={key}/>
                                                    ))
                                                }
                                            </SelectDrag>
                                        </tr>
                                    ))
                                }
                            </TBody>
                        </CalendarTable>
                    </ContentLeft>
                    <ContentRight>
                        <BoxInput onChange={handleOnChange} {...inputElment.date} value={formValue.date} />
                        <BoxInput onChange={handleOnChange} {...inputElment.time} value={formValue.time} />
                        <BoxInput onChange={handleOnChange} {...inputElment.reason} value={formValue.reason} />
                    </ContentRight>
                </ContentMain>
            </Container>
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
const BoxByTime = styled.td`
    height: 40px;
    border-top: 1px solid ${theme.color.border};
    border-right: 1px solid ${theme.color.border};
    border-bottom: 1px solid ${theme.color.border};
    border-left: 1px solid ${theme.color.border};
`
const StyledTypographyMicro = styled(Typography.Micro)`
    width: 80px;
    color: ${theme.color.placeholder};
`
const CalendarTable = styled.table`
    display:flex;
    overflow-x: auto;
    overflow-y: hidden;
    width:100%;
    border-collapse:collapse;
    border-spacing:0;
    border-spacing: 0px;
    border-style: none;
    padding: 0px;
    margin-top: 5vh;

    tr{
        width: calc(100%/7);
    }
    th, td{
        display:block
    }
`
const StyledTypographySmall = styled(Typography.Small) <{ state: boolean }>`
    color: ${({ state, theme }) => state ? theme.color.main : theme.color.TitleActive};
    margin-bottom: 1.2vh;
    text-align: left;
`
const TBody = styled.tbody`
    display:flex;
    width: 100%;
    tr:first-child{
        ${BoxByTime}{
            border-top: 2px solid ${theme.color.border};
        }
    } 
    tr:last-child{
        ${BoxByTime}{
            border-bottom: 2px solid ${theme.color.border};
        }
    } 
`
const ContentFooter = styled.div`
`
const ContentMain = styled(Flex)`
    align-items: flex-start;
`
const Container = styled.div`

`

export default Page;