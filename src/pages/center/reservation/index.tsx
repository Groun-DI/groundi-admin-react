import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import client from "services/axios";
import styled from "styled-components";

const ReservationPage = () => {
    const { studioId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigate();

    useEffect(() => {
        client.get('studio-rental/' + studioId).then((res) => {
            if (res.data.length === 0) {
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
        });
    }, [studioId, navigation, pathname]);

    return (
        <Container>
            {
                !isLoading ? (
                    <p>공간 예약이 없습니다.</p>
                ) : (
                        <p>공간 예약 리스트</p>
                    )
            }
        </Container>
    )
}

const Container = styled.div`

`

export default ReservationPage;