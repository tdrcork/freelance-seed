import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/ngrx/auth.reducers';

export interface AppState {
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer
}
