import React from 'react';
import c from './Main.module.css';
import Place from './Place/Place';
import Sidebar from './Sidebar/Sidebar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeCategory: this.props.data.activeCategory
    }

    this.changeTabOnClick = this.changeTabOnClick.bind(this);
}

changeTabOnClick(index) {
    this.setState({
      activeCategory: index
    });
}
  render() {
    return (
      <div className={c.main}>
        <Sidebar activeId={this.state.activeCategory} click={this.changeTabOnClick} data={this.props.data} />
        <Place activeId={this.state.activeCategory} data={this.props.data} />
      </div>
    )
  }
}


export default Main;



