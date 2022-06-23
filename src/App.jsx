import React from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Document from "./Components/Document/Document";
import Study from "./Components/Study/Study";
import Blog from "./Components/Blog/Blog";
import Community from "./Components/Community/Community";
import styles from "./app.module.css"
const GlobalStyle = createGlobalStyle`
  ${reset}
  h1 {
    font-size: inherit;
    font-weight: inherit;
    padding:0;
    margin:0
  }

  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ul className={styles.container}>
      <Link to="/" className={styles.tit}>
        React
      </Link>
      <Link to="/Document"className={styles.tit} >
        문서
      </Link>
      <Link to="/Study" className={styles.tit}>
        자소서
      </Link>
      <Link to="/Blog"className={styles.tit}>
        블로그
      </Link>
      <Link to="/Community" className={styles.tit}>
        커뮤니티
      </Link>
      </ul>
      <Route path="/" exact component={Homepage} />
      <Route path="/Document" exact component={Document} />
      <Route path="/Study" exact component={Study} />
      <Route path="/Blog" exact component={Blog} />
      <Route path="/Community" exact component={Community} />
    </BrowserRouter>
  );
}


export default App;