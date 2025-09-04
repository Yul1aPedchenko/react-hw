import styled from "styled-components";

export const FormWrapper = styled.form`
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
    width: 300px;
    margin-right: 50px;
`;

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
`
export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  max-width: 200px;
  margin-bottom: 10px;
`;
export const AddButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
