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
  padding: 20px 0px;

  background-color: #fadcd9;
`;
export const Extra = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 50px;

  width: 100%;

  background-color: #fafafa;
`;

export const CoverImage = styled.div`
  position: absolute;

  top: 100px;

  opacity: 0.6;
`;

export const Markets = styled.div`
  display: flex;

  margin-top: 20px;
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

  background-color: #fafafa;

  padding: 10px;
  border-radius: 16px;
  margin: 0px 10px;

  & ~ & {
    background-color: #36c;
  }
`;

export const Text = styled.p`
  text-align: justify;
  font-family: 'Open Sans', sans-serif;

  font-size: 14px;
  line-height: 20px;
  padding: 0px 20px;

  z-index: 1;

  &::first-letter {
    text-transform: uppercase;
    float: left;

    font-size: 40px;
    padding-right: 5px;

    initial-letter: 4;
    line-height: 1;
  }
`;
