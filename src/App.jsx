import { useState } from 'react'
import Task from './assets/components/Task'

function App() {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  const handleItem = (e) => {
    e.preventDefault()
    setItem(e.target.value)
  }

  const addToList = () => {
    if (item.trim() !== '') {
      const newItem = {
        task: item,
        completed: false,
      }
      const newList = [...list, newItem]
      setList(newList)
      setItem('')
    } else {
      alert('Please enter an item')
    }
  }

  const removeFromList = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  const completedTask = (index) => {
    const newList = [...list]
    newList[index] = {
      ...newList[index],
      completed: true,
    }
    setList(newList)
  }

  // console.log(list);
  return (
    <div className='h-100 w-full flex items-center justify-center bg-teal-lightest'>
      <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
        <div className='mb-4'>
          <div className='flex justify-between items-center font-Lato'>
            <h1 className='text-2xl font-bold text-grey-darkest'>Todo List</h1>
            <p className='text-grey-darkest text-sm'>
              Item added
              <span className='bg-blue-500 text-white text-xs py-1 px-2 rounded ms-2'>
                {list.length}
              </span>
            </p>
          </div>
          <div className='flex mt-4'>
            <input
              onChange={handleItem}
              value={item}
              className='appearance-none border rounded w-full py-2 px-3 mr-2 text-grey-darker focus:outline-none focus:shadow-outline ring-1 ring-blue-100'
              placeholder='Add Todo'
            />
            <button
              onClick={addToList}
              className='bg-blue-500 py-2 px-3 rounded-md text-white text-base'
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {list.map((task, index) => (
            <Task
              key={index}
              task={task}
              onCompletedTask={() => completedTask(index)}
              onRemove={() => removeFromList(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App


