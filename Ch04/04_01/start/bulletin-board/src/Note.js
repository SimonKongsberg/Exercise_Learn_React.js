import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppy0 from 'react-icons/lib/fa/floppy0'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state ={
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
    }
    edit(){
        this.setState({
            editing: true
        })
    }
    remove(){
        alert('removing note')
    }

    renderForm() {
        return(
            <div className="note">
                <form>
                    <textarea />
                    <button ><FaFloppy0 /></button>
                </form>
            </div>
        )
    }

    render()
        {
        return (
            <div className="note">
                <p>Learn React </p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencil /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>            
                </span>
            </div>
        )
    }
}

export default Note