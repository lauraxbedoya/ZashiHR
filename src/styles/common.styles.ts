import styled from "styled-components";

export const StyledMainButton = styled.button`
  /* background-color: #2ea44f; */
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  /* color: #fff; */
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
`;

export const StyledMainTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.text.main};
  font-family: ${props => props.theme.fonts[1]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 5%;
  font-family: ${props => props.theme.fonts[1]};
  text-align: center;
`;

export const MainDiv = styled.div`
  width: 25%;
  height: 350px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
`;

export const StyledMainInputs = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  color: black;
  padding: 5px;
`;

export const StyledInputNumber = styled.input`
  width: 50px;
  border: none;
  border-bottom: 1px solid grey;
  padding: 3px;
  margin-left: 10px;
`;