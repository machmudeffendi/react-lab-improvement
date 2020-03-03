import React from 'react';

import LimitLoad from './comps/LimitLoad';
import AutoInfinityLoad from './comps/AutoInfinityLoad';

export default class ScrollContent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: ["a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d"]
    }
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <AutoInfinityLoad/>
        </div>
        <div className="col-md-6">
          <LimitLoad items={this.state.items} >
            {({items, realItem, loading}) => (
              <React.Fragment>
                <h2>Scroll Custom by Machmud : data Max {realItem.length} data first show 10</h2>
                <ul ref="customscroll" style={{ height: "400px", overflow: "auto" }}>
                  {items.map((item, index) => (
                    <li key={index}>{index} Item {item}</li>
                  ))}
                </ul>
                {loading && <span>Loading...</span>}
              </React.Fragment>
            )}
          </LimitLoad>
        </div>
      </div>
    )
  }
}
