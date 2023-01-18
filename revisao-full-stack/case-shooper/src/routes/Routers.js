import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import EndPage from '../pages/EndPage/index'
export const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/end-page' element={<EndPage/>} />

            </Routes>

        </BrowserRouter>
    )
} 
export default Routers;