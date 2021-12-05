import './rightbar.css';
import GIFT from "../../assests/gift.png";
import AD from "../../assests/ad.png"
import PERSON3 from "../../assests/person/person3.jpg"
const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="" alt="" />
                    <img className="birthdayImg" src={GIFT} alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                    </span>
                </div> 
                <img className="rightbarAd" src={AD} alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendlist">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg"src={PERSON3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Maphina Maharjan</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;