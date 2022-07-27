import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Home from 'pages/Home';
import Photo from 'features/Photo';
import AddEditPage from 'features/Photo/pages/AddEdit';
import Main from 'features/Photo/pages/Main';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="photos" element={<Photo />}>
            <Route path={'/photos/'} element={<Main />} />
            <Route path={'add'} element={<AddEditPage />} />
            <Route path={`:photoId`} element={<AddEditPage />} />
          </Route>
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
