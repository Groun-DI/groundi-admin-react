import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import styled from "styled-components";
import Typography from 'components/style/Typography';
import { theme } from 'styles/theme';
import Flex from 'components/style/Flex';
import { useCalendarContext } from 'hooks/useCalendarContext';


const CalendarHeader = () => {
    const { SetWeekDays, format } = useCalendarContext();
    const [date, setdate] = useState<moment.Moment>(() => moment());

    const TodayDate = () => {
        setdate(moment());
    };

    const getCalendarFormatTerm = () => {
        switch (format) {
            case 'year':
                return 365
            case 'month':
                return 30
            case 'day':
                return 7
            default: return 7;
        }
    }

    const nextDate = () => {
        setdate(date.clone().add(getCalendarFormatTerm(), format));
    };

    const preDate = () => {
        setdate(date.clone().subtract(getCalendarFormatTerm(), format));
    };

    const setMonthCalendar = useCallback(() => {
        let monthCalendar: moment.Moment[] = [];
        let startMonth = date.clone().startOf('month').week();
        let endMonth = date.clone().endOf('month').week() === 1 ? 53 : date.clone().endOf('month').week();
        for (let month = startMonth; month <= endMonth; month++) {
            Array(7)
                .fill(1)
                .map((n, i) => {
                    monthCalendar.push(
                        date
                            .clone()
                            .week(month)
                            .startOf('week')
                            .add(n + i, 'day')
                    );
                });
        }
        return monthCalendar;
    }, [date]);

    const setWeekCalendar = useCallback(() => {
        let weekCalendar: moment.Moment[] = [];
        let startWeek = date.clone().startOf('day').week();
        Array(7)
            .fill(1)
            .map((n, i) => (
                weekCalendar.push(
                    date
                        .clone()
                        .week(startWeek)
                        .startOf('week')
                        .add(n + i, 'day')
                ))
            );
        return weekCalendar;
    }, [date]);

    useEffect(() => {
        switch (format) {
            case 'year':
                return SetWeekDays(setMonthCalendar());
            case 'month':
                return SetWeekDays(setMonthCalendar());
            case 'day':
                return SetWeekDays(setWeekCalendar());
            default: return SetWeekDays(setWeekCalendar());
        }
    }, [date, format, SetWeekDays, setMonthCalendar, setWeekCalendar])

    return (
        <Container>
            <Typography.Title3 weight={theme.fontWeight.SemiBold}>{date.format('YYYY')}년 {date.format('M')}월</Typography.Title3>
            <Content>
                <LeftButton onClick={() => preDate()} />
                <CenterButton onClick={() => TodayDate()}>
                    <Typography.Regular color="#fff">오늘</Typography.Regular>
                </CenterButton>
                <RightButton onClick={() => nextDate()} />
            </Content>
        </Container>
    )
}

const Content = styled(Flex)`
    margin-top: 3vh;
    justify-content: flex-start;
`

const LeftButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid ${theme.color.main_light};
    background: url('/icon/minus-initial.svg') no-repeat center;
    
    cursor: pointer;
    :hover{
        border: 2px solid ${({ theme }) => theme.color.main};
        background: url('/icon/minus-active.svg') no-repeat center;
    }
    :disabled{
        border: 2px solid ${({ theme }) => theme.color.border};
        background: url('/icon/minus-disabled.svg') no-repeat center;
        cursor: no-drop;
    }
`;

const RightButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid ${theme.color.main_light};
    background: url('/icon/minus-initial.svg') no-repeat center;
    
    cursor: pointer;
    :hover{
        border: 2px solid ${({ theme }) => theme.color.main};
        background: url('/icon/minus-active.svg') no-repeat center;
    }
    :disabled{
        border: 2px solid ${({ theme }) => theme.color.border};
        background: url('/icon/minus-disabled.svg') no-repeat center;
        cursor: no-drop;
    }
`;

const CenterButton = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 20px;
    border: 0px;
    background-color: ${theme.color.main_light};
    margin: 0px 8px;
    cursor: pointer;
    :hover{
        background-color: ${theme.color.main};
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;

const DropDownLi = styled.li`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const DropDownUl = styled.ul`
    list-style: none;
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
    width: 100px;
    height: 50px;
    background-color: #6e917b;
    border-radius: 20px;
    text-align: center;
`;

const Container = styled.div``;

export default CalendarHeader;