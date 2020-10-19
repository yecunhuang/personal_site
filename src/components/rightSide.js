import React,{Component} from 'react'
import './rightSide.css'

class RightSide extends Component{
    render(){
        return(
            <div className="right_side">
                <div className="contents">
                    <h1 className="title">I'm Charles Ye (叶存煌)</h1>
                    <p> I am passionate about Software Engineering 
                    and making great products.</p>
                    <p> Interested Tech Areas: Web Development, Visualization, 
                    Data Engineering, Machine Learning</p>
                </div>

                <div className="quote">
                    <p>"Our civilization runs on Software"</p>
                    <span> —— C++ Designer & Creator Bjarne Stroustrup</span>
                </div>
            </div>
        )
    }
}

export default RightSide