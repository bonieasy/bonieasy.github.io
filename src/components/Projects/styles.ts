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

export const Carousel = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr); //3 colunas de tamanho igual
    gap: 1rem; 

    padding: 0px;

    img {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    }
    
    
`;