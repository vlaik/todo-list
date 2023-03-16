import { useState } from 'react'
import { InputComponent } from '../../component'

import './mainPage.css'


export const MainPage = () => {
    const [value, setValue] = useState<string>('')
    return(
        <div className='mainWrapper'>
        <div className='mainHeader'>
            <h1>Todo List</h1>
        </div>
        <div className='mainContent'>
            <div className='mainInputContainer'>
            <InputComponent value={value} onChange={setValue}/>
            </div>
        </div>
        </div>
    )
}