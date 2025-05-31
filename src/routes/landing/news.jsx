import NewsCard from '../../components/landing/NewsCard';
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/newsBanner.png';
import mockNews from '../../news.json';
import RecentPosts from '../../components/landing/RecentPosts';
const news = () => {
  return (
    <>
      <PageBanner subtitle="News" title="News" backgroundImage={newsBanner} />
      <section className="flex w-full justify-center gap-2 py-5">
        <div className="flex flex-col gap-2 lg:flex-3 xl:flex-2">
          {mockNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        <div className="hidden flex-1 lg:flex">
          <RecentPosts />
        </div>
      </section>
    </>
  );
};

export default news;
