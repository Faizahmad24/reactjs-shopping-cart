import { useState } from 'react'
// import classnames from 'classnames'
import './App.css'
// import plusIcon from './assets/plus-icon.svg'
// import minusIcon from './assets/minus-icon.svg'
import Navbar from './components/Navbar'
import Container from './components/Container'
import SearchInput from './components/SearchInput'
import Info from './components/Info'
import Todos from './components/Todos'
import Empty from './components/Empty'

function App() {
  // const [count, setCount] = useState(0)
  const  [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title : 'Susu Ultra', count: 1},
    {title : 'Burger Klenger', count: 1},
    {title : 'Sop Durian', count:1}
  ])

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1
    setTodos(newTodos)
  }

  const handleSubtractionCount = (index) => {
    const newTodos = [...todos]

    if(newTodos[index].count > 0) {
      // selama jumlah count masih lebih dari 0 lalu lakukan pengurangan
       newTodos[index].count = newTodos[index].count - 1
    } else {
      // kalo nilainya sudah 0 dan masih dkikurangin maka hapus array value dengan index yg sesuai
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value) {
      alert('data tidak boleh berisi kosong!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count : 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }

  const handleDeleteAll = ()  => {
    setTodos([])
  }
  return (
    <>

    <Navbar/>

      <Container>
        {/* <SearchInput onSubmit={handleSubmit} value={value} setValue={setValue}/> */}
        <SearchInput onSubmit={handleSubmit} value={value} onChange={(e) => setValue(e.target.value)}/>

        <Info todosLength={todos.length} totalCount={getTotalCounts()} onDelete={() => setTodos([])}/>

        {todos.length > 0 ? (
          <Todos todos={todos} onSubtraction={(index) => handleSubtractionCount(index)} onAddition={(index) => handleAdditionCount(index)}/>
        )
        : (<Empty/>)}
      </Container>
    </>
  )
}

export default App
