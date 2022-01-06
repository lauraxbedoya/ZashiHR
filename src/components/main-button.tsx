import styled from "styled-components";

type ButtonsTypes = {
  text: string,
  onClick: () => any,
}

const MainButton = ({ text, onClick }: ButtonsTypes) => {

  const Button = styled.button`
    background-color: #2ea44f;
    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
    box-sizing: border-box;
    color: #fff;
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
    user-select: none;
    vertical-align: middle;
    white-space: nowrap; 
  `;

  return(
    <Button onClick={onClick}>{text}</Button>
  )
};

export default MainButton;