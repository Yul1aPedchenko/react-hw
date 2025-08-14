import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
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

export const TaskListEl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 5px;
  background: white;
  border-radius: 4px;
  border: 1px solid #eee;

  &:hover {
    background-color: #f0f0f0;
  }
`;

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
