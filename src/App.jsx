import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from "./Views/CreateAccount";
import TextsAdmin from "./Views/Admin/TextsAdmin";
import TextsClient from "./Views/Client/TextsClient";
import ModifyAccount from "./Views/ModifyAccount";
import NotFoundUser from "./Views/NotFoundUser";
import TextInfos from "./Views/Admin/TextInfos";
import StatsAdmin from "./Views/Admin/StatsAdmin";
import Text from "./Views/Text";

export default () => (
  <>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login connexionType="Client"/>}/>
        <Route path="/admin-login" element={<Login connexionType="Admin"/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/main-admin" element={<TextsAdmin/>}/>
        <Route path="/main-client" element={<TextsClient/>}/>
        <Route path="/modify-account" element={<ModifyAccount/>}/>
        <Route path="/user-not-found" element={<NotFoundUser/>}/>
        <Route path="/add-text" element={<TextInfos/>}/>
        <Route path="/modify-text" element={<TextInfos/>}/>
        <Route path="/stats" element={<StatsAdmin/>}/>
        <Route path="/text" element={<Text/>}/>
      </Routes>

    </HashRouter>
  </>
);
