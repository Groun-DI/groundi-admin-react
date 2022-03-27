import Typography from "components/style/Typography";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "components/style/Flex";
import { theme } from "styles/theme";
import { StudioService } from "api/studio.service";
import FullWidthSidebar from "components/style/FullWidthSidebar";

const Page = () => {
    const { centerId } = useParams();
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigate();

    useEffect(() => {
        const getStudioId = async () => {
            const studioId = await StudioService.findOne(Number(centerId));
            if (studioId.length === 0) {
                setIsLoading(false);
            } else {
                setIsLoading(true);
                return navigation(`/${centerId}/calendar/${studioId}/week`);
            }
        }
        getStudioId();
    }, [centerId, navigation, pathname]);

    return (
        <FullWidthSidebar>
            {
                !isLoading ? (
                    <Container>
                        <Typography.Title3 weight={theme.fontWeight.SemiBold}>개설된 스튜디오가 없어요.</Typography.Title3>
                        <img src="/Not-Found-Studio.png" alt="개설된 스튜디오가 없어요. 안내 이미지" />
                        <Link to={`/center/${centerId}/new-studio`}>
                            <Typography.Regular weight={theme.fontWeight.SemiBold}>지금 만들려구요</Typography.Regular>
                        </Link>
                    </Container>
                ) : (
                        <Outlet />
                    )
            }
        </FullWidthSidebar>
    )
}

const Container = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top:10vh;

    img{
        margin-top: 70px;
        width: 180px;
        height : 155px;
    }

    a{
        padding: 18px 45px;
        border: 2px solid ${({ theme }) => theme.color.TitleActive};
        border-radius: 8px;
        background-color: white;
        margin-top: 25px;
    }
`

export default Page;