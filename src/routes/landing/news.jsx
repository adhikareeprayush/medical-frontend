import React from 'react'
import PageBanner from '../../components/landing/PageBanner'
import NewsBanner from '../../assets/images/banner/newsBanner.png'
import NewsCard from '../../components/landing/NewsCard'

const news = () => {
  return (
    <>
    <PageBanner
        subtitle="News"
        title={'News'}
        backgroundImage={NewsBanner}
      />
      <section>
        <NewsCard />
      </section>
    </>
  )
}

export default news