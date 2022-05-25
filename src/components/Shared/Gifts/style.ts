import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  max-width: 500px;
  padding: 40px 0px;
`;
export const Extra = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 50px;

  width: 100%;

  opacity: 0.6;
`;

export const CoverImage = styled.div`
  position: absolute;

  top: 100px;

  opacity: 0.6;
`;

export const Markets = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 20px 0px;
`;

export const Title = styled.h1`
  font-family: 'Parisienne', cursive;

  font-size: 30px;
  letter-spacing: 0px;
  line-height: 60px;
`;

export const SubTitle = styled.h3`
  font-size: 10px;
`;

export const Comment = styled.span`
  text-transform: uppercase;

  font-size: 10px;
  letter-spacing: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 4px;
  margin: 0px 10px;
`;

export const Strong = styled.p`
  font-family: 'Open Sans', sans-serif;

  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
`;

export const Text = styled.p`
  text-align: justify;
  font-family: 'Open Sans', sans-serif;

  font-size: 14px;
  line-height: 20px;
  padding: 0px 20px;

  z-index: 1;

  & ~ & {
    &::first-letter {
      text-transform: uppercase;
      float: left;

      font-size: 40px;
      padding-right: 5px;

      initial-letter: 4;
      line-height: 1;
    }
  }
`;
