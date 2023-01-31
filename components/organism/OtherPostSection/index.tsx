import WideCard from '@/components/molecules/SecondaryCard'
import tags from '@/dummy/tags'
import ohterCard from '@/dummy/other_card'

const OtherPostSection = () => {
  return (
    <>
      <h5 className="mt-10 mb-5 text-center text-base font-bold text-black-semi sm:hidden md:text-lg lg:text-xl">
        Tags
      </h5>
      <div className="flex flex-wrap justify-center gap-4 sm:hidden">
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className="mt-3 cursor-pointer rounded-sm border border-black py-2 px-3 text-center text-xs hover:drop-shadow md:text-sm lg:text-base"
            >
              {tag}
            </p>
          )
        })}
      </div>
      <div className="mt-[104px] flex justify-center pb-5">
        <div className="flex w-11/12 flex-col gap-y-16 sm:w-8/12">
          {ohterCard.map((data, index) => {
            return (
              <WideCard
                key={index}
                author={data.author}
                category={data.category}
                date={data.date}
                image={data.image}
                preview={data.preview}
                title={data.title}
              />
            )
          })}
        </div>
        <div className="hidden h-[500px] w-2/12 pl-6 font-open-sans sm:block xl:pl-0">
          <h5 className="text-base font-bold text-black-semi md:text-lg lg:text-xl">
            Tags
          </h5>
          {tags.map((tag, index) => {
            return (
              <p
                key={index}
                className="mt-6 cursor-pointer text-xs hover:drop-shadow md:text-sm lg:text-base"
              >
                {tag}
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OtherPostSection
