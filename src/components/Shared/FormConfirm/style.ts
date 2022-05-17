import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 5px;

  width: 100%;

  flex: 1;
`;

export const CoverInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  border: none;

  font-size: 16px;
  padding: 5px 10px;
  border-radius: 3px;

  background: #fafafa;
  color: #535c68;

  &::placeholder {
    color: #b2bec3;
  }

  &:focus {
    outline: none;
  }
`;

export const Error = styled.span`
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;

  color: red;

  height: 15px;
  font-size: 10px;
`;

export const Button = styled.button`
  border: none;

  font-size: 16px;
  padding: 5px 20px;
  border-radius: 3px;

  width: 100%;

  background-color: #fadcd9;
`;
