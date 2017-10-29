import React from 'react';
import PropTypes from 'prop-types';

const AddComment =({addCommentAction}) => {
	let titleInput = null,
		descInput = null,
		addCommentForm = null,
		errorLabel = null;

	const handleClick = () => {
		errorLabel.innerHTML = "";
		if(addCommentForm.checkValidity()){
			addCommentAction(titleInput.value, descInput.value)
			addCommentForm.reset();
		} else {
			errorLabel.innerHTML = "Title and Description are required";
		}	
	}
	return (
		<div className="add-comment">
			<form ref={(form) => {addCommentForm = form}}>
				<label className="form-error" ref={(label) => {errorLabel = label}}></label>
				<input type="text" placeholder="Title" ref={(input) => { titleInput = input }} required/>
				<textarea placeholder="Description" ref={(input) => { descInput = input }} required>				
				</textarea>
				<button type="button" onClick={() => handleClick()}>Add</button>
			</form>
		</div>
	)
}

AddComment.propTypes = {
	addCommentAction: PropTypes.func.isRequired
}

export default AddComment;