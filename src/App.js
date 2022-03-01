import { useState } from 'react'
import NameReversed from './NameReversed.js'
import NameLength from './NameLength.js'
import Title from './Title.js'

import './styles.css'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name} />
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  )
}
