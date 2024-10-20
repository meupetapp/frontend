import styled from "styled-components";

export const PetItemStyle = styled.div`
  border: solid 3px #556270;
  border-radius: 20px;
  height: 85px;
  width: 85%;
  color: #556270;

  .pet-header {
    display: flex;
    padding: 10px;
    align-items: center;
  }

  .pet-name {
    margin-left: 15px;
    font-size: 24px;
    font-weight: 700;
  }

  .button-arrow {
    margin-left: auto;

    svg {
      width: 30px;
      height: 30px;
      color: #556270;
    }
  }

  .access-list {
    border-right: solid 3px #556270;
    border-bottom: solid 3px #556270;
    border-left: solid 3px #556270;
    padding: 10px;
    background-color: #f7efd8;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .new-access-button {
    background-color: #4A4A4D;
    color: white;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #383838;
    }
  }
`;
