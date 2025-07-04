import React, { useState } from 'react';
import { EllipsisOutlined, HeartOutlined, HeartFilled, ShareAltOutlined, MessageOutlined, EyeOutlined, VideoCameraOutlined, PictureOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Avatar } from 'antd';
import '../styles/postcard.css';

const PostCard = ({ username, userAvatar, image, date, mediaType, views, caption, location, isFollowing, initialLikes = 0 }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [likeAnim, setLikeAnim] = useState(false);
  const [shareAnim, setShareAnim] = useState(false);
  const [commentAnim, setCommentAnim] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 400);
  };

  const handleShare = () => {
    setShareAnim(true);
    setTimeout(() => setShareAnim(false), 400);
    // Add share logic here
  };

  const handleComment = () => {
    setCommentAnim(true);
    setTimeout(() => setCommentAnim(false), 400);
    // Add comment logic here
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <Avatar src={userAvatar} size={40} />
        <span className="post-username">{username}</span>
        <Button
          type={isFollowing ? 'default' : 'primary'}
          size="small"
          className="follow-btn"
          icon={<UserAddOutlined />}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
        <EllipsisOutlined className="post-menu" />
      </div>
      <div className="post-image-wrapper">
        <img src={image} alt="post" className="post-image" />
      </div>
      <div className="post-info">
        <span className="post-date">{date}</span>
        <span className="post-media-type">
          {mediaType === 'video' ? <VideoCameraOutlined /> : <PictureOutlined />}
          {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
        </span>
        <span className="post-views">
          <EyeOutlined /> {views}
        </span>
      </div>
      <div className="post-caption">{caption}</div>
      <div className="post-location">{location}</div>
      <div className="post-actions">
        <Button
          icon={
            liked
              ? <HeartFilled style={{ color: '#ff4d4f', transition: 'color 0.2s' }} />
              : <HeartOutlined style={{ color: '#1677ff', transition: 'color 0.2s' }} />
          }
          type="text"
          className={`post-action-btn like-btn${liked ? ' liked' : ''}${likeAnim ? ' like-anim' : ''}`}
          onClick={handleLike}
        >
          {likeCount}
        </Button>
        <Button
          icon={<ShareAltOutlined style={{ color: '#1677ff' }} />}
          type="text"
          className={`post-action-btn share-btn${shareAnim ? ' like-anim' : ''}`}
          onClick={handleShare}
        >
          Share
        </Button>
        <Button
          icon={<MessageOutlined style={{ color: '#1677ff' }} />}
          type="text"
          className={`post-action-btn comment-btn${commentAnim ? ' like-anim' : ''}`}
          onClick={handleComment}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
