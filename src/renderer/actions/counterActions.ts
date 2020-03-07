import { Action, ActionCreator } from 'redux';

export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export interface IncrementAction extends Action {
    type: 'counter/INCREMENT';
}
export interface DecrementAction extends Action {
    type: 'counter/DECREMENT';
}

export const increment: ActionCreator<IncrementAction> = () => ({
    type: INCREMENT
});

export const decrement: ActionCreator<DecrementAction> = () => ({
    type: DECREMENT
});

export type CounterAction = IncrementAction | DecrementAction;
