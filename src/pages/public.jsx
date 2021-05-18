import React from 'react';
import photoDrHouse from '../component/assets/img/drhouse.jpg';
import photoEverybody from '../component/assets/img/everybody.jpg';
import photoCheck from '../component/assets/img/check.png';
import photoComment from '../component/assets/img/comment.png';
import photoLike from '../component/assets/img/likes.png';
import photoRepost from '../component/assets/img/retvit.png';
import photoShare from '../component/assets/img/give.png';
import photoHouse from '../component/assets/img/dr_house.jpg';
import '../component/css/public.css';

const posts = [
    {
    id: 234234,
    postName: "Doctor House",
    photo:  photoDrHouse,
    photoCheck: photoCheck,
    nickname: "best_doctor",
    text: "Everybody lies..",
    contentPhoto: photoEverybody,
    time: "25 april",
    photoComment: photoComment,
    photoLike: photoLike,
    photoRepost: photoRepost,
    photoShare: photoShare,
    comment: 348,
    like: 967,
    retvit: 98
},
{
    id: 234235,
    postName: "Doctor House",
    photo:  photoDrHouse,
    photoCheck: photoCheck,
    nickname: "best_doctor",
    text: "You can't always get everything you want, but if you try, it turns out that sometimes you can.",
    contentPhoto: photoHouse,
    time: "09 april",
    photoComment: photoComment,
    photoLike: photoLike,
    photoRepost: photoRepost,
    photoShare: photoShare,
    comment: 568,
    like: 67,
    retvit: 23
}
];

export function PublicPage() {
return (
    <div className="App">
    {posts.map(post => <Posts {...post} key={post.id}/>)}
    </div>
);
};


const Posts = (props) => {
    return(
    <div className="public">
        <div className="post">
            <div className="author_photo">
            <img
            className="photo_author"
            src={ props.photo }
            alt="#"
            />
        </div>
        <div className="author_post">
            <div className="author">
                <h3 className="name">{ props.postName }</h3>
                <img
                className="photo_check"
                src={ props.photoCheck }
                alt="#"
                />
                <a
                className="link_nickname"
                href="https://www.google.com/search?q=dr+house&oq=dr+house&aqs=chrome.0.69i59j46j69i59j0l7.8516j0j7&sourceid=chrome&ie=UTF-8"
                >@{ props.nickname }
                </a>  
            
                <time className="date">&#8226; { props.time }</time>
            </div>
            <div className="content_items">
                <h2 className="content_message">{ props.text }</h2>
                <img
                className="content_photo"
                src={ props.contentPhoto }
                alt="#"
                />
            </div>
            <div className="activity">
                <div className="activity_items">
                    <img
                    className="activity_photo"
                    src={ props.photoComment }
                    alt="#"
                    />
                    <p>{ props.comment }</p>
                </div>
            <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoRepost }
                alt="#"
                />
                <p>{ props.retvit }</p> 
            </div>
            <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoLike }
                alt="#"
                />
                <p>{ props.like }</p>
                </div>
            <div className="activity_items">
                <img
                className="activity_photo"
                src={ props.photoShare }
                alt="#"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
    )
};