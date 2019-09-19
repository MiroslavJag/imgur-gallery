import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'
import ImageGalleryList from './components/ImageGalleryList'
import ImageGalleryDetails from './components/ImageGalleryDetails'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/gallery/:id" component={ImageGalleryDetails} />
          <Route path="/" component={ImageGalleryList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
