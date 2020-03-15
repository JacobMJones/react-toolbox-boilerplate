import styled from "styled-components";

const Header = styled.h1`
  grid-area: header;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const Body = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "sectionA sectionB sectionB"
    "sectionC sectionB sectionB";
  grid-template-rows: 0.1fr 1fr 1fr;
  grid-template-columns: 25% 50% 25%;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
  width: 100vw;
`;

const SectionA = styled.span`
  grid-area: sectionA;
  background-color: whitesmoke;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;
const SectionB = styled.span`
  grid-area: sectionB;
  background-color: lightyellow;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;
const SectionC = styled.span`
  grid-area: sectionB;
  background-color: lightyellow;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

// const InputBox = styled.input`
//   width: 60vw;
//   height: 10vh;
//   text-align: center;
//   font-size: 28px;
//   margin-top: 5vh;
// `;
// const InputContainer = styled.h1`
//   grid-area: input;
//   background-color: lightgreen;
//   text-align: center;
//   font-size: 40px;
//   width: 100%;
// `;

const Button = styled.button`
  width: 10vw;
  height: 10vh;
  font-size: 20px;
  margin-top: 12px;
`;
export {
  Body,
  SectionA,
  SectionB,
  SectionC,
  Header,
  // InputBox,
  // InputContainer,
  Button
};
