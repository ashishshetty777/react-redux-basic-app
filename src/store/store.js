import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

const middlewares = [];

export default function configureStore() {
	const store = createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
	return store;
}