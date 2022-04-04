import { useCalendarContext } from "hooks/useCalendarContext";
import styled from "styled-components";
import { theme } from "styles/theme";
import week from "data/week.json";
import moment from 'moment-timezone';
import BreakTimeBlock from "components/BreakTimeBlock";
import StudioRentalTimeModal from "entities/StudioRentalTime.entity";
import HolidayBlock from "components/HolidayBlock";

type Props = {
    studioId: number;
    rentalTime: StudioRentalTimeModal;
}

const Calendar: React.FC<Props> = ({ studioId, rentalTime }) => {
    const { weekDays } = useCalendarContext();

    const handleShowClock = () => {
        let hours: string[] = [];
        let openMoment = moment(rentalTime.openTime).tz("Asia/Seoul").utc();
        const closeMoment = moment(rentalTime.closeTime).tz("Asia/Seoul").utc();

        for (let i = openMoment; i <= closeMoment; i.add(30, 'm')) {
            hours.push(i.format('h:mm A'));
        }

        return hours.map((hour, key) => (
            <HourBox key={key}>{hour}</HourBox>
        ))

    };


    const handleShowWeek = () => {
        return weekDays.map((day, key) => (
            <WeekBox key={key}>{week[key]}({day.format('D')}일)</WeekBox>
        ))
    };

    const handleShowLine = () => {
        let hours: string[] = [];
        let openMoment = moment(rentalTime.openTime).tz("Asia/Seoul").utc();
        const closeMoment = moment(rentalTime.closeTime).tz("Asia/Seoul").utc();

        for (let i = openMoment; i <= closeMoment; i.add(30, 'm')) {
            hours.push(i.format('h:mm A'));
        }

        return hours.map((hour, key) => (
            <LineBox key={key} />
        ))
    };

    return (
        <Container>
            <LeftContent>
                <LeftContentMain>
                    {
                        handleShowClock()
                    }
                </LeftContentMain>
            </LeftContent>
            <RightContent>
                <RightContentHeader>
                    {
                        handleShowWeek()
                    }
                </RightContentHeader>
                <RightContentMain>
                    <BlockLayered1>
                        {
                            weekDays.map((day, key) => (
                                <BlockContainer key={key}>
                                    <HolidayBlock day={day} studioId={studioId}/>
                                </BlockContainer>
                            ))
                        }
                    </BlockLayered1>
                    <BlockLayered2>
                        {
                            weekDays.map((day, key) => (
                                <BlockContainer key={key}>
                                    <BreakTimeBlock studioId={studioId}/>
                                </BlockContainer>
                            ))
                        }
                    </BlockLayered2>
                    <BlockLayered3>
                        {
                            handleShowLine()
                        }
                    </BlockLayered3>
                </RightContentMain>
            </RightContent>
        </Container>
    )
}

export default Calendar;

const BlockLayered3 = styled.div`
    width: 100%;
    height: 100%;
    z-index: 3;
`
const BlockLayered2 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    z-index: 2;
`
const BlockLayered1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    z-index: 1;
`

const BlockContainer = styled.div`
    position: relative;
    width: calc(100% /7);
    height: 100%;
    border-right: 1px solid ${theme.color.border};
`

const WeekBox = styled.div`
    width: calc(100% / 7);
    height: 20px;
`

const HourBox = styled.div`
    height: 40px;
`

const LineBox = styled.div`
    height: 40px;
    border-bottom: 1px solid ${theme.color.border};
    z-index: 2;
`

const RightContentMain = styled.div`
    position: relative;
    height: 100%;
`

const RightContentHeader = styled.div`
    display: flex;
    border-bottom: 2px solid ${theme.color.border};
`

const LeftContentMain = styled.div`
    margin-top: 17px;
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