
import React from 'react'
import Products from './components/Products'
import data from './components/data'

const App = () => {
  return (
    <div>
      <Products data={data}/>
    </div>
  )
}

export default App
