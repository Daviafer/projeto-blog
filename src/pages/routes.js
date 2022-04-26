import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Post } from './post';

import { Posts } from './posts'

const AppRoutes  = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Posts />} />
      <Route exact path='/post/:id' element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;