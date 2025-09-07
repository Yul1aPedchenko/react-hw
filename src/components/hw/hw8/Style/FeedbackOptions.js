import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 12px;
  padding: 0;
  margin: 20px 0;
  list-style: none;
`;

export const ListItem = styled.li``;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #4f46e5;
  background-color: #eef2ff;
  color: #4f46e5;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4f46e5;
    color: #fff;
  }

  &:active {
    transform: scale(0.97);
  }
`;
