import * as actions from '../actions'
import BasicForm from './BasicForm';
import { connect } from 'react-redux'
import { fetchGiphy } from '../actions/fetchGiphy'
import { mapStateToProps } from './BasicForm';
import React from 'react';
import { reduxForm } from 'redux-form'
import { reset } from 'redux-form'


const mapDispatchToProps = (dispatch, state) => {
    return {
        onSubmit: data  => {
            dispatch(actions.submitResult(data))
        },
        onNew: () => {
            dispatch(fetchGiphy('spongebob'))
            dispatch(reset('SubstractForm'));
            dispatch(actions.newSubstract())
        }
    }
}

class SubstractForm extends BasicForm {
}


// decorate AddForm with reduxForm
SubstractForm = reduxForm({
    form: 'SubstractForm'
})(SubstractForm)

export default connect(mapStateToProps, mapDispatchToProps)(SubstractForm);
