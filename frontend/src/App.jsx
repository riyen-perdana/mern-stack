import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import PostDetailPage from './pages/PostDetailPage'
import { toast } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  )
}

export default App