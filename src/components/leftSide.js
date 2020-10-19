import React,{Component} from 'react'
import './leftSide.css'
import avatar_img from '../asset/self_img.jpg'

class LeftSide extends Component{

    render(){
        return(
            <div className="left_side"> 
                <img src={avatar_img} alt="Charles Ye" className="avatar"></img>
                <p className="job_title">Data Developer @ <a href="https://www.mu-sigma.com">Mu Sigma</a></p>
                <div className="icons">    
                    <ul>                        
                        <li><a href="https://www.github.com/yecunhuang">Github</a></li>
                        <li><a href="foo">Projects</a></li>
                        <li><a href="foo">Blog Posts</a></li>
                        <li><a href="foo">Translations</a></li>
                        <li><a href="foo">Resume</a> [<a href="foo">Download</a>] </li>
                        <li><a href="foo">Life, Reading & Others</a></li>
                        <li>Bsc. Computer Science @ Shenzhen University</li>
                    </ul>   
                </div>
            </div>
        )
    }
}

function wrapper(InputComponent){
    return class extends Component{
        render(){
            return <InputComponent {...this.props}/>
        }
    }
}
export default wrapper(LeftSide);

