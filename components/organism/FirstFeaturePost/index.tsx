const FirstFeaturePost = () => {
  return (
    <div
      className="mt-11 h-[550px] w-full bg-cover pr-11 font-open-sans sm:h-[592px] sm:px-11"
      style={{ backgroundImage: 'url(/image/first-feature-image.png)' }}
    >
      <div className="h-[483px] max-w-[509px] cursor-pointer bg-white px-5 sm:px-10">
        <p className="pt-4 text-xl text-gray-primary sm:pt-[76px]">
          FEATURED ARTICLE
        </p>
        <h4 className="font-libre text-3xl font-bold">
          World’s Most Dangerous Technology Ever Made.
        </h4>
        <div className="mt-3 flex items-center gap-1 text-base text-gray-primary sm:gap-3">
          <p className="">Ralph Hawkins</p>
          <span className="hidden h-1 w-1 rounded-full bg-gray-primary sm:inline"></span>
          <p>May 7, 2019 (10 mins read)</p>
        </div>
        <p className="mt-[14px] text-base">
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </p>
      </div>
    </div>
  )
}

export default FirstFeaturePost
