import styled from 'styled-components';

export const Item = styled.article`
  border: 1px solid #d0bfff;
  border-radius: 16px;
  margin: 0 auto;
  margin-bottom: 16px;
  box-shadow: 0 6px 14px rgba(124, 58, 237, 0.1);
  overflow: hidden;
  background: linear-gradient(135deg, #f5f3ff 0%, #e0e7ff 100%);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1400px;


  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.2);
  }
`;

export const Question = styled.button`
  width: 100%;
  padding: 20px;
  background: linear-gradient(90deg, #7c3aed, #9333ea);
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  svg {
    flex-shrink: 0;
  }
`;

export const Answer = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #3b0764;
  line-height: 1.6;
  background: #faf5ff;
`;