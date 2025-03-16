import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MyRoutes } from "./routers/routes";
import { Device } from "./styles/breakpoints";
import { useThemeStore } from "./store/ThemeStore";
import { Sidebar } from "./components/organismos/sidebar/Sidebar";
import { useState } from "react";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const themeStyle = useThemeStore((state) => state.themeStyle);
  return (
    <ThemeProvider theme={themeStyle}>
      <Container className={sidebarOpen ? "active" : ""}>
        <GlobalStyles />
        <section className="contentSidebar">
          <Sidebar
            state={sidebarOpen}
            setState={() => setSidebarOpen(!sidebarOpen)}
          />
        </section>
        <section className="contentMenuambur">Menu amburguesa</section>
        <section className="contentRouters">
          <MyRoutes />
        </section>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  transition: 0.1s ease-in-out;
  color: ${({ theme }) => theme.text};
  .contentSidebar {
    display: none;
  }
  .contentMenuambur {
    position: absolute;
  }
  .contentRouters {
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuambur {
      display: none;
    }
    .contentRouters {
      grid-column: 2;
    }
  }
`;

export default App;
