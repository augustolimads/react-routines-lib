import styled from 'styled-components'
import * as V from '../../styles/variables'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${V.Size.sm};

    .group-toggle{
        margin: ${V.Size.xs};
    }

    em{
        margin-right: ${V.Size.xs}
    }
`;

export const Card = styled.div`
    border: 1px solid ${V.Color.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${V.Size.lg} ${V.Size.sm};
    width: 150px;
    background: var(--bg);

    h1{
        color: var(--primary)
    }
`