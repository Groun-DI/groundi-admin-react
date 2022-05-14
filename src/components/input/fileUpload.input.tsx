import Flex from "components/style/Flex";
import Typography from "components/style/Typography";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles/theme";

type Props = {
    errorMessage: string,
    onChange: (e: File) => void;
    label: string;
    value?: any
};

const FileUploadInput: React.FC<Props> = ({ value, label, errorMessage, onChange }) => {
    const [myImage, setMyImage] = useState<string>('');

    const addFile = (e: any) => {
        const { value } = e.target;
        const fileName = value.split("\\").pop();
        setMyImage(fileName);
        onChange(e.target.files[0])
    };

    const removeFile = (e: any) => {
        setMyImage('');
    };

    return (
        <>
            {
                myImage ?
                    <Container>
                            <Button onClick={removeFile}>
                                <Typography.Small>{myImage}</Typography.Small>
                            </Button>
                    </Container> :
                    <Container>
                        <Label htmlFor="fileInput">
                            <Typography.Small weight={theme.fontWeight.SemiBold}>{label}</Typography.Small>
                        </Label>
                        <Input id="fileInput" type="file" onChange={addFile} />
                        <Image src="/icon/fileIcon.svg" alt="사업자 파일 업로드" />
                    </Container>
            }
        </>
    );
};
const Image = styled.img`

`;

const Container = styled(Flex)`
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top:10px;
  border: 1px solid ${({ theme }) => theme.color.border};
  :hover {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-block;
  position: relative;
  padding: 18px 5px;
  cursor: pointer;
  text-align: center;
`;


const Button = styled.button`
  display: inline-block;
  position: relative;
  width: 100%;
  padding: 18px;
  cursor: pointer;
  text-align: left;
  background-color: white;
    border: 0px;
    border-radius: 8px;
  ::after {
    content: "";
    position: absolute;
    background: url("/icon/close.svg") no-repeat center;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 94%;
    transform: translate(0%, -50%);
  }
`;

export default FileUploadInput;