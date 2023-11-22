import { ReactPropTypes } from "react";
// import classnames from 'classnames'


import styles from './Todos.module.css'

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = (props) => {
    return (
        <div className={styles.todos}>{props.todos.map((todo, index, arr)   => {
            return (
  
              // classname di bawah melakukan pengecekan selama index array bukan index terakhir maka akan ditambahkan style border bottom
              <div key={index} className={`${styles.todo} ${!(arr.length == index +1) && [styles.todoDivider]}`}>
                {todo.title}
                <div className={styles.todoIconWrapper}>
                  <div className={styles.todoCount}>{todo.count}</div>
                  <button onClick={() => props.onSubtraction(index)} className={styles.todoActionButton}>
                    <img src={minusIcon} alt='minus icon'></img>
                  </button>
                  <button onClick={() => props.onAddition(index)} className={styles.todoActionButton}>
                    <img src={plusIcon} alt='plus icon'></img>
                  </button>
                </div>
              </div>
            )
          })}</div>
    )
}

Todos.ReactPropTypes = {
    // todos: ReactPropTypes.arrayOf(ReactPropTypes.shape({
    //     title: ReactPropTypes,
    //     count: ReactPropTypes
    // })),
    onSubtraction: ReactPropTypes,
    onAddition: ReactPropTypes
}

export default Todos