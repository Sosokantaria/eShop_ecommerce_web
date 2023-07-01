import { styled } from "styled-components";

export const PrimaryBtn = styled.button`
  background-color: #faad14;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: bold;
  font-weight: 600;
  border: 1px solid #faad14;
  &:focus {
    border: 3px solid #fcc861;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.3s ease-in-out;
  }
  &:hover {
    background-color: #fcc861;
  }
`;

export const LinkBtn = styled.button`
  color: #faad14;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: bold;
  font-weight: 600;
  &:hover {
    color: #fcc861;
    text-decoration: underline;
  }
`;


export const TextBtn = styled.button`
  color: #faad14;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: bold;
  font-weight: 600;
  padding: 4px 12px;
  border: 1px solid #faad14;
  border-radius: 12px;
  &:hover {
    color: #fff;
    background-color: #fcc861;
  }
`;