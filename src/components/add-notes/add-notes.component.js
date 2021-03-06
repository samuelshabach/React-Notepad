import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './add-notes.styles.scss';

const AddNote  = (props) => {
    return (
        <div>
            {
                props.notes.map((note, index) => {
                    return (
                        <ul key={index} className="list-unstyled text-left pl-3 col-sm-11 mt-4">
                            <div className="row border py-2">
                                <div className="col-sm-7">
                                    <li className="mt-1">
                                        <input type="checkbox" className="mr-2" />
                                        {note}
                                    </li>
                                </div>

                                <div className="col-sm-3 text-right">
                                    <span className="btn btn-danger btn-sm my-1" onClick={props.delete.bind(index)}>
                                        delete
                                    </span>
                                </div>
                            </div>

                        </ul>
                    )
                })
            }
        </div>
    );
}

export default AddNote;