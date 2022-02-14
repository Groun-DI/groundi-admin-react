import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store/store';

type TokenState = {
    isTokenIssue: boolean,
    accessToken: string
}

const initialState: TokenState = {
    isTokenIssue: false,
    accessToken: ''
}

export const tokenReducer = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{ isTokenIssue: boolean, accessToken: string }>) => {
            state.isTokenIssue = action.payload.isTokenIssue;
            state.accessToken = action.payload.accessToken;
            console.log(action.payload.accessToken);
        },
        clearToken: (state) => {
            state.isTokenIssue = false;
            state.accessToken = '';
        }
    }
})

export const { setToken, clearToken } = tokenReducer.actions;
export const selectToken = (state: RootState) => state.token.accessToken;
export const selectIsTokenIssue = (state: RootState) => state.token.isTokenIssue;
export default tokenReducer.reducer;