// style.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #FDF7E3;
  border-radius: 20px;
  padding: 20px;
  width: 90%;
  max-width: 300px;
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Icon = styled.i`
  font-size: 40px;
  color: #C8C8A9;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  color: #4A4A4D;
`;

export const Body = styled.div`
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #E3E3C6;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const EmailIcon = styled.i`
  margin-right: 10px;
  color: #6B6B5E;
`;

export const EmailInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  font-size: 16px;
  color: #4A4A4D;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const EditButton = styled.button<{ isSelected?: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 15px;
  border: none;
  margin-right: 5px;
  background: ${({ isSelected }) => (isSelected ? '#4A4A4D' : '#E3E3C6')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#4A4A4D')};
  cursor: pointer;
  font-size: 16px;
`;

export const ViewButton = styled(EditButton)`
  margin-left: 5px;
`;

export const AddButton = styled.button`
  background: #E3E3C6;
  padding: 10px 0;
  width: 100%;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #6B6B5E;
`;
