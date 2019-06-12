import React from 'react';



import './App.css';


import data from './data.json';
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: sessionStorage.getItem('selected') && JSON.parse(sessionStorage.getItem('selected')) || data.map((item) => { item.isSelected = false; return item;})
    }
  }
  
  changeStatus = (index) => {
    console.log("Liked: ", data[index])
    var tempArr = this.state.data;
    tempArr[index].isSelected = true;
    this.setState({data: tempArr});
    sessionStorage.setItem('selected',JSON.stringify(tempArr));
  }
  
  
  render(){
    return(
      <div className="col-12 d-flex flex-wrap">
        {this.state.data.map((item, index) =>  
          (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <div className=" flex-column pr-2 p-2 justify-content-between align-items-center card rounded-0 w-100 m-3 shadow">
                <img className="d-flex " style={{'width':'60px','height':'60px','borderRadius':'50%'}} src={item.avatar}/>
                <div className="d-flex my-auto p-1" style={{"fontSize":'14px'}} />
                {/* {this.showMatchingName()} */}
                {/* {item.first_name+' '+item.last_name} */}
                {/* </div> */}
                <span className="ml-2" style={{'fontSize':'10px','color':'#bebebe'}}>{item.email}</span>
                <div className="w-100 px-4 mt-2">
                  <button className="btn btn-outline-secondary w-100" onClick={()=>{this.changeStatus(index)}}>Add to Cart</button>
                </div>
                  </div>

            </div>))
        }
      </div>

    )
  }
  
  
}

export default Home;