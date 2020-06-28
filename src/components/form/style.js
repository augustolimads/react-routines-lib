import styled from 'styled-components'
import * as V from '../../styles/variables'

export const Form = styled.form`
    width: 320px;
    display: flex;
    flex-direction: column;
    font-family: Roboto, sans-serif;

    label{
        font-weight: 700;
        margin-top: ${V.Size.xs}
    }

    input{
        font-size: ${V.Size.xs};
        border: 2px solid black;
    }

    textarea {
        border: 2px solid black;
    }
`