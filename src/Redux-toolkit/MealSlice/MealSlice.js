import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from '../../Http/settings';

const initialState = {
    latest: [],
    infoMeal : [],
    loading: false,
    error: null,
};

export const getLatestMeal = createAsyncThunk(
    'latest/getLatestMeal',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const mealNumbers = [
                53075, 53074, 53073, 53072, 53071, 53070, 53069, 53068
            ];
            const results = await Promise.all(
                mealNumbers.map(async (number) => {
                    const result = await instance.get(`lookup.php?i=${number}`);
                    return result.data.meals;
                })
            );
            const combinedMeals = results.flat();
            dispatch(latestMeal(combinedMeals))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getInfoMeal = createAsyncThunk(
    "infoMeal/getInfoMeal",
    async (elem, {dispatch}) => {
        const result = await instance.get(`lookup.php?i=${elem}`)
        dispatch(infoIngredientMeal(result.data.meals))
    }
)

const mealSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        latestMeal: (state, action) => {
            state.latest = action.payload;
        },
        infoIngredientMeal: (state, action) => {
            state.infoMeal = action.payload
        }
    },
});

export const { latestMeal,
    infoIngredientMeal
} = mealSlice.actions;
export default mealSlice.reducer;
