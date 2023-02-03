import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './Dashboard';
import Dash from './Dash';
import PagenotFound from './PagenotFound';
import App from './App';
import PrivateRoute from './SecureRoute';
import { useNavigate } from 'react-router'
import OutsideClickHandler from 'react-outside-click-handler';
import Btn_c from './Btnc';
import User from './User';

function Main() {

  return (
    <BrowserRouter>
      <Fragment>

        <Routes>

          <Route index element={<App />} />
          <Route path="/dash" element={<Dashbord />} />

          <Route exact path='/mdash' element={<PrivateRoute />}>
            <Route exact path='/mdash' element={<OutsideClickHandler onOutsideClick={null}>  <Dash /> </OutsideClickHandler>} />
          </Route>

          <Route exact path='/addapp' element={<PrivateRoute />}>
            <Route exact path='/addapp' element={<Btn_c />} />
          </Route>

          <Route exact path='/user' element={<PrivateRoute />}>
            <Route exact path='/user' element={<User />} />
          </Route>


          <Route path="*" element={<PagenotFound />} />

        </Routes>
      </Fragment>
    </BrowserRouter>

  )
}
export default Main;