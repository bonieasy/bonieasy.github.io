import styled from "styled-components";

export const Container = styled.section`
  margin-top: 3rem;
  
  a {
    background: var(--text-body);
    color: var(--background);
    font-size: 1.5rem;
    font-weight: 300;
    border: 0;
    padding: 0 2rem;
    margin-top: 30px;
    border-radius: 0.5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    transition: background-color 0.5s ease;
  }
  a:hover {
    background-color: #4A4848;
    cursor:pointer;
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

  `;
  