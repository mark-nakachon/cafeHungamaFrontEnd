import React, { Component } from 'react';

const myContext = React.createContext();

class ContextProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            location:'',
            date:'',
            eventType:'',
            venues:'',
            bookedSlots:[],
            selectedRowKeys: [], // Check here to configure the default column,
            selectedRows: [],
            selectedData:[]
         }
         this.handleButtonClick = this.handleButtonClick.bind(this);
         this.handleLocationClick = this.handleLocationClick.bind(this);
         this.handleEventTypeClick = this.handleEventTypeClick.bind(this);
         this.onChange = this.onChange.bind(this);
         this.updateBookings = this.updateBookings.bind(this);

    }
    componentDidMount(){
        //if(this.state.location==='' && this.state.date==='' && this.state.eventType===''){
        fetch(`https://cafehungama.herokuapp.com/user/venues/all`)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                venues:data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }


     handleButtonClick(e) {
        //message.info('Click on left button.');
        //console.log('searching data');
        /*console.log(this.state.location,this.state.eventType
            ,this.state.date);*/

        var data = {
            location:this.state.location,
            eventType:this.state.eventType,
            date:this.state.date,
        }
        fetch(`https://cafehungama.herokuapp.com/user/venues/search/`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                venues:data.filteredVenues
            })
        })
        .catch(err=>{
            console.log(err);
        })

    }


     handleLocationClick(e) {
        // message.info('Click on menu item.');
        this.setState({
            location:e.key
        })
     }

     onChange(date, dateString) {
       //  console.log(date,dateString);
        this.setState({
            date:dateString
        })
    }
    handleEventTypeClick(e){
        //console.log('click event',e);
        this.setState({
            eventType:e.key
        })
    }
    updateBookings(selectedRowKeys){
        console.log(selectedRowKeys);
        /*this.setState({
            bookedSlots:bookings
        })*/
       /* this.setState({
            bookedSlots:bookings
        })*/
    }

    onSelectChange = (selectedRowKeys, selectedRows) => {
        //  console.log("selectedRowKeys changed: ", selectedRowKeys, selectedRows);
        this.setState({
          selectedRowKeys,
          selectedData: selectedRows,
          //price: selectedRows.reduce((acc, curr) => acc + curr.price, 0)
        });
    }
    render() {
        return (
            <myContext.Provider value={{
                ...this.state,
                handleButtonClick:this.handleButtonClick,
                handleLocationClick:this.handleLocationClick,
                handleEventTypeClick:this.handleEventTypeClick,
                onChange:this.onChange,
                updateBookings:this.updateBookings,
                onSelectChange:this.onSelectChange

            }}>
                {this.props.children}
            </myContext.Provider>
         );
    }
}

const ContextConsumer = myContext.Consumer;

export {ContextConsumer,ContextProvider}