import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../feature/cakeSlice';
import iceCreamReducer from '../feature/icecreamSlice';
import userReducer from '../feature/userSlice';

// const logger = require('redux-logger').createLogger();


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        users: userReducer
    },
    // middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

export default store