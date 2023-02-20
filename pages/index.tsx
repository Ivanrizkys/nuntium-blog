import type { NextPage } from 'next'
import Layout from '@/components/atoms/Layout'
import FirstFeaturePost from '@/components/organism/FirstFeaturePost'
import PostRecomendation from '@/components/organism/PostRecomendation'
import SecondFeaturePost from '@/components/organism/SecondFeaturePost'
import OtherPostSection from '@/components/organism/OtherPostSection'
import BottomSpace from '@/components/atoms/BottomSpace'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <FirstFeaturePost />
        <PostRecomendation />
        <SecondFeaturePost />
        <OtherPostSection />
        <BottomSpace />
      </Layout>
    </>
  )
}

export default Home
