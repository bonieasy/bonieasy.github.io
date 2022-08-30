import { Header } from "./components/Header";
import { Content} from "./components/Content";
import { GlobalStyle } from "./styles/global";
import { About } from "./components/About";
import { Projects } from "./components/Projects";


export function App() {
  return (
    <>
    <Header />
    <Content />
    <About />
    <Projects />
    <GlobalStyle />
    </>
  );
}