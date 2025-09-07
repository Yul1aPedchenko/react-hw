import styled from "styled-components";

export const Section = styled.section`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  margin: 20px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #111827;
  margin-bottom: 16px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  flex: 1;
  padding: 10px;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #4f46e5;
`;
