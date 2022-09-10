import { createGlobalStyle } from "styled-components";
import { Variables } from "./Variables";

export const GlobalStyles = createGlobalStyle`
  ${Variables};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  // Scrollbar styles 
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }
  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--black);
    color: var(--white);
    max-width: var(--max-width);
  }
  ul, li, ol {
    list-style: none;
  }
  p{
    color: var(--gray);

    margin: 2rem 0;
      font-size: 14px;
      line-height: 1.3rem;
      letter-spacing: 2px;
  }
  a {
    text-decoration: none;
    color: var(--white);
    /* transition: var(--transition); */
    :hover {
      color: var(--gray)
    }
  }
  .link {
    position: relative;
    display: inline-table;

    :hover::after {
      width: 100%;
    }
    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--gray);
      transition: var(--transition);
      
    }
  }
  table th, table td {
  border: 1px solid var(--gray);
  padding: 8px;
}
.content{
  /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    align-items: center;
    justify-content: space-between; */


}
`;
