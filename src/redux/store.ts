import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {createStore} from 'redux'
import { reducer } from './reducer/reducer'


export const store = createStore(reducer)




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector