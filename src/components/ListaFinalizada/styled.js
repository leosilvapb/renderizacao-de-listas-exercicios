import styled from "styled-components";

export const Tarefa = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  transition: background-color 0.3s;
  &:hover {
    background-color: lightblue;
  }
  opacity: 0.5;
  p {
    text-decoration: line-through;
  }
`;
