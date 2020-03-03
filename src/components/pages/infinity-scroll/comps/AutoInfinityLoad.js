import React from 'react';

export default class AutoInfinityLoad extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: 20,
      loading: false,
    }
  }

  componentDidMount(){
    // Detect when scrolled to bottom
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
        this.loadMore();
      }
    });
  }

  loadMore(){
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ items: this.state.items + 20, loading: false })
    }, 1000)
  }

  showItems(){
    let items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(<li key={i}>Items {i}</li>)
    }
    return items;
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="mb-5">Scroll Load Content: this infinity</h2>
        <ul ref="myscroll" style={{ height: "400px", overflow: "auto" }}>
          {this.showItems()}
        </ul>
        {this.state.loading && <p>Loading...</p>}
      </React.Fragment>
    )
  }
}
