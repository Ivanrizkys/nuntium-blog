interface CardLongType {
    image: string,
    category: string,
    title: string,
    author: string,
    date: string,
    time_read: string,
    preview: string
}

const CardLong = ({image, category, title, author, date, time_read, preview}:CardLongType) => {
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto flex justify-center gap-x-5 lg:gap-x-14 font-open-sans cursor-pointer group">
            <div className="sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[371px] overflow-hidden w-6/12 sm:w-full xl:h-[298px]">
                <div className="bg-no-repeat bg-cover w-full h-full group-hover:scale-110 transition duration-500" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <div className="w-6/12 sm:w-5/12 h-[180px] md:h-[210px] lg:h-[300px] xl:h-[200px] whitespace-normal overflow-hidden xl:overflow-visible text-ellipsis">
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-primary">{category}</p>
                <h3 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-libre font-extrabold md:font-bold">{title}</h3>
                <div className="flex items-center gap-0 md:gap-2  lg:gap-3 text-xs lg:text-sm xl:text-base text-gray-primary mt-2 xl:mt-3">
                    <p>{author}</p>
                    <span className="w-1 h-1 hidden md:inline bg-gray-primary rounded-full"></span>
                    <p>{date} {time_read}</p>
                </div>
                <p className="text-sm lg:text-base mt-[10px] xl:mt-[14px]">{preview}</p>
            </div>
        </div>
    )
}

export default CardLong;