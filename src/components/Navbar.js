import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import "./Navbar.css"
import AddIcon from '@material-ui/icons/Add';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import MovieIcon from '@material-ui/icons/Movie';


function Navbar() {
    const [show, handelShow] = useState(false);
    const history = useHistory();
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
            
        } else {
            handelShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img onClick={()=> history.push("/")} className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img onClick={()=> history.push("/pro")} className="nav__avatar"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
              <AddIcon onClick={()=> history.push("/add")} className="nav__add" />
             <AddToQueueIcon onClick={()=> history.push("/mylist")} className="nav__watchlist" ></AddToQueueIcon> 
            <MovieIcon onClick={()=> history.push("/watched")} className="nav__watched" ></MovieIcon>
            </div>
        </div>
    )
}

export default Navbar
