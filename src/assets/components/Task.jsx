/* eslint-disable react/prop-types */

const Task = (props) => {
  const { task, onCompletedTask, onRemove } = props
  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        {task.completed === true ? (
          <div className='flex w-full justify-start items-center space-x-2'>
            <img
              className='w-4 h-4 '
              src='./src/assets/img/checkmark.png'
              alt=''
            />
            <p className='w-[300px] font-medium text-lg text-gray-400'>
              {task.task}
            </p>
          </div>
        ) : (
          <p className='w-[300px] font-medium text-lg text-black'>
            {' '}
            {task.task}
          </p>
        )}
      </div>
      <div>
        <button
          onClick={onCompletedTask}
          className='bg-green-500 py-1 px-3 rounded-md text-white text-xs mr-2'
        >
          Done
        </button>
        <button
          onClick={onRemove}
          className='bg-red-500 py-1 px-3 rounded-md text-white text-xs'
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default Task;
