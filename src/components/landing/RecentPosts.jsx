import { useEffect, useState } from 'react';
import { Loader2, Search } from 'lucide-react';
import { getAllNews } from '../../utils/api';
import { Link } from 'react-router-dom';
import { getTransformedImageUrl } from '../../utils/getTransformedImageUrl';

const RecentPosts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const recentPosts = news.slice(0, 5).map((post) => ({
  //   id: post.id,
  //   title: post.title,
  //   date: post.date,
  //   image: post.image,
  // }));
  const [recentNews, setRecentNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await getAllNews(4);
        setRecentNews(res.data.data || []);
      } catch (err) {
        console.error('Failed to fetch news:', err);
      } finally {
        setLoading(false);
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
      <div className="bg-primary font-body relative h-[50px] rounded-full px-2 text-[#FCFEFE]">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-full w-full border-none"
        />
        <Search
          size={24}
          className="text-accent absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
        />
      </div>

      {/* Recent Posts Section */}
      <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 p-2">
        <h2 className="font-display2 text-primary font-bold">Recent Posts</h2>
        <div className="flex h-fit w-full flex-col justify-center gap-1">
          {loading ? (
            <Loader2 className="text-secondary mx-auto h-3 w-3 animate-spin" />
          ) : (
            recentNews.map((post) => (
              <Link
                to={`/news/${post.id}`}
                key={post.id}
                className="flex items-center gap-2 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={getTransformedImageUrl(post.image_url, 60, 60)}
                    alt={post.title}
                    className="h-[60px] w-[60px] rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="line-clamp-2 text-sm leading-tight text-black xl:text-[16px]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Categories Section */}
      {/* <div className="flex flex-col gap-3 border-2 border-gray-200 p-2">
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
      </div> */}
    </div>
  );
};

export default RecentPosts;
