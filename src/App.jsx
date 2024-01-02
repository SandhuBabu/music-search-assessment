import React from 'react'
import { SearchForm } from './components/SearchForm'
import { Route, Routes } from 'react-router-dom'
import { SearchResults } from './components/SearchResults'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <main className='container'>
      <Routes>
        <Route path='/' element={<SearchForm />} />
        <Route path='/results' element={<SearchResults />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </main>
  )
}

export default App

