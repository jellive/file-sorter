import { Action, ActionCreator } from 'redux';

export const SET_SORT = 'SET_SORT';

export interface SetSortAction extends Action {
    type: 'SET_SORT';
}

export const setSort: ActionCreator<SetSortAction> = () => ({
    type: SET_SORT
});

export type SortAction = SetSortAction;
