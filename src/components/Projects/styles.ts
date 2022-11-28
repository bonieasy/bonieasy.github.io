import styled from "styled-components";

export const Container = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 5rem;
    
    h1 {
        margin-bottom: 2rem;
        text-align: center;
        margin-top: 3rem;
    }
`;

export const Slider = styled.div`
   
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        
    }

    .card {
        overflow: hidden;
        border-radius: 5px;

        background: rgba(255, 255, 255, 0.8);
    border: 1px solid #D7D6D6;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 350px;
    height: 450px;

        
    }

    .card figure img {
        width: 350px;
        height: 300px;
        object-fit: cover;
    }

    a{
        background: var(--text-body);
        color: var(--background);
        border-radius: 20px;
        padding: 8px 15px;
        font-weight: 300;
        font-size: 15px;
        line-height: 15px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    }

    .elements {
        display: flex;
        flex-direction: column;
    }

    label {
        padding: 20px;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
    }

    .icons {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 20px;
    }

    `;