import Typography from "components/style/Typography";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value?: string | number | []
};

const FileUploadInput: React.FC<Props> = ({ value, label, errorMessage, onChange }) => {
    const [myImage, setMyImage] = useState<string>('');

    const addImage = (e: any) => {
        const nowImageUrl = URL.createObjectURL(e.target.files[0]);
        setMyImage(nowImageUrl);
    };

    return (
        <>
            <Container>
                <Label htmlFor="fileInput">
                    <Typography.Small weight={theme.fontWeight.SemiBold}>{label}</Typography.Small>
                </Label>
                <Input id="fileInput" type="file" onChange={addImage} />
                {myImage ? (
                    <ImageWrap>
                        <p>{myImage}</p>
                    </ImageWrap>
                ) : null}
            </Container>
        </>
    );
};
const ImageWrap = styled.div`
  margin: 0px 10px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({theme})=>theme.color.border};
  :hover {
    border: 1px solid black;
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 18px;
  cursor: pointer;
  text-align: center;
  ::after {
    content: "";
    position: absolute;
    background: url("/icon/fileIcon.svg") no-repeat center;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 63%;
    transform: translate(0%, -50%);
  }
`;

export default FileUploadInput;