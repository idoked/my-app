import React from 'react';
import c from './Sidebar.module.css';



class Sidebar extends React.Component {
    doClick(index) {
        this.props.click(index);
    }

    render() {
        return (
            <div className={c.sidebar}>
                <div className={c.content}>
                    {
                        this.props.data.columnOrder.map(columnId => {
                            const column = this.props.data.columns[columnId];
                            return (
                                <div onClick={this.doClick.bind(this, column.id)} key={column.id} className={c.body + ' ' + (this.props.activeId === column.id ? c.active : '')}>
                                <div className={c.ico}>
                                    <img src={column.ico} alt="" />
                                </div>
                                <span>{column.title}</span>
                            </div>
                                )
                        })
                    }
                </div>
                <div className={c.footer}>

                </div>
            </div>
        )
    }

}
export default Sidebar;