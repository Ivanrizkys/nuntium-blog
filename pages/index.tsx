import type { NextPage } from 'next'
import Layout from '@/components/atoms/Layout'
import Navbar from '@/components/organism/Navbar'
import FirstFeaturePost from '@/components/organism/FirstFeaturePost'
import PostRecomendation from '@/components/organism/PostRecomendation'
import SecondFeaturePost from '@/components/organism/SecondFeaturePost'
import OtherPostSection from '@/components/organism/OtherPostSection'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <FirstFeaturePost />
        <PostRecomendation />
        <SecondFeaturePost />
        <OtherPostSection />
        <div className="mb-20"></div>
      </Layout>
    </>
  )
}

export default Home
