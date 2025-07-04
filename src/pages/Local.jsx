import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import PostCard from '../components/PostCard';
import '../styles/pagebase.css';

// Example local posts data
const localPosts = [
  {
    id: 101,
    username: 'local_user1',
    userAvatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    date: '2024-06-10',
    mediaType: 'image',
    views: 500,
    caption: 'Local park event!',
    location: 'YourTown, Nearby',
    isFollowing: false,
  },
  {
    id: 102,
    username: 'local_user2',
    userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    date: '2024-06-11',
    mediaType: 'video',
    views: 800,
    caption: 'Farmers market fun!',
    location: 'YourTown, Nearby',
    isFollowing: true,
  },
];

const Local = () => (
  <div className="home-root">
    <Header />
    <main className="home-main home-main--scroll">
      {localPosts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </main>
    <MenuBar />
  </div>
);

export default Local;
