import styled from 'styled-components'
import * as V from '../../styles/variables'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${V.Size.sm};
    background-color: var(--bg-color);
    color: var(--font-color);
    .group-toggle{
        margin: ${V.Size.xs};
    }

    em{
        margin-right: ${V.Size.xs};
        color: var(--primary-color);
    }
`;

export const Card = styled.div`
    border: 1px solid ${V.Color.gray};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${V.Size.lg} ${V.Size.sm};
    width: 150px;
    background: var(--heading-color);
`