import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const dummyReducer = () => null

export default combineReducers({
    form: formReducer,
    example: dummyReducer
});