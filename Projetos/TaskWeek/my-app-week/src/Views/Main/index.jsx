
import { Routes, Route } from 'react-router-dom'

import PageLogin from '../Splash'
import Home from '../Home'

function Main() {
    return (
        <Routes>
            <Route path='/' element={<PageLogin />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
    )
}

export default Main