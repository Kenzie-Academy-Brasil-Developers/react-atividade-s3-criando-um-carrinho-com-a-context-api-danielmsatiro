import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.type === "catalogue" ? "red" : "blue")};
  margin: 15px auto;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  h1 {
    width: 100%;
  }
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  min-width: 300px;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px;
  background-color: gray;
`;
