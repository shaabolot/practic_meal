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
                    {elem.strIngredient2 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient2}.png`} alt="" />
                            <p>{elem.strIngredient2}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient3 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient3}.png`} alt="" />
                            <p>{elem.strIngredient3}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient4 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient4}.png`} alt="" />
                            <p>{elem.strIngredient4}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient5 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient5}.png`} alt="" />
                            <p>{elem.strIngredient5}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient6 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient6}.png`} alt="" />
                            <p>{elem.strIngredient6}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient7 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient7}.png`} alt="" />
                            <p>{elem.strIngredient7}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient8 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient8}.png`} alt="" />
                            <p>{elem.strIngredient8}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient9 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient9}.png`} alt="" />
                            <p>{elem.strIngredient9}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient10 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient10}.png`} alt="" />
                            <p>{elem.strIngredient10}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient11 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient11}.png`} alt="" />
                            <p>{elem.strIngredient11}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient12 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient12}.png`} alt="" />
                            <p>{elem.strIngredient12}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient13 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient13}.png`} alt="" />
                            <p>{elem.strIngredient13}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient14 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient14}.png`} alt="" />
                            <p>{elem.strIngredient14}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient15 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient15}.png`} alt="" />
                            <p>{elem.strIngredient15}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient16 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient16}.png`} alt="" />
                            <p>{elem.strIngredient16}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient17 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient17}.png`} alt="" />
                            <p>{elem.strIngredient17}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient18 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient18}.png`} alt="" />
                            <p>{elem.strIngredient18}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient19 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient19}.png`} alt="" />
                            <p>{elem.strIngredient19}</p>
                        </div>
                    ) : null }
                    {elem.strIngredient20 ? (
                        <div className={st.second_item}>
                            <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient20}.png`} alt="" />
                            <p>{elem.strIngredient20}</p>
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