// export default function SearchInput(props) {
//     const {onSubmit, value, setValue} = props
//     return (
//         <form className='form' onSubmit={onSubmit}>
//         <input type='text' className='input' placeholder='Input Here...' 
//         onChange={(e)  => (setValue(e.target.value))} 
//         value={value}></input>
//         <button className='add-button' type='submit'>add</button>
//     </form>
//     )
// }

import { ReactPropTypes } from "react";
import styles from './SearchInput.module.css'

const SearchInput = (props) => {
    return(
        <form className={styles.form} onSubmit={props.onSubmit}>
            <input type='text' className={styles.input} placeholder='Input Here...' 
            onChange={props.onChange} 
            value={props.value}></input>
            <button className={styles.addButton} type='submit'>add</button>
        </form>
    )
}

SearchInput.ReactPropTypes = {
    onSubmit: ReactPropTypes,
    onChange: ReactPropTypes,
    value: ReactPropTypes
}

export default SearchInput