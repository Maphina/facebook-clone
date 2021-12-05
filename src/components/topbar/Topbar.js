import "./topbar.css"
import { Search ,Person,Chat,Notifications} from "@material-ui/icons";
const Topbar = () => {
    return ( 
        <div className="topbarContainer">
          <div className="topbarLeft">
              <span className="logo">GritFeat Social</span>
          </div>
          <div className="topbarCenter">
              <div className="searchbar">
                  <Search className="searchIcon"/>
                  <input placeholder="Search for friends, post or video" className="searchInpuit" />
              </div>
          </div>
          <div className="topbarRight">
              <div className="topbarLinks">
                 < span className="topbarLink">Homepage</span>
                 < span className="topbarLink">Timeline</span>
              </div>
              <div className="topbarIcons">
                  <div className="topbarIconItem" >
                      <Person/>
                      <span className="topbarIconBadge">1</span>
                      </div>
                      <div className="topbarIconItem">
                      <Chat/>
                      <span className="topbarIconBadge">2</span>
                      </div>
                      <div className="topbarIconItem">
                      <Notifications/>
                      <span className="topbarIconBadge">1</span>
                      </div>
              </div>
                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' alt="" className="topbarImg" />
          </div>
        </div>   
    );
}

export default Topbar;