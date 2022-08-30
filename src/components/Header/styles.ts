import styled from "styled-components";

export const Container = styled.header`
        width: 100%;
        position: sticky;
        top:0;

    .navbar {
        border-bottom: 2px solid #F4EEEE;
    }
    .navbar.active {
        border: none;
        box-shadow: rgb(0 0 0 / 20%) 0px 1.99px 9.95px;
    }
`;

export const Content = styled.div`
    //max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 11rem 3rem;
    font-size: 20px;
    font-weight: 300;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2.25rem;
    background: white;
    transition: background 0.4s;



    a:visited {
    color: #000000;
}

`;
