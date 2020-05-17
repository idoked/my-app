import React from 'react';
import c from './List.module.css';
import { Droppable } from 'react-beautiful-dnd'
import Task from '../../Task/Task'


class List extends React.Component {
    render() {
        return (
            <div className={c.body + ' ' + (this.props.activeId === this.props.column.id ? c.show : '')}>
                <div className={c.header}>
                    <div className={c.ico}>
                        <img src={this.props.column.ico} alt={this.props.column.title} />
                    </div>
                    <h2 className={c.title} >{this.props.column.title}</h2>
                </div>

                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {this.props.tasks.map((task, index) => (
                                <Task key={task.id} index={index} task={task} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

            </div>
        )
    }
}


export default List;