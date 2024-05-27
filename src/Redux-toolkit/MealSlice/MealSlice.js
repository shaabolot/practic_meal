import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from '../../Http/settings';

const initialState = {
    latest: [],
    loading: false,
    error: null,
};

export const getLatestMeal = createAsyncThunk(
    'meals/getLatestMeal',
    async (_, { rejectWithValue }) => {
        try {
            const mealNumbers = [
                53075, 53074, 53073, 53072, 53071, 53070, 53069, 53068,
            ];
            const results = await Promise.all(
                mealNumbers.map(async (number) => {
                    const result = await instance.get(`lookup.php?i=${number}`);
                    return result.data.meals;
                })
            );
            const combinedMeals = results.flat();
            return combinedMeals;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        latestMeal: (state, action) => {
            state.latest = action.payload;
        },
    },
});

export const { latestMeal } = mealSlice.actions;
export default mealSlice.reducer;
