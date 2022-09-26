import styled from "styled-components";

export const Container = styled.header`
        width: 100%;
        position: sticky;
        top:0;
        z-index: 10;

    .navbar {
        border-bottom: 1px solid var(--trace);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

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

    a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--text-body);
    //transition: width .3s;
}

    a:hover::after {
        width: 100%;
        transition: width .4s;
    }

    a:visited {
    color: var(--text-body);
}
`;