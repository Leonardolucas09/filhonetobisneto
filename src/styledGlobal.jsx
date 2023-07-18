import styled from "styled-components"
import createGlobalStyle from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
`

export const CorpoApp = styled.body`
    display: flex;
    background-color: #f4d5d5;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh
`