import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  gap: 13px;
  padding-right: 13px;
`;

export const FormInput = styled.input`
  padding: 13px;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;
  border-right: 1px solid #ddd;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  cursor: pointer;
`;
