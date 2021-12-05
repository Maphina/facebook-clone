import './sidebar.css'
import {
    RssFeed, Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";
import SIDEBAR_IMG from '../../assests/person/person2.jpg';
import SIDEBAR_IMG1 from '../../assests/person/person1.jpg';
import SIDEBAR_IMG2 from '../../assests/person/person4.jpg';
import SIDEBAR_IMG3 from '../../assests/person/person5.jpg';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText"> Feed </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Success Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG1} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Maphina Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG2} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Binish Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG3} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Sumedh Bajracharya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Success Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG1} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Maphina Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG2} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Binish Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG3} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Sumedh Bajracharya</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Success Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG1} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Maphina Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG2} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Binish Maharjan</span>
                    </li>
                    <li className="sidebarFriend">
                        <img  src={ SIDEBAR_IMG3} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Sumedh Bajracharya</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;