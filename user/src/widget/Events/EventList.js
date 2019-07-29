import React, { useState } from "react";
import "./Events.css";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import {ContextConsumer} from '../../Context';
import Loader from 'react-loader-spinner';

const EventItem = props => {
  return (
    <div className="EventItem">
      <img src={props.event.img} />
      <div className="EIText">
        <div className="EIcol1">
          <div className="EIName">
            {" "}
            Name:
            <span> {props.event.venueName}</span>
          </div>
          <div className="EILocation">
            {" "}
            Location:
            <span> {props.event.city}</span>
          </div>
          <div className="EIDescription">
            {" "}
            Description:
            <span> {props.event.description}</span>
          </div>
        </div>
        <div className="EIcol2">
          <div className="EITicketPrice">
            {" "}
            Ticket Price:
            <span> {props.event.ticket_price}</span>
          </div>
        </div>
        <div className="EIcol3">
          {props.is_view_details ? (
            <Link to={/event/ + props.event._id}>
              <button className="EIBtn">View Details</button>
            </Link>
          ) : null}

          <div className="EIRatings">
            {" "}
            (Ratings)
            <br />
            <Rate
              style={{ fontSize: 10 }}
              disabled
              defaultValue={props.event.ratings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EventList = props => {
  /*const [events, setEvents] = useState([
    {
      eventid: 1,
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      eventid: 2,
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      eventid: 3,
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    },
    {
      eventid: 4,
      name: "Event1",
      location: "Delhi",
      description: "Comedy",
      ticket_price: 100,
      ratings: 4,
      img:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/12/22223742/Events-1200x630.jpg"
    }
  ]);*/
  return (
  <ContextConsumer>
    {
      (value)=>{
          if(value.venues!==''){
            const {venues} = value;
            let EventsDisplay = venues.map(venue=>{
              return <EventItem event={venue} is_view_details={true} />;
            });
            return <div className="Events">{EventsDisplay}</div>;
          }
          else{
            return <div style={{textAlign:'center'}}><Loader type="ThreeDots" color="#000000" height={200} width={200} /></div>
          }
      }
    }
  </ContextConsumer>
  );

 /* let EventsDisplay = events.map(event => {
    return <EventItem event={event} is_view_details={true} />;
  });
  return <div className="Events">{EventsDisplay}</div>;*/
};
export { EventList, EventItem };
