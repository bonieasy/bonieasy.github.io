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

export const Slider = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .card {
        position: relative;
    }

    .card figure {
        background: #000;
    }

    .elements {
        position: absolute;
        z-index: 10;
        width: 90%;
        top: 9rem;
        left: 1rem;
        opacity: 0;
        transition: all 0.3s ease;
    }
    label {
        color: #fff;
    }

    .card:hover .elements {
        transition: all 0.2s ease;
        opacity: 1;
    }

    .card:hover .image {
        background: red;
        opacity: 0.3;
    }

    img {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }

    .icons {
        height: 50px;
        padding-top: 50px;
    }
`;