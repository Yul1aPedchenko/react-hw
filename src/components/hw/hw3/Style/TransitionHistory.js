import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  font-size: 16px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background: linear-gradient(90deg, #6a11cb, #2575fc);
  color: #fff;
`;

export const Th = styled.th`
  padding: 14px 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f1f5ff;
  }
`;

export const Td = styled.td`
  padding: 12px 18px;
  border-bottom: 1px solid #eaeaea;
  color: #333;
`;
