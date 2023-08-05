import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../redux/actions/postActionCreator';
import { selectedPost } from '../redux/actions/selectedPostActionCreator';
import { useNavigate } from "react-router-dom";
import searchIcon from '../assets/icons/search 2.png';

const Home = () => {
    // To find initial state of object
    const loading = useSelector(state => state.posts.loading);
    const data = useSelector(state => state.posts.data);
    const error = useSelector(state => state.posts.error);

    // console.log(loading, data, error);

    // To update the current state of object
    const dispatch = useDispatch();

    // To use a navigation
    const navigate = useNavigate();

    const handleClick = (post) => {
        dispatch(selectedPost(post));
        // console.log(post);
        navigate(`/item/${post.id}`);
    }

    // To call API only once when page loads
    useEffect(() => {
        dispatch(fetchPost())
        // console.log('useEffect called')
    }, [dispatch]);

    return (
        <div className="home-page-container">
            <h1>Social Media For Travellers</h1>
            <div className="search-container">
                <input type="text" placeholder="Search here..." />
                <img src={searchIcon} alt="search" />
            </div>

            {
                loading &&
                <div className="loader-container">
                    <div className="load-icon"></div>
                </div>
            }

            {
                error &&
                <div className="error">
                    <p>{error}</p>
                    navigate('/error');
                </div>
            }

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

export default Home;