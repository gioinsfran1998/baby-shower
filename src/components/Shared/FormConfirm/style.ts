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

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  border-radius: 3px;
  height: 40px;

  width: 100%;

  background-color: #2ecc71;

  color: #fafafa;

  &:active {
    opacity: 0.6;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const Loading = styled.div`
  display: inline-block;

  &::after {
    content: ' ';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 6px solid #fafafa;
    border-color: #fafafa transparent #fafafa transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
