import styled from "styled-components";
import week from "data/week.json";
import moment from 'moment-timezone';
import { theme } from "styles/theme";

type Props = {
    weekDays: moment.Moment[]
}

const WeekCalendar: React.FC<Props> = ({ weekDays }) => {
    const hours = moment("9:00:00 PM", "hh:mm:ss A").tz("Asia/Seoul").utc();

    return (
        <Wraper>
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
                        {
                            Array(24).fill(1).map((data, key) => (
                                <LineBox key={key}/>
                            ))
                        }
                    </RightContentMain>
                </RightContent>
            </Container>
        </Wraper >
    )
}

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

const Wraper = styled.div`
    width: 100%;
`

export default WeekCalendar;