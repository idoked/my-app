import React from 'react';
import c from './Place.module.css';
import List from './List/List';
import { DragDropContext } from 'react-beautiful-dnd';

class Place extends React.Component {
    state = this.props.data;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            }

        }
        this.setState(newState)
    };

    render() {

        return (
            <div className={c.wrapper}>
                <div className={c.content}>
                    <DragDropContext onDragEnd={this.onDragEnd}>

                        {this.state.columnOrder.map(columnId => {
                            const column = this.state.columns[columnId];
                            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                            return <List activeId={this.props.activeId} key={column.id} column={column} tasks={tasks} />
                        })}
                    </DragDropContext>
                </div>
                <div className={c.footer}>

                </div>
            </div>

        )


    }
}

export default Place;