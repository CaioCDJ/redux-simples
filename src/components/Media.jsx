import React from 'react';
import Card from './card';
import { connect } from 'react-redux';

function Media(props){
    
    const {min,max} = props;
    
    return(
        <Card title="Media dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max+min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}
// props = state do redux
function mapStateToProps(state){
    return {
        min:state.numeros.min,
        max:state.numeros.max,
    }
}

export default connect(mapStateToProps)(Media);