import {legacy_createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: function(state,action){
        return {
            min:9,
            max:99
        }
    },
    nomes: function(state, action){
        return[
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
});


function storeConfig(){
    return legacy_createStore(reducers);
}

export default storeConfig;