import styled from "styled-components";
import moment from "moment-timezone";
import { useEffect, useCallback, useState } from "react";
import { theme } from "styles/theme";
import { StudioHolidayService } from "api/StudioHoliday.service";
import StudioHolidayModal from "entities/StudioHoliday.entity";

type Props = {
    day: moment.Moment;
    studioId: number;
}

const HolidayBlock: React.FC<Props> = ({ day, studioId }) => {
    const [holidays, setHolidays] = useState<StudioHolidayModal>();

    const getStudioHoliday = useCallback(async() => {
        setHolidays(await StudioHolidayService.findOne(Number(studioId), (day.format('YYYY-MM-DD') + "T00:00:00.000Z")));
    },[ day, studioId]);

    useEffect(() => {
        getStudioHoliday();
    },[getStudioHoliday]);

    if(holidays){
        return (
            <HolidayBox />
        )
    }
    
    return null;
}


const HolidayBox = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    background-color: #FFECEA;
    z-index: 1;
`

export default HolidayBlock;