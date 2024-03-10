import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux';
import {alertsSlice} from './alertsReducer';

const rootReducer=combineReducers({
    alerts:alertsSlice.reducer,
})
    
const store=configureStore({
    reducer:rootReducer,
})

// Example store configuration in a file (e.g., store.js)
// import { createStore } from 'redux';
// import rootReducer from './reducers'; // replace with your actual reducer

// const store = createStore(rootReducer);
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Replace with your actual reducer

// const store = configureStore({
//   reducer: rootReducer,
//   // Other configuration options can be added here
// });

export default store;



