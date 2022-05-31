import Typography from "components/style/Typography";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";
import Flex from "components/style/Flex";
import Button1 from "components/Button1";
import ProgressBar from "containers/ProgressBar";

type Item = {
    title: string;
    body: JSX.Element;
}

type Props = {
    items: Item[];
    onSubmit: () => void;
}

const StepForm: React.FC<Props> = ({ items, onSubmit }) => {
    const startItem: number = 0;
    const endStep: number = items.length;
    const endItem: number = items.length - 1;
    const [nowFormStep, setNowFormStep] = useState<number>(startItem);

    const preStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNowFormStep(nowFormStep - 1);
    }

    const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNowFormStep(nowFormStep + 1);
    }

    return (
        <Container>
            <ContentHeader>
                <ProgressBar shape="circle" endStep={endStep} nowStep={nowFormStep} />
                <Typography.Title2 weight={theme.fontWeight.Bold} align={theme.fontAlign.l}>{items[nowFormStep].title}</Typography.Title2>
            </ContentHeader>
            <ContentBody>
                {items[nowFormStep].body}
            </ContentBody>
            <ContentFooter>
                <Flex layout={theme.layout.r} justify={theme.justifyAlign.e} gap={15} style={{ marginTop: "30px" }}>
                    {
                        nowFormStep === startItem ? (
                            <Button1 onClick={nextStep} disabled={false} value="다음" />
                        ) : nowFormStep === endItem ? (
                            <>
                                <Button1 onClick={preStep} disabled={false} value="이전" />
                                <Button1 onClick={onSubmit} disabled={false} value="제출" />
                            </>
                        ) : (
                                    <>
                                        <Button1 onClick={preStep} disabled={false} value="이전" />
                                        <Button1 onClick={nextStep} disabled={false} value="다음" />
                                    </>
                                )
                    }
                </Flex>
            </ContentFooter>
        </Container>
    )

}


const Container = styled.div`
    max-width: 550px;
    width: 100%;
    margin: 0 auto;
`

const ContentBody = styled.div`
    margin-top: 15px;
`

const ContentHeader = styled.div`
    margin-top: 140px;
`
const ContentFooter = styled.div`

`

export default StepForm;