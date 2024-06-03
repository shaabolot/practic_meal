import React from 'react'
import st from './Home.module.css'
import List from '../../Components/List/List'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MealItem from '../../Components/Meal-item/Meal-item';

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { latest, } = useSelector((state) => state.products)

    console.log('lates>>>>>',latest)

    const handleMealInfo = (id, title) => {
        navigate(`/meal/${id}/${title}`)
    }



    return (
        <section>
            <div className="container">
                <div className={st.home_search}>
                    <form>
                        <div>
                            <input type="text" />
                        </div>
                        <div>
                            <button type='submit'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className={st.meal_item}>
                    <h3>Latest Meals</h3>
                    <div className={st.meal_item_content} >
                    <List 
                    items={latest && latest}
                    renderitem={(elem,i) => (
                        <MealItem
                        key={i}
                        onClick = {() => handleMealInfo(elem.idMeal, elem.strMeal)}
                        {...elem}
                        />
                    )}
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home