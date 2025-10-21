import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import { rootReducer, RootState } from '../reducers';

const configureStore = (initialState?: Partial<RootState>) => {
    const middlewares: Middleware[] = [];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    return createStore(rootReducer, initialState as any, enhancer);
};

const store = configureStore();

// Hot module replacement for reducers
if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { rootReducer: nextRootReducer } = require('../reducers');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
export type AppDispatch = typeof store.dispatch;
