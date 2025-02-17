import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userId: 1,
    firstName: 'Sam',
    lastName: 'Bahadur',
};

export const User = createSlice({
    name: 'user',
    initialState: initialState,
    reducers:{
        updateFirstName: (state,actions) => {
            state.firstName = actions.payload.firstName;
        },
    },
});

export const {updateFirstName} = User.actions;
export default User.reducers;

