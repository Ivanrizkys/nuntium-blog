const FirstFeaturePost = () => {
    return (
        <div className="w-full h-[550px] sm:h-[592px] bg-cover font-open-sans mt-11 pr-11 sm:px-11" style={{backgroundImage: "url(/image/first-feature-image.png)"}}>
            <div className="max-w-[509px] h-[483px] px-5 sm:px-10 bg-white cursor-pointer">
                <p className="text-xl text-gray-primary pt-4 sm:pt-[76px]">FEATURED ARTICLE</p>
                <h4 className="text-3xl font-bold font-libre">World’s Most Dangerous Technology Ever Made.</h4>
                <div className="flex text-base items-center gap-1 sm:gap-3 text-gray-primary mt-3">
                    <p className="">Ralph Hawkins</p>
                    <span className="w-1 h-1 sm:inline hidden bg-gray-primary rounded-full"></span>
                    <p>May 7, 2019 (10 mins read)</p>
                </div>
                <p className="text-base mt-[14px]">Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.</p>
            </div>
        </div>
    )
}

export default FirstFeaturePost;
