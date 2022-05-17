import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";
import Flex from "components/style/Flex";
import { theme } from "styles/theme";
import CalendarHeader from "containers/CalendarHeader";
import { StudioRentalTimeService } from "api/studio-rental-time.service";
import { CalendarProvider } from "hooks/useCalendarContext";
import Calendar from "containers/Calendar";
import StudioRentalTimeModal from "entities/StudioRentalTime.entity";
import CalendarSettings from 'containers/CalendarSettings';

const Page = () => {
    const { centerId, studioId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rentalTimes, setRentalTimes] = useState<StudioRentalTimeModal>();
    const navigation = useNavigate();

    useEffect(() => {
        client.get('studio/' + centerId).then((res) => {
            if (res.data.length === 0) {
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
        });
    }, [centerId, navigation, pathname]);

    return (
        <>
            <CalendarProvider>
                <Container>
                    <ContentMain>
                        <ContentLeft>
                      1      <CalendarHeader />
                            <CalendarMain>
                                {
                                    studioId && (
                                        <Calendar
                                            studioId={Number(studioId)}/>
                                    )
                                }
                            </CalendarMain>
                        </ContentLeft>
                        <ContentRight>
                            <CalendarSettings />
                        </ContentRight>
                    </ContentMain>
                </Container>
            </CalendarProvider>
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

const CalendarMain = styled.div`
    width: 100%;
`

const ContentMain = styled(Flex)`
    align-items: flex-start;
`
const Container = styled.div`

`

export default Page;