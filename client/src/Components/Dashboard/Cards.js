import React from 'react';
import {Card} from 'antd';
import './Cards.css';

const Cards =(props)=>{
    console.log(props.data);
    return(
        <div className="clearfix">
        <div className="event-card">
                <Card title="Successful Events" style={{ textAlign: 'center', height: '150px', borderBottom:'5px solid #0a3478'}}>
                <p>{props.data.total_successful_events} Total Successful bookings</p>
                <p>Comedy: 60 &nbsp; &nbsp; &nbsp; &nbsp; Movie: 40</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Upcoming Events" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>{props.data.total_upcoming_events }Total Events done</p>
                    <p>Comedy: &nbsp; &nbsp; &nbsp; &nbsp;Movie: </p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Total business done" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>{props.data.total_business_done}</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Venues" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>{props.data.total_venues_registered} venues registered</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Cancelled Events" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>{props.data.total_cancelled_events} Total Events done</p>
                    <p>Comedy: &nbsp; &nbsp; &nbsp; &nbsp;Movie: </p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Total tickets sold" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>{props.data.total_tickets_sold}</p>
            </Card>
        </div>
        </div>
    )
}
export default Cards;