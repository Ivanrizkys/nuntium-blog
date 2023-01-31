interface SecondaryCardType {
  image: string
  category: string
  title: string
  author: string
  date: string
  preview: string
}

const SecondaryCard = ({
  image,
  category,
  title,
  author,
  date,
  preview,
}: SecondaryCardType) => {
  return (
    <div className="flex w-full max-w-[812px] cursor-pointer gap-x-4 md:gap-x-7 xl:gap-x-9">
      <div
        className="w-6/12 bg-cover sm:h-[140px] sm:w-full sm:max-w-[180px] md:h-[150px] md:max-w-[200px] lg:h-[177px] lg:max-w-[230px] xl:max-w-[273px]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="h-[180px] w-6/12 overflow-hidden text-ellipsis whitespace-normal font-open-sans sm:h-[170px] sm:w-full sm:max-w-[538px]  md:h-full md:overflow-visible">
        <p className="text-sm text-gray-primary md:text-base lg:text-lg xl:text-xl">
          {category}
        </p>
        <h3 className="font-libre text-lg font-bold md:text-xl lg:text-2xl xl:text-[33px]">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-xs text-gray-primary md:gap-2 lg:gap-3 lg:text-sm xl:text-base">
          <p>{author}</p>
          <span className="hidden h-1 w-1 rounded-full bg-gray-primary md:inline"></span>
          <p>{date}</p>
        </div>
        <p className="mt-2 text-sm lg:mt-3 lg:text-base">{preview}</p>
      </div>
    </div>
  )
}

export default SecondaryCard
