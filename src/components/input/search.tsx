import styled from "styled-components"


const SearchInput = () => {
    return (
        <Div>
            <Input type="text" />
            <Img src="/input-search.svg" alt="input-search" width={30}/>
        </Div>
    )
}

const Div = styled.div`
    position: relative;
`

const Input = styled.input`
    width: 500px;
    height: 80px;
    border: 2px solid black;
    border-radius: 50px;
    padding: 20px 80px;
    font-size: ${(props) => props.theme.fontSize.Large};
    :hover{
        border: 2px solid #c4c4c4c4;
    }
`

const Img = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 10%;
    top: 50%;
`
export default SearchInput