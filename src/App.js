import React from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import Forkify from './Containers/Forkify/Forkify'

function App() {
  return (
    <Layout>
      <Forkify />
    </Layout>
  );
}

export default App;
