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

    return (
        <>
            <FullWidthSidebar>
                <Container>
                    <CalendarHeader setToday={handleSetToday} onChange={handleDateChange} format="day" />
                    <Content>
                        <Calendar>
                            {
                                date.map((data, key) => (
                                    <CalendarWrap>
                                        <Typography.Small color={theme.color.placeholder}>{week[key]}</Typography.Small>
                                        <StyledTypographyLarge color={theme.color.dep_gray}>{data.format('D')}</StyledTypographyLarge>
                                        <Wrap key={key}>
                                                {
                                                    Array(13).fill(1).map((n, i) => (
                                                        <ContentByTime key={i}></ContentByTime>
                                                    ))
                                                }
                                        </Wrap>
                                    </CalendarWrap>
                                ))
                            }
                        </Calendar>
                    </Content>
                </Container>
            </FullWidthSidebar>
        </>
    )
}
const StyledTypographyLarge = styled(Typography.Large)`
    margin-top: 1.2vh;
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
    text-align: center;
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