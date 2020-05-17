import React from 'react';
import c from './Task.module.css';
import { Draggable } from 'react-beautiful-dnd'

class Task extends React.Component {
    render() {

        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className={c.body + ' ' + (snapshot.isDragging ? c.active: '')} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <label className={c.check}>
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        <div className={c.content}>
                            <div className={c.title}>{this.props.task.title}</div>
                        </div>
                    </div>
                )}
            </Draggable>


        )
    }
}


export default Task;