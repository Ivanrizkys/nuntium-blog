import Layout from '@/components/atoms/Layout'
import MainSearch from '@/components/atoms/MainSearch'
import tags from '@/dummy/tags'
import { NextPage } from 'next'

const Tags: NextPage = () => {
  return (
    <Layout>
      <div className="mt-[194px] flex flex-col items-center">
        <MainSearch />
        <div className="mt-[59px] flex flex-wrap justify-center gap-y-6 gap-x-[15px]">
          {tags.map((tag) => (
            <button className="rounded-[50px] border-1 border-solid border-black py-[10px] px-[25px] font-libre text-base text-black">
              #{tag.toLowerCase().replaceAll(" ", "")}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Tags
