import {configureStore} from '@reduxjs/toolkit'
import sliceApp from './sliceApp'

export const store = configureStore({
    reducer:{
        Appslide:sliceApp
    }
})