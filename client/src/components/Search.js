import React, { Component } from "react";
import Calendar from "rc-calendar";
import { Button } from 'reactstrap';
import Axios from "axios";
// import ReactDOM from 'react-dom';
// ReactDOM.render(<Calendar />, container);

class Search extends Component {
  state = {
    date: null,
    grills: [],
    grillType: "",
    description: "",
    price: ""


  };

  sixDate;
    
    updateDate = (date) => {
        this.setState({ date: date});
        let newDate = new Date(date);
        var month = ("0" + (newDate.getMonth() + 1)).slice(-2)
        var day = ("0" + newDate.getDate()).slice(-2)
        var year = newDate.getFullYear().toString().substring(2)
        this.sixDate = month + day + year
    }
    
//Using week 20, day 2, books sample act 10

    onSubmit = () => { 
        // console.log('/grill/' + this.sixDate)
        Axios.get('/grill/' + this.sixDate)
        
            .then(response => 
              // console.log(response)
              this.setState({ grills: response.data, 
                grillType: "",
                description: "",
                price: ""})
            )
            .catch(err => console.log(err));
    };

  render() {
    return (
      <div style={{ height: "75vh"}} className="container">
      <div className="row centered-content">
        <Calendar
          onChange={date => {
           this.updateDate(date)
          }}
        />
        </div>
        <div >  
          <Button color="primary"  size="sm" onClick={this.onSubmit}  href="./ItemSelection">submit</Button>
          {/* style={{marginTop: "50px" }} */}
          {/* style="display:block; margin:0;"  */}
        </div>
        </div>
      //
    );
  }
}

// 1. when onchange method gets exec, take the date picked, place on our state (done) 
// 2. add submit button (done)
// 3. create special function for when submit gets clicked (done)
// 4. what happens in function, grab the date from state,call our server w/ date
// 5. build server on backend; make special route to accept request from front end (serverjs file)
// 6. with that front end info, call db, query for that date for availability
// 7. return information from server to front end
// 8. need logic to take info and put on the page

export default Search;
