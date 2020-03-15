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
  "sectionA sectionB sectionC"
  "sectionD sectionD sectionD";
  grid-template-rows: .1fr .95fr .95fr;
  grid-template-columns:  1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  height: 100vh;
  margin: 0;
  width: 100vw;
`;

const SectionA = styled.span`
  grid-area: sectionA;
  background-color: blanchedalmond;
  text-align: center;
  font-size: 20px;
  width: 100%;
`;
const SectionB = styled.span`
  grid-area: sectionB;
  background-color: indianred;
  text-align: center;
  font-size: 20px;
  width: 100%;
`;

const SectionC = styled.span`
  grid-area: sectionC;
  background-color: darkseagreen;
  text-align: center;
  font-size: 20px;
  width: 100%;
`;
const SectionD = styled.span`
  grid-area: sectionD;
  background-color: powderblue;
  text-align: center;
  font-size: 20px;
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
  SectionD,
  Header,
  // InputBox,
  // InputContainer,
  Button
};
