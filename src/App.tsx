import React from 'react';
import Router from './route/BasicRoute';
import { IdProvider } from './store/context/IdContext';
import { MainContainer } from './style/AppStyled';

function App() {
  return (
    <IdProvider>
      <MainContainer>
        <Router />
      </MainContainer>
    </IdProvider>
  );
}

export default App;
