import styled from "styled-components";
import moment from "moment-timezone";
import { useEffect, useCallback, useState } from "react";
import client from "services/axios";
import { theme } from "styles/theme";

type Props = {
    studioId: number;
}

const BreakTimeBlock: React.FC<Props> = ({ studioId }) => {
    const [breakTimes, setBreakTimes] = useState<any[]>([]);

    const getBreakTime = useCallback(async() => {
        const dates = await client.get(`studio-breaktime/${Number(studioId)}`);
        if(dates.data){
            setBreakTimes(dates.data);
        }

    },[studioId]);


    useEffect(() => {
        getBreakTime();
    },[getBreakTime]);

    if(breakTimes.length > 0){
        return (
            <BreakTimeBox
                top={0}
                height={80} />
        )
    }
    
    return null;
}


const BreakTimeBox = styled.div<{ top: number, height: number }>`
    position: absolute;
    width: 100%;
    top: ${({ top }) => top}px;
    left: 0px;
    height: ${({ height }) => height}px;
    background-color: ${theme.color.main_light};
`

export default BreakTimeBlock;