import { useCalendarContext } from "hooks/useCalendarContext";
import styled from "styled-components";
import { theme } from "styles/theme";
import week from "data/week.json";
import moment from 'moment-timezone';
import BreakTimeBlock from "components/BreakTimeBlock";

type Props = {
    studioId: number;
}

const Calendar: React.FC<Props> = ({ studioId }) => {
    const { weekDays } = useCalendarContext();
    const hours = moment("9:00:00 PM", "hh:mm:ss A").tz("Asia/Seoul").utc();
    return (
        <Container>
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
                                <SelectDragContainer key={key}>
                                    <BreakTimeBlock studioId={studioId} day={day}/>
                                </SelectDragContainer>
                            ))
                        }
                    </SelectDragWrap>
                </RightContentMain>
            </RightContent>
        </Container>
    )
}

export default Calendar;

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

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`