import { NavLink } from 'react-router-dom'
import {home , explore, more, lists, profile, messages, notifications, twitter, bookmarks} from './icons'
import './leftPanel.scss'

const LeftPanel = () => {
    return(
        <div className= "left-panel">
            <div className="container">
            <header>{twitter}</header>
            <nav>
                <NavLink to ="/" exact activeClassName="selected">
                    <span>{home}Home</span>
                </NavLink>
                <NavLink to ="/explore" activeClassName="selected">
                    <span>{explore}Explore</span>
                </NavLink>
                <NavLink to ="/notifications" activeClassName="selected">
                <span>{notifications}Notifications</span> 
                </NavLink>
                <NavLink to ="/messages" activeClassName="selected">
                <span>{messages}Messages</span>
                </NavLink>
                <NavLink to ="/bookmark" activeClassName="selected">
                <span>{bookmarks}Bookmark</span>
                </NavLink>
                <NavLink to ="/list" activeClassName="selected">
                <span>{lists}List</span> 
                </NavLink>
                <NavLink to ="/profile" activeClassName="selected">
                <span>{profile}Profile</span>
                </NavLink>
                <button className="more" activeClassName="selected">
                <span>{more}More</span>
                </button>
            </nav>
            <button className="tweet">Tweet</button>
            <footer>
               <button className= "account">
                <div className="photo">
                    <img
                    alt="user"
                    src="http://placehold.it/120x120&text=image1"
                    />
                </div>
                <div>
                    <div className="name">User</div>
                    <div className="username">@user</div>
                </div>
                </button>
            </footer>
            </div>
        </div>
    )
}

export default LeftPanel