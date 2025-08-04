import styled from "styled-components";

export const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
`;

export const Img = styled.img`
  width: 250px;
  border-radius: 8px;
  height: 250px;
  bject-fit: cover;
  margin-bottom: 10px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #141414;
  margin-bottom: 10px;
`;
export const InfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 40px;
  margin-bottom: 10px;
`;
export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 5px;
`;
export const LabelWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 40px
`;
export const Label = styled.div`
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background-color: ${({ level, active }) => {
    if (!active) return "transparent";

    switch (level) {
      case 0:
        return "#4caf50";
      case 1:
        return "#ffc107";
      case 3:
        return "#f44336";
      default:
        return "transparent";
    }
  }};
  box-shadow: ${({ active }) =>
    active ? "0 0 8px rgba(0, 0, 0, 0.2)" : "none"};
  transform: ${({ active }) => (active ? "scale(1.05)" : "none")};
`;
