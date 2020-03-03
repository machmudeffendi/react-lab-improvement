import React from 'react';

export default class LimitLoad extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      realItem: props.items === null || props.items === undefined ? [] : props.items,
      itemShows: 0,
      items: [],
      loading: false,
    }
  }

  componentDidMount(){
    this.aiScrollCustomInfinity();
  }

  componentDidUpdate(){
    this.checkCondition();
  }

  checkCondition(){
    let count = ((this.state.itemShows + 5) >= this.state.realItem.length) ? this.state.realItem.length : this.state.itemShows + 5;
    if (this.refs.customscroll.scrollHeight === 400 && this.state.itemShows < this.state.realItem.length) {
      this.setState({itemShows: count})
      let arrayConcat = [];
      for (var i = 0; i < count; i++) {
        arrayConcat.push(this.state.realItem[i]);
      }
      this.setState({items: arrayConcat})
    }
  }

  aiScrollCustomInfinity(){
    this.checkCondition();
    this.refs.customscroll.addEventListener("scroll",() => {
      if (
        this.refs.customscroll.scrollTop + this.refs.customscroll.clientHeight >=
        this.refs.customscroll.scrollHeight && this.state.itemShows < this.state.realItem.length
      ) {
        this.customLoadMore();
      }
    });
  }

  customLoadMore(){
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        itemShows: ((this.state.itemShows + 20) >= this.state.realItem.length) ? this.state.realItem.length : this.state.itemShows + 20,
        loading: false,
      })

      this.customShowItems();
    }, 1000)
  }

  customShowItems(){
    let arrayConcat = [];
    for (var i = 0; i < this.state.itemShows; i++) {
      arrayConcat.push(this.state.realItem[i]);
    }
    this.setState({items: arrayConcat})
  }

  render(){
    const {itemShows, loading, items, realItem} = this.state;
    return (
      <React.Fragment>
        {this.props.children({itemShows, loading, items, realItem})}
      </React.Fragment>
    )
  }

}
