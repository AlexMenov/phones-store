import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppContainer>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </AppContainer>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
