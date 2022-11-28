import styled from "styled-components";

export const Container = styled.div`
  //max-width: 1120px;
  //margin: 0 auto;
  padding: 3rem 11em 3rem;
  //border-bottom: 2px solid #F4EEEE;
  //margin-top: 1rem;

  @media (max-width: 768px) {
        padding: 3rem;
  }
    `;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
    line-height: 50px;
    padding-bottom: 0;
}
  img {
    width: 50px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;

    img {
      width: 80px;
    }
        
    }

  `;

export const Image = styled.div`
  margin-left: 2rem;
  img {
    width: 400px;
  }
  @media (max-width: 768px) {
        display: none;
  }
  
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        
    }
`;


