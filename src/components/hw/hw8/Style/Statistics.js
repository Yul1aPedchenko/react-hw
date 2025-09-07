import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 20px 0;
  background-color: #ffffffff;
  border-radius: 12px;
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

export const ListItem = styled.li`
  font-size: 16px;
  color: #111827;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
    font-weight: bold;
    color: #4f46e5;
  }
`;
