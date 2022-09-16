import React from 'react';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  height: auto;
  width: 80%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const InputSubmit = styled.input`
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin: 0 auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Form = () => {
  return (
    <FormContainer>
      <form>
        <InputSubmit type='submit' value='Cotizar' />
      </form>
    </FormContainer>
  );
};

export default Form;
