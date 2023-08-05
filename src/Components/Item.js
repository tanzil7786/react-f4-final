import React from "react";
import { useSelector, useDispatch } from "react-redux";
import backIcon from '../assets/icons/Vector 13.png';
import { useNavigate } from "react-router-dom";
import { selectedPost } from '../redux/actions/selectedPostActionCreator';

const Item = () => {
    const userSelectedPost = useSelector(state => state.selectedPost);
    const data = useSelector(state => state.posts.data);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (post) => {
        dispatch(selectedPost(post));
 
        navigate(`/item/${post.id}`);
    }

    return(
        <div className="details-page-container">
            <div className="post-details">
                <div className="post-detals-container-1">
                    <div className="circle" onClick={() => navigate('/')}><img src={backIcon} alt="backIcon" /></div>
                    <p>Post Number : {userSelectedPost.id}</p>
                </div>
                <div className="post-detals-container-2">
                    <div className="selected-post-container">
                        <div className="img-container">
                            <img src={`https://picsum.photos/200?random=${userSelectedPost.id}`} alt={userSelectedPost.title} />
                        </div>
                        <div className="details">
                            <div className="buttons">
                                <button style={{color:'black', backgroundColor:'white'}}>Details</button>
                                <button style={{color:'white', backgroundColor:'#F05A22'}}>User Info</button>
                            </div>
                            <div className="details-lower">
                                <p>Post was Posted by User {userSelectedPost.userId}</p>
                                <h2>{userSelectedPost.title}</h2>
                                <span>{userSelectedPost.body}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style={{margin:'2rem 0'}}>More Posts</h2>
            <div className="cards-container">
                {
                    data.length > 0 &&
                    data.map((post) => {
                        return (
                            <div key={post.id} className="card" onClick={() => handleClick(post)}>
                                <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
                                <p className="title"><b>{post.title.length > 20 ? post.title.substring(0, 20) + '...' : post.title}</b></p>
                                <p className="body"><span>{post.body.length > 150 ? <span>{post.body.substring(0, 150)}<span style={{ textDecoration: "underLine", color: 'black' }}> Read more...</span></span> : post.body}</span></p>                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Item;