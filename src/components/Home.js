import React from 'react';
import Footer from './Footer';
import Routes from '../routes';

const Home = () => (
  <>
    <main>
      <Routes />
    </main>
    <Footer home="/" feed="/feed" progress="/progress" settings="/settings" />
  </>
);

export default Home;
