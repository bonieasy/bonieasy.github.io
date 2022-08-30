import styled from "styled-components";

export const Container = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 5rem;
    
    h1 {
        margin-bottom: 2rem;
        text-align: center;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr); //3 colunas de tamanho igual
    gap: 1rem; 

    div {
        background: gray;
        padding: 1.5rem 2rem;
        color: var(--text-body);    
    }
    
`;