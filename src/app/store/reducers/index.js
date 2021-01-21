import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { gigReducer } from './gigReducer';
import { userReducer } from './userReducer';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  gigReducer,
  userReducer,
  firebaseReducer,
  firestoreReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));