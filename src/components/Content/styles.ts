import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 5rem 1rem 5rem;
  //border-bottom: 2px solid #F4EEEE;
  margin-top: 1rem;
    `;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rem;
`; 

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.9px;
    line-height: 1.2;
}
`;

export const Image = styled.div`
  padding: 1rem;

`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;
