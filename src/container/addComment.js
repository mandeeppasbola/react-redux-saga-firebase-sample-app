import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddComment from '../components/addComment';
import {addComment} from '../actions';

const AddCommentContainer = ({actions}) => (
    <AddComment addCommentAction={actions.addComment}/>
)    

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators({addComment}, dispatch)
    }
)

AddCommentContainer.propTypes = {
	actions: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(AddCommentContainer);