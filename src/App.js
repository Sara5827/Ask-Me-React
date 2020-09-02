import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import PostsState from "./context/posts/PostsState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import TagsPage from "./pages/TagsPage/TagsPage";
import TagPage from "./pages/TagPage/TagPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostForm from "./pages/PostForm/PostForm";
import Post from "./pages/Post/Post";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserPage from "./pages/UserPage/UserPage";

import Header from "./components/header/Header";
import Alert from "./components/alert/alert";
import authContext from "./context/auth/authContext";

function App() {
  return (
    <AlertState>
      <AuthState>
        <PostsState>
          <div className='App'>
            <Header />
            <Alert />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/questions' component={QuestionsPage} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/add/question' component={PostForm} />
              <Route exact path='/tags' component={TagsPage} />
              <Route exact path='/users' component={UsersPage} />
              <Route exact path='/questions/:slug' component={Post} />
              <Route exact path='/users/:id' component={UserPage} />
              <Route exact path='/tags/:tagname' component={TagPage} />
            </Switch>
          </div>
        </PostsState>
      </AuthState>
    </AlertState>
  );
}

export default App;
