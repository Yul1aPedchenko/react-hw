import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 300px;
  margin: 20px auto;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 12px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0 4px;
  color: #111827;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

export const Location = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin-top: 4px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: #f9fafb;
  padding: 10px;
  margin: 0;
  list-style: none;
  border-top: 1px solid #e5e7eb;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

export const Label = styled.span`
  color: #6b7280;
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: #111827;
`;