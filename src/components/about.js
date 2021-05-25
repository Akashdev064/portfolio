import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AcUnitIcon from '@material-ui/icons/AcUnit';

const About = () => {

    return (
        <div className="about-me" id="about">
        <h2 className="about-heading">All About Me</h2>
        <VerticalTimeline>
            <VerticalTimelineElement date="2013-2014" icon={<AcUnitIcon/>} iconClassName="toys-icon" size="60">
            <p>Secondary School Leaving Certificate</p> 
            <p>AVB Matric Higher Secondary School </p> 
            <p>Coimbatore </p>
            <p>Percentage / Aggregate : 97 </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="2015-2016" icon={<AcUnitIcon/>} iconClassName="toys-icon" size={50}>
            <p>Higher Secondary Certificate</p> 
            <p>AVB Matric Higher Secondary School </p> 
            <p>Coimbatore </p>
            <p>Percentage / Aggregate : 91 </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="2016-2020" icon={<AcUnitIcon/>} iconClassName="toys-icon" size={80}>
            <p>Bachelors in Electrical and Electronics Engineering</p> 
            <p>Sri Ramakrishna Engineering College</p> 
            <p>Coimbatore </p>
            <p>Percentage / Aggregate : 97 </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement date="2020-Present" icon={<AcUnitIcon/>} iconClassName="toys-icon" size={40}>
            <p>Working as a freelancer</p>
            <p>Web development and IOS App development</p>
            <p>Coimbatore </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
             
        </div>
    )
}

export default About;


