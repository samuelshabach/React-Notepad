import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './add-notes.styles.scss';

class AddNote extends React.Component {


    state = {
            value: '',
            notes: [],
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            value: '',
            notes: [...this.state.notes, this.state.value]
        });
    }

    handleDelete = (noteIndex) => {
        let notes = [...this.state.notes];
        notes.splice(noteIndex, 1);
        this.setState({ notes: notes })
    }

    render () {
        
        return (
        <div className='add-notes'>
        <textarea  
            label='Type Note' 
            className='text-area' 
            onChange={this.handleChange}> 
        
        </textarea>
        <div className='buttons'>
        <CustomButton onSubmit={this.handleSubmit}>Add Note</CustomButton>
        <CustomButton onClick={this.handleDelete}>Delete Note</CustomButton>
        </div>
        </div>
        )
    }
}

export default AddNote;