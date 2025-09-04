import styled from "styled-components";

export const Item = styled.li`
display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 5px;
  background: white;
  border-radius: 4px;
  border: 1px solid #eee;
  width: 350px;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
