import React from 'react'
import st from './Home.module.css'
import List from '../../Components/List/List'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    const { latest, } = useSelector((state) => state.products)

    console.log('lates>>>>>',latest)



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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home