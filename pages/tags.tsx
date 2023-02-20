import { NextPage } from 'next' 
import tags from '@/dummy/tags'
import Layout from '@/components/atoms/Layout'
import MainSearch from '@/components/atoms/MainSearch'
import ListArticle from '@/components/organism/ListArticle'
import BottomSpace from '@/components/atoms/BottomSpace'

const Tags: NextPage = () => {
  return (
    <Layout>
      <div className="mt-[194px] flex flex-col items-center">
        <MainSearch />
        <div className="mt-[59px] w-11/12 md:w-full flex flex-wrap justify-center gap-y-6 gap-x-[15px] md:p-3">
          {tags?.map((tag, index) => (
            <button
              key={index}
              className="rounded-[50px] border-1 border-solid border-black py-[8px] sm:py-[10px] px-[23px] sm:px-[25px] font-libre text-sm sm:text-base text-black"
            >
              #{tag?.toLowerCase().split(" ").join("")}
            </button>
          ))}
        </div>
        <ListArticle />
      </div>
      <BottomSpace />
    </Layout>
  )
}

export default Tags
