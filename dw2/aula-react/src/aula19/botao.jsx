import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }
`;

export default StyledButton;
