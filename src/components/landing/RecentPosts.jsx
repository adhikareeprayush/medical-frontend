import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { getAllNews } from '../../utils/api';
import { Link } from 'react-router-dom';

const RecentPosts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const recentPosts = news.slice(0, 5).map((post) => ({
  //   id: post.id,
  //   title: post.title,
  //   date: post.date,
  //   image: post.image,
  // }));
  const [recentNews, setRecentNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getAllNews(4);
        setRecentNews(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      }
    };

    fetchNews();
  }, []);

  const categories = [
    { name: 'Surgery', count: 3 },
    { name: 'Health Care', count: 5 },
    { name: 'Medical', count: 8 },
    { name: 'Professional', count: 10 },
  ];

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Search Section */}
      <div className="bg-primary font-body relative h-[50px] rounded-md px-2 text-[#FCFEFE]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-full w-full"
        />
        <Search
          size={24}
          className="text-accent absolute top-1/2 right-2 -translate-y-1/2"
        />
      </div>

      {/* Recent Posts Section */}
      <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 p-2">
        <h2 className="font-display2 text-primary font-bold">Recent Posts</h2>
<<<<<<< HEAD
        <div className="flex h-fit flex-col gap-2">
          {recentPosts.map((post) => (
            <div
=======
        <div className="flex h-fit flex-col gap-1">
          {recentNews.map((post) => (
            <Link
              to={`/news/${post.id}`}
>>>>>>> 693f4030d23270b99c1f88900b7dd46f4013d548
              key={post.id}
              className="flex min-h-16 cursor-pointer gap-1 rounded-lg"
            >
              <div className="flex h-full items-center justify-center rounded-lg">
                <img
                  src={post.image_url}
                  alt={post.title}
<<<<<<< HEAD
                  className="h-full rounded-md object-cover lg:w-18 xl:w-22"
=======
                  className="h-full w-16 rounded-lg object-cover"
>>>>>>> 693f4030d23270b99c1f88900b7dd46f4013d548
                />
              </div>
              <div className="">
                <p className="text-secondary text-xs xl:text-sm">{post.date}</p>
                <h3 className="line-clamp-2 text-sm leading-tight text-black xl:text-[16px]">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col gap-3 border-2 border-gray-200 p-2">
        <h2 className="text-primary text-2xl font-bold">Categories</h2>
        <div className="flex flex-col gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center justify-between"
            >
              <span className="font-medium text-black">{category.name}</span>
              <span className="bg-secondary flex h-4 w-4 items-center justify-center rounded-full p-2 text-white">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
