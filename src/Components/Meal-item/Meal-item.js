import React from 'react'
import st from "./Meal-item.module.css"

const MealItem = (props) => {

    const {
        strMeal,
        strMealThumb,
        onClick,
        } = props

    return (
        <div onClick={onClick} className={st.meal_content}>
            <div className={st.meal_img}>
                <img src={strMealThumb} alt="" />
            </div>
            <p>{strMeal}</p>
        </div>
    )
}

export default MealItem