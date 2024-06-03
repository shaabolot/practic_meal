import React,{useEffect} from 'react'
import st from "./Info-ingredients.module.css";
import { getInfoMeal } from '../../Redux-toolkit/MealSlice/MealSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import List from '../List/List';


const InfoIngredienst = () => {

    const { idMeal } = useParams()
    const dispatch = useDispatch();
    const {infoMeal} = useSelector((state) => state.products)
    console.log('infoMeal>>>',infoMeal)

    useEffect(() => {
        dispatch(getInfoMeal(idMeal))
    },[])
    
    return (
        <div className='container'>
            <List 
            items={infoMeal && infoMeal}
            renderitem={(elem, i) => (
                <div key={i} className={st.infoIngredients}>
                    <div className={st.title} >
                <h2>{elem.strMeal}</h2>
                <h2>Ingredients</h2>
                    </div>
                    <div className={st.images}>
                    <div className={st.first_img} >
                    <img src={elem.strMealThumb} alt="" />
                <a href="">Watch Video You tube</a>
                    </div>
                <div className={st.second_img} >
                    {elem.strIngredient1 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png`} alt="" />
                            <p>{elem.strIngredient1}</p>
                        </div>
                    ) : null }
                </div>
                    </div>
                </div>
            )}
            />
        </div>
    )
}

export default InfoIngredienst