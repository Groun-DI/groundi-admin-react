import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation, useNavigate } from "react-router";
import client from "services/axios";
import styled from "styled-components";
import Flex from "components/style/Flex";
import { theme } from "styles/theme";
import CalendarHeader from "containers/CalendarHeader";
import moment from 'moment';
import Typography from "components/style/Typography";
import FullWidthSidebar from "components/style/FullWidthSidebar";

const Page = () => {
    const [date, setDate] = useState<moment.Moment[]>([]);
    const [today, setToday] = useState<moment.Moment>();
    const { centerId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openTime, setOpenTime] = useState<string[]>([]);
    const [closedTime, setClosedTime] = useState<number>(22);
    const navigation = useNavigate();
    const week = ["월", "화", "수", "목", "금", "토", "일"]

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

    const handleSetClock = useCallback((openTime: number, closeTime: number) => {
        for (let val = openTime; val < closeTime; val++) {
            if (val > 12) {
                setOpenTime(oldArray => [...oldArray, "오후" + (val - 12)]);
            } else {
                setOpenTime(oldArray => [...oldArray, "오전" + val]);
            }
        }
    }, []);

    useEffect(() => {
        // client.get('studio-rentaltime/' + centerId).then((res) => {
        //     setOpenTime(res.data.openTime);
        //     setClosedTime(res.data.closedTime);
        // });

        handleSetClock(9, 22);
    }, [centerId]);

    return (
        <>
            <FullWidthSidebar>
                <Container>
                    <CalendarHeader setToday={handleSetToday} onChange={handleDateChange} format="day" />
                    <Content>
                        <Calendar>
                            <LeftWrap>
                                {
                                    openTime.map((data, key) => (
                                        <ContentByTime>
<Typography.Micro>{data}</Typography.Micro>
                                        </ContentByTime>
                                        
                                    ))
                                }
                            </LeftWrap>
                            <RightWrap>
                                {
                                    date.map((data, key) => (
                                        <CalendarWrap key={key}>
                                            <StyledTypographySmall state={data.format('D') === today?.format('D')}>{week[key]}({data.format('D')}일)</StyledTypographySmall>
                                            <Wrap >
                                                {
                                                    Array(13).fill(1).map((n, i) => (
                                                        <ContentByTime key={i}></ContentByTime>
                                                    ))
                                                }
                                            </Wrap>
                                        </CalendarWrap>
                                    ))
                                }
                            </RightWrap>
                        </Calendar>
                    </Content>
                </Container>
            </FullWidthSidebar>
        </>
    )
}

const LeftWrap = styled.div`

`

const RightWrap = styled(Flex)`
    width : 100%;
    flex-direction: row;
`

const StyledTypographySmall = styled(Typography.Small) <{ state: boolean }>`
    color: ${({ state, theme }) => state ? theme.color.main : theme.color.placeholder};
`

const ContentByTime = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid ${theme.color.border};
`


const Wrap = styled.div`
    width: 100%;
    margin-top: 1.2vh;
    border-top: 2px solid ${theme.color.border};
    border-right: 1px solid ${theme.color.border};
    border-bottom: 2px solid ${theme.color.border};
    border-left: 1px solid ${theme.color.border};
`
const CalendarWrap = styled.div`
    width: 100%;
    width: calc(100% / 7);
    text-align: left;
`

const Calendar = styled(Flex)`
    width : 100%;
    flex-direction: row;
`
const Content = styled.div`
    margin-top: 5vh;
`

const Container = styled.div`

`

export default Page;