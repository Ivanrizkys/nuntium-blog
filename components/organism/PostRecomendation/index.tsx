import editorPicks from '@/dummy/editor_picks'
import PrimaryCard from '@/components/molecules/PrimaryCard'

const PostRecomendation = () => {
  return (
    <>
      <h2 className="mt-12 text-center font-open-sans text-3xl font-bold text-black-semi lg:text-[42px]">
        Editor`s Picks
      </h2>
      <div className="mx-auto mb-[54px] h-1 max-w-[190px] bg-black-semi"></div>
      <div className="flex flex-col gap-y-12">
        {editorPicks.map((data, index) => {
          return (
            <PrimaryCard
              key={index}
              image={data.image}
              author={data.author}
              category={data.category}
              date={data.date}
              preview={data.preview}
              time_read={data.time_read}
              title={data.title}
            />
          )
        })}
      </div>
    </>
  )
}

export default PostRecomendation
