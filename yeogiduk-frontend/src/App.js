import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';
import ListPage from './pages/ListPage';
import RecommendPage from './pages/RecommendPage';
import MapPage from './pages/MapPage';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/recommend" element={<RecommendPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default App;
