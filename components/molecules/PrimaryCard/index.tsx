interface PrimaryCardType {
  image: string
  category: string
  title: string
  author: string
  date: string
  time_read: string
  preview: string
}

const PrimaryCard = ({
  image,
  category,
  title,
  author,
  date,
  time_read,
  preview,
}: PrimaryCardType) => {
  return (
    <div className="group mx-auto flex w-11/12 cursor-pointer justify-center gap-x-5 font-open-sans sm:w-10/12 lg:gap-x-14">
      <div className="w-6/12 overflow-hidden sm:w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:h-[298px] xl:max-w-[371px]">
        <div
          className="h-full w-full bg-cover bg-no-repeat transition duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="h-[180px] w-6/12 overflow-hidden text-ellipsis whitespace-normal sm:w-5/12 md:h-[210px] lg:h-[300px] xl:h-[200px] xl:overflow-visible">
        <p className="text-sm text-gray-primary md:text-base lg:text-lg xl:text-xl">
          {category}
        </p>
        <h3 className="font-libre text-base font-extrabold md:text-xl md:font-bold lg:text-2xl xl:text-3xl">
          {title}
        </h3>
        <div className="mt-2 flex items-center gap-0  text-xs text-gray-primary md:gap-2 lg:gap-3 lg:text-sm xl:mt-3 xl:text-base">
          <p>{author}</p>
          <span className="hidden h-1 w-1 rounded-full bg-gray-primary md:inline"></span>
          <p>
            {date} {time_read}
          </p>
        </div>
        <p className="mt-[10px] text-sm lg:text-base xl:mt-[14px]">{preview}</p>
      </div>
    </div>
  )
}

export default PrimaryCard
