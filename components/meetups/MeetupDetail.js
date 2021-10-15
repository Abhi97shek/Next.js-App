import React from 'react'
import classes from './MeetupDetail.module.css';
function MeetupDetail(props) {

   
    return (
        <section className={classes.detail}>
            <img src={props.details.image} alt="A First MeetUp" />
            <h3>{props.details.title}</h3>
            <p>{props.details.description}</p>
        </section>
    )
}

export default MeetupDetail
