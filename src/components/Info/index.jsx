import { ReactPropTypes } from "react"
import styles from './Info.module.css'

const Info = (props) => {
    return (
        <div className={styles.info}>
        <div className={styles.infoTotal}>
          <p>Total Lists: {props.todosLength}</p>
          {/* <p>Total Lists: {todos.length}</p> */}
        </div>

        <div className={styles.infoTotal}>
          <p>{`Total Counts: ${props.totalCount}`}</p>
          {/* <p>{`Total Counts: ${getTotalCounts()}`}</p> */}
        </div>

        <button onClick={props.onDelete} className={styles.deleteAllButton}>
        {/* <button onClick={handleDeleteAll} className='delete-all-button'> */}
          Delete All List
        </button>
      </div>
    )
}

Info.ReactPropTypes = {
    todosLenght: ReactPropTypes,
    totalCount: ReactPropTypes,
    onDelete: ReactPropTypes
}

export default Info