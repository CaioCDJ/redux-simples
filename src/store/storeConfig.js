import {legacy_createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: function(state,action){
        
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return{
                    ...state,
                    min:action.payload
                }
            break;
            case 'NUM_MAX_ALTERADO':
                return{
                    ...state,
                    max:action.payload
                }
            break;
            default:
                return{
                    min:7,
                    max:31
                }
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