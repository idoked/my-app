import React from 'react';
import c from './Category.module.css';


class Category extends React.Component {
    render() {
        return (
            <div className={c.body + ' ' + (this.props.activeId === this.props.column.id ? c.active : '')} key={this.props.column.id} >
                <div className={c.ico}>
                    <img src={this.props.column.ico} alt="" />
                </div>
                <span>{this.props.column.title}</span>
            </div>
        )

    }
}
export default Category;