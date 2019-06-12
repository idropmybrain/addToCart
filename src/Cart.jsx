import React from 'react';


export default class Cart extends React.Component{
  constructor(props){
    super(props);
    console.log('Hi: ',sessionStorage.getItem('selected'));
    this.state = {
      data: sessionStorage.getItem('selected') && JSON.parse(sessionStorage.getItem('selected')) || []
    }
  }
  
  removeFromCart = (index) => {
    // console.log("Liked: ", data[index])
    var tempArr = this.state.data;
    tempArr[index].isSelected = false;
    this.setState({data: tempArr});
    sessionStorage.setItem('selected',JSON.stringify(tempArr));
  }
  
  render(){
    return(
      <div className="d-flex flex-wrap container">
        {this.state.data.map((item, index) =>   item.isSelected && 
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex customMobile">
            <div className=" flex-column pr-2 p-2 justify-content-between align-items-center card rounded-0 w-100 m-3 shadow">
              <img className="d-flex " style={{'width':'60px','height':'60px','borderRadius':'50%'}} src={item.avatar}/>
              <div className="d-flex my-auto p-1" style={{"fontSize":'14px'}} />
              <span className="ml-2" style={{'fontSize':'10px','color':'#bebebe'}}>{item.email}</span>
              <div className="w-100 mt-2">
                <button className="btn btn-outline-secondary w-100 " onClick={()=>this.removeFromCart(index)}>
                  Remove 
                  <i class="fa fa-trash pl-3" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        )
        }
      </div>
    )
  }
}