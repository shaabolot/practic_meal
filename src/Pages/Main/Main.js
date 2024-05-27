import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import { getLatestMeal } from '../../Redux-toolkit/MealSlice/MealSlice';
import { useDispatch } from "react-redux";


const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestMeal())
    },[])

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />

            </Routes>
        </div>
    )
}

export default Main