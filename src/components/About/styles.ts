import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  border-bottom: 2px solid #F4EEEE;

  a {
    background: var(--text-body);
    color: var(--background);
    font-size: 1.5rem;
    font-weight: 300;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.5rem;
    height: 5rem;

    display: flex;
    align-items: center;
  }
  `;

  export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 3rem 1rem 5rem;

    /* p {
        padding: 1rem;
        font-size: 2rem;
    } */
  
  `;
  