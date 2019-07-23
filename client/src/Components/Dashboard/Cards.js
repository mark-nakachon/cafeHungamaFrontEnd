import React from 'react';
import {Card} from 'antd';
import './Cards.css';

const Cards =()=>{
    return(
        <div className="clearfix">
        <div className="event-card">
                <Card title="Successful Events" style={{ textAlign: 'center', height: '150px', borderBottom:'5px solid #0a3478'}}>
                <p>100 Total Successful bookings</p>
                <p>Comedy: 60 &nbsp; &nbsp; &nbsp; &nbsp; Movie: 40</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Upcoming Events" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>Total Events done</p>
                    <p>Comedy: &nbsp; &nbsp; &nbsp; &nbsp;Movie: </p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Total business done" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>Rs. 12345</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Venues" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>3 venues registered</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Cancelled Events" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>Total Events done</p>
                    <p>Comedy: &nbsp; &nbsp; &nbsp; &nbsp;Movie: </p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Total tickets sold" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>400</p>
            </Card>
        </div>
        <div className="event-card">
                <Card title="Average Booking Price" style={{ textAlign: 'center', height: '150px', borderBottom: '5px solid #0a3478'}}>
                <p>Rs. 1022</p>
            </Card>
        </div>
        </div>
    )
}
export default Cards;