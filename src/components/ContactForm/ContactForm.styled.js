import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: medium;
  padding: 20px;
`;
export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0 auto 1.5rem auto;
  align-items: center;
  font-size: medium;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
  color: inherit;
  background-color: orangered;
  border: 1px solid rgba(241, 208, 202, 0.4);
  border-radius: 5px;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover,
  :focus {
    cursor: pointer;
    border-color: orangered;
    color: rgba(209, 72, 17, 0.945);
    background-color: white;
  }
  :-webkit-autofill {
    transition: background-color 250s linear;
  }
`;
export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: orangered;
  border: 1px solid #f21212;
  font-size: medium;
  height: 36px;
  width: 200px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  padding: 0 16px 0 16px;
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;