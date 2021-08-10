import { createStoreHook, combineReducers  } from 'redux';

const reducers = combineReducers({
    prop1: function(state, action) {
        return {
            exemplo: 'Deu certo!',
        }
    },
    prop2: function(state, action) {
        return {
            exemplo: 'de novo, deu certo!',
        }
    },
});

function store() {
    return createStore(reducers)
};

export default store;