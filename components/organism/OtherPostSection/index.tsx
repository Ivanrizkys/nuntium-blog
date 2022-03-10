import WideCard from "@/components/molecules/WideCard";
import tags from "@/dummy/tags";
import ohterCard from "@/dummy/other_card";

const OtherPostSection = () => {
    return (
        <>
            <h5 className="text-base md:text-lg lg:text-xl font-bold text-black-semi text-center mt-10 mb-5 sm:hidden">Tags</h5>
            <div className="flex flex-wrap gap-4 justify-center sm:hidden">
                {tags.map((tag, index) => {
                    return (
                        <p key={index} className="text-xs md:text-sm lg:text-base py-2 px-3 text-center border border-black rounded-sm mt-3 cursor-pointer hover:drop-shadow">{tag}</p>
                    )
                })}
            </div>
            <div className="mt-[104px] flex justify-center pb-5">
                <div className="w-11/12 sm:w-8/12 flex flex-col gap-y-16">
                    {ohterCard.map((data, index) => {
                        return (
                            <WideCard key={index} author={data.author} category={data.category} date={data.date} image={data.image} preview={data.preview} title={data.title} />
                        )
                    })}
                </div>
                <div className="w-2/12 h-[500px] pl-6 xl:pl-0 font-open-sans hidden sm:block">
                    <h5 className="text-base md:text-lg lg:text-xl font-bold text-black-semi">Tags</h5>
                    {tags.map((tag, index) => {
                        return (
                            <p key={index} className="text-xs md:text-sm lg:text-base mt-6 cursor-pointer hover:drop-shadow">{tag}</p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OtherPostSection;