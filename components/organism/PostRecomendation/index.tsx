import CardLong from "@/components/molecules/CardLong";
import editorPicks from "@/dummy/editor_picks"


const PostRecomendation = () => {
    return (
        <>
            <h2 className="text-3xl lg:text-[42px] font-open-sans text-black-semi font-bold text-center mt-12">Editor`s Picks</h2>
            <div className="max-w-[190px] h-1 bg-black-semi mx-auto mb-[54px]"></div>
            <div className="flex flex-col gap-y-12">
                {editorPicks.map((data, index) => {
                    return (
                        <CardLong key={index} image={data.image} author={data.author} category={data.category} date={data.date} preview={data.preview} time_read={data.time_read} title={data.title} />
                    )
                })}
                
            </div>
        </>
    )
}

export default PostRecomendation;