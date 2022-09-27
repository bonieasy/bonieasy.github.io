import styled from "styled-components";

export const Container = styled.div`
  //max-width: 1120px;
  //margin: 0 auto;
  padding: 3rem 11em 3rem;
  //border-bottom: 2px solid #F4EEEE;
  //margin-top: 1rem;
    `;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20rem;
`; 

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    text-align: left;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.9px;
    line-height: 1.2;
}
  img {
    width: 50px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  `;

export const Image = styled.div`
  margin-top: 2rem;
  margin-right: 3rem;
  img {
    width: 400px;
  }
  
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;
`;
