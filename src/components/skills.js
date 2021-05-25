import React from "react";
import { Card } from 'react-card-component';


const Skills = () => {

    
    return (
        <div className="skillpage container-fluid" id="skills">
      <h2 className="skill-heading">Skills Known</h2>
        <span className="skillboxes">
        <Card className="zoombox a" hoverType={"zoom"}><p className="skillWords a">Html5</p></Card>
        <Card className="zoombox b" hoverType={"zoom"}><p className="skillWords b">CSS3</p></Card>
        <Card className="zoombox c" hoverType={"zoom"}><p className="skillWords c">Bootstrap</p></Card>
        </span>

        <span className="skillboxes">
        <Card className="zoombox d" hoverType={"zoom"}><p className="skillWords d">jQuery</p></Card>
        <Card className="zoombox e" hoverType={"zoom"}><p className="skillWords e">React</p></Card>
        <Card className="zoombox f" hoverType={"zoom"}><p className="skillWords f">SQL</p></Card>   
        </span>

        <span className="skillboxes">
        <Card className="zoombox g" hoverType={"zoom"}><p className="skillWords g">Node.js</p></Card>
        <Card className="zoombox h" hoverType={"zoom"}><p className="skillWords h">MongoDB</p></Card>
        <Card className="zoombox i" hoverType={"zoom"}><p className="skillWords i">Rest API's</p></Card>
        </span>
        
        </div>
    )
}

export default Skills;
