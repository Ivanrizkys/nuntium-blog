interface WideCardType {
    image: string,
    category: string,
    title: string,
    author: string,
    date: string,
    preview: string
}

const WideCard = ({image, category, title, author, date, preview}: WideCardType) => {
    return (
        <div className="w-full max-w-[812px] flex gap-x-4 md:gap-x-7 xl:gap-x-9 cursor-pointer">
            <div className="w-6/12 sm:w-full sm:max-w-[180px] md:max-w-[200px] lg:max-w-[230px] xl:max-w-[273px] sm:h-[140px] md:h-[150px] lg:h-[177px] bg-cover" style={{backgroundImage: `url(${image})`}}></div>
            <div className="w-6/12 sm:w-full sm:max-w-[538px] h-[180px] sm:h-[170px] overflow-hidden md:overflow-visible text-ellipsis whitespace-normal  md:h-full font-open-sans">
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-primary">{category}</p>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[33px] font-libre font-bold">{title}</h3>
                <div className="flex items-center gap-1 md:gap-2 lg:gap-3 text-xs lg:text-sm xl:text-base mt-2 text-gray-primary">
                    <p>{author}</p>
                    <span className="w-1 h-1 bg-gray-primary rounded-full hidden md:inline"></span>
                    <p>{date}</p>
                </div>
                <p className="text-sm lg:text-base mt-2 lg:mt-3">{preview}</p>
            </div>
        </div>
    )
}

export default WideCard;