import {combineReducers} from '@reduxjs/toolkit';
import User from './reducer/User';

const rootReducer = combineReducers(
    {
        user:User,
    }
);
