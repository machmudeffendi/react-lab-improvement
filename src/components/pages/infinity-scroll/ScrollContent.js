import React from 'react';

export default class ScrollContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: 20,
      realItem: 100,
      itemShows: 10,
      loading: {
        ground: false,
        custom: false
      },
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


    this.aiScrollCustomInfinity();
  }

  // For Custom
  componentDidUpdate(){
    if (this.refs.customscroll.scrollHeight === 400 && this.state.itemShows < this.state.realItem) {
      this.setState({itemShows: this.state.itemShows + 5})
    }
  }
  // For Custom End

  // Default
  loadMore(){
    this.setState({ loading:{ ground: true } });
    setTimeout(() => {
      this.setState({ items: this.state.items + 20, loading: {ground: false} })
    })
  }

  showItems(){
    let items = [];
    for (var i = 0; i < this.state.items; i++) {
      items.push(<li key={i}>Items {i}</li>)
    }
    return items;
  }
  // Default End

  // Custom
  aiScrollCustomInfinity(){
    console.log(this.refs.customscroll)

    this.refs.customscroll.addEventListener("scroll",() => {
      if (
        this.refs.customscroll.scrollTop + this.refs.customscroll.clientHeight >=
        this.refs.customscroll.scrollHeight && this.state.itemShows < this.state.realItem
      ) {
        this.customLoadMore();
      }
    });
  }

  customLoadMore(){
    this.setState({ loading:{ custom: true } });
    setTimeout(() => {
      this.setState({ itemShows: this.state.itemShows + 20, loading: {custom: false} })
    })
    console.log(this.refs.customscroll)
  }

  customShowItems(){
    let items = [];
    for (var i = 0; i < this.state.itemShows; i++) {
      items.push(<li key={i}>Items {i}</li>)
    }
    return items;
  }
  // Custom End

  render(){
    return(
      <div>
        <h1 className="mb-5">Scroll Load Content: this infinity</h1>
        <ul ref="myscroll" style={{ height: "400px", overflow: "auto" }}>
          {this.showItems()}
        </ul>
        {this.state.loading.ground && <p>Loading...</p>}

        <h2>Scroll Custom by Machmud : data Max 100 data first show 10</h2>
        <ul ref="customscroll" style={{ height: "400px", overflow: "auto" }}>
          {this.customShowItems()}
        </ul>
        {this.state.loading.custom && <p>Loading...</p>}
      </div>
    )
  }
}
