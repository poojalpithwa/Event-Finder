import {React, Component} from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

  class App extends Component{
    constructor(){
    super();
    this.state={
    title: "Event Finder App",
    eventDetail : []
      }
    }

    handleAddEvent= (e) =>{
      e.preventDefault();
      let eventDetail=this.state.eventDetail;
      let name=this.refs.txtName.value;  
      let date=this.refs.txtDate.value;  
      let location=this.refs.txtLocation.value;  
      let desc=this.refs.txtDesc.value;  
      let newEvent ={
       
        "name": name,
        "date": date,
        "location": location,
        "description":desc
      }
        eventDetail.push(newEvent);
       this.setState({
         eventDetail: eventDetail
        })
        console.log(this.state.eventDetail)

        this.refs.addEvent.reset();
     }

     handleDeleteEvent =(i) =>{
       let eventDetail=this.state.eventDetail;
       eventDetail.splice(i,1);
       this.setState({
         eventDetail: eventDetail
       });

     }
     render(){
       let eventDetail= this.state.eventDetail;
       return(
      <div>
        <Header/>
           <div className='container'>
           
           
           <form ref="addEvent" className="addEvent mt-3">
              <label>Event Name</label>
              <input type="text" ref="txtName" placeholder="Event Name" className="formField" required/>
              <label>Event Date</label>
              <input type="text" ref="txtDate" placeholder="Event Date" className="formField" required />
              <label>Event Location</label>
              <input type="text" ref="txtLocation" placeholder="Event Location" className="formField "required/>
              <label>Event Description</label>
              <input type="text" ref="txtDesc" placeholder="Event Description" className="formField" required/>
              <button onClick={e => this.handleAddEvent(e)} className="myButton">Add</button>
         </form>

        {/* <EventCard data={this.state.eventDetail}/> */}


         <table className='event-table mt-3'>
           <tr>
             <th>Event Name</th>
             <th>Event Date</th>
             <th>Event Location</th>
             <th>Event Description</th>
            </tr>
           { eventDetail.map((data, i) =>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.date}</td>
              <td>{data.location}</td>
              <td>{data.description}</td>
              <td>
                <button onClick={e => this.handleDeleteEvent(e)} className="btn btn-danger">Delete</button>
              </td>
            </tr> )

     }
       </table>
         </div>
      </div>
       ) }
  }

  export default App;