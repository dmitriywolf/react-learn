import React from 'react';

import './add-item.css';


export default class AddItem extends React.Component {
    render() {
        return (
            <div className="add-item">
                <button 
                    onClick = { () => this.props.onAddItem('Hello man') }
                    className="btn btn-outline-secondary" type="button">
                    Add Item
                </button>
            </div>
        );
    };
};
