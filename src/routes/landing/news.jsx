import NewsCard from '../../components/landing/NewsCard';
import PageBanner from '../../components/landing/PageBanner';
import newsBanner from '../../assets/images/banner/newsBanner.png';
import mockNews from '../../news.json';
const news = () => {
  return (
    <>
      <PageBanner subtitle="News" title="News" backgroundImage={newsBanner} />
      <section className="flex w-full py-5">
        <div className="flex flex-3 flex-col gap-2">
          {mockNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        <div className="flex-1"></div>
      </section>
    </>
  );
};

export default news;
