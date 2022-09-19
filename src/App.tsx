import { Header } from "./components/Header";
import { Content} from "./components/Content";
import { GlobalStyle } from "./styles/global";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Route, Routes } from "react-router-dom";


export function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route>
      <Route path="/" element={<Content />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
    </Routes>

    <GlobalStyle />
    </>
  );
}