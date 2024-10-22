import { configureStore } from '@reduxjs/toolkit';
import { reducer as cakeReducer } from '../feature/cakeSlice';
import { reducer as iceCreamReducer } from '../feature/icecreamSliceSlice';
import { reducer as userReducer } from '../feature/userSlice';

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