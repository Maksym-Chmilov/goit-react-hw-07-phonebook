import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ContactsBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: small;
  height: 25px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  max-width: 100px;
  padding: 0 16px 0 16px;
  color: white;
  background-color: orangered;
  border: 1px solid rgba(241, 208, 202, 0.4);
  cursor: pointer;
  transition: border-color 250ms linear, color 250ms linear,
    background-color 250ms linear;
  :hover {
    border-color: orangered;
    color: orangered;
    background-color: white;
  }
`;
export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: large;
  justify-content: space-between;
`;

export const RequestTitle = styled.h2`
font-weight: 700;
font-size: 28px;
line-height: 1.2;
letter-spacing: 0.03em;
text-transform: uppercase;
color: orangered;
`