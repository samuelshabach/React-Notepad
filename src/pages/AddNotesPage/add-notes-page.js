import React from 'react';

import AddNote from '../../components/add-notes/add-notes.component';

class AddNotesPage extends React.Component {

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

    render(){
        return (
            <div>
        <div className="App my-5 pt-5">
          <div className="card col-sm-4 mt-5 h-100">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="row no-gutters">
                    <div className="col-sm-11 d-flex flex-row">
                      <input type="text" placeholder="add note" value={this.state.value} onChange={this.handleChange} className="form-control" />
                      <button className="btn btn-danger btn-sm ml-2" onClick={this.handleSubmit}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <AddNote
                    notes={this.state.notes}
                    delete={this.handleDelete}
                  />
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>
        )
    }
} 

export default AddNotesPage;