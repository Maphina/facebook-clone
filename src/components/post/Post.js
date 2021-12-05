import "./post.css";
import { MoreVert } from "@material-ui/icons";
import PERSON1 from "../../assests/person/person1.jpg"
import PERSON2 from "../../assests/person/person2.jpg"
import PERSON3 from "../../assests/person/person3.jpg"
import POST1 from "../../assests/post/post1.jpg"
import POST2 from "../../assests/post/post2.jpg"
import POST3 from "../../assests/post/post4.jpg"
import LIKE from "../../assests/like.png";
import HEART from "../../assests/heart.png";


const Post = () => {    
    return (

        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={PERSON1} alt="" />
                        <span className="postUsername">Maphina Maharjan</span>
                        <span className="postDate"> 5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post</span>
                    <img className="postImg" src={POST1} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={LIKE} alt="" />
                        <img className="likeIcon" src={HEART} alt="" />
                        <span className="postLikeCounter"> 112 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 5 comments</span>
                    </div>

                </div>

            </div>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={PERSON2} alt="" />
                        <span className="postUsername">Success Maharjan</span>
                        <span className="postDate"> 25 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey!</span>
                    <img className="postImg" src={POST2} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={LIKE} alt="" />
                        <img className="likeIcon" src={HEART} alt="" />
                        <span className="postLikeCounter"> 2.2k people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 5 comments</span>
                    </div>

                </div>

            </div>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={PERSON3} alt="" />
                        <span className="postUsername">Binish Maharjan</span>
                        <span className="postDate"> 15 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">What's Up</span>
                    <img className="postImg" src={POST3} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={LIKE} alt="" />
                        <img className="likeIcon" src={HEART} alt="" />
                        <span className="postLikeCounter">452 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 15 comments</span>
                    </div>

                </div>

            </div>
        </div>

    );
}
export default Post;