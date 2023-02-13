import Layout from '@/components/atoms/Layout'
import ContentArticle from '@/components/organism/ContentArticle'
import Image from 'next/image'

const ArticleDetail = () => {
  return (
    <Layout>
      <div className="relative mt-11 h-[592px] w-full">
        <Image
          fill
          alt="article-detail-image"
          src={'/image/first-feature-image.png'}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <ContentArticle />
    </Layout>
  )
}

export default ArticleDetail
