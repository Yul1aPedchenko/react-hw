import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 12px;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    width: 320px;
`;

export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? "#34d399" : "#f87171")};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #111827;
`;
