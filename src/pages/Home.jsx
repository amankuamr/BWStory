import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import PostCard from '../components/PostCard';
import '../styles/home.css';

// Example posts data
const posts = [
  {
    id: 1,
    username: 'john_doe',
    userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    date: '2024-06-01',
    mediaType: 'image',
    views: 1200,
    caption: 'A beautiful day in the mountains!',
    location: 'Aspen, Colorado',
    isFollowing: false,
  },
  {
    id: 2,
    username: 'jane_smith',
    userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    date: '2024-06-02',
    mediaType: 'video',
    views: 3400,
    caption: 'Check out this amazing waterfall!',
    location: 'Niagara Falls',
    isFollowing: true,
  },
  {
    id: 3,
    username: 'alex_lee',
    userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    date: '2024-06-03',
    mediaType: 'image',
    views: 980,
    caption: 'Sunset at the beach!',
    location: 'Santa Monica, CA',
    isFollowing: false,
  },
  {
    id: 4,
    username: 'emily_rose',
    userAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    date: '2024-06-04',
    mediaType: 'video',
    views: 2100,
    caption: 'Dancing in the rain!',
    location: 'London, UK',
    isFollowing: true,
  },
  {
    id: 5,
    username: 'mike_travels',
    userAvatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    date: '2024-06-05',
    mediaType: 'image',
    views: 1750,
    caption: 'Exploring the city lights.',
    location: 'Tokyo, Japan',
    isFollowing: false,
  },
  {
    id: 6,
    username: 'sara_nature',
    userAvatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    date: '2024-06-06',
    mediaType: 'image',
    views: 2200,
    caption: 'Green everywhere!',
    location: 'Amazon Rainforest',
    isFollowing: true,
  },
  {
    id: 7,
    username: 'lucas_bike',
    userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99',
    date: '2024-06-07',
    mediaType: 'video',
    views: 3100,
    caption: 'Mountain biking adventure!',
    location: 'Whistler, Canada',
    isFollowing: false,
  },
  {
    id: 8,
    username: 'olivia_foodie',
    userAvatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    date: '2024-06-08',
    mediaType: 'image',
    views: 900,
    caption: 'Best brunch ever!',
    location: 'Paris, France',
    isFollowing: false,
  },
];

const Home = () => {
  return (
    <div className="home-root">
      <Header />
      <main className="home-main home-main--scroll">
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
      <MenuBar />
    </div>
  );
};

export default Home;
