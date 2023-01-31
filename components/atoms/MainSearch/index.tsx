import Search from 'public/assets/Search'

const MainSearch = () => {
  return (
    <div className="relative w-full max-w-[707px]">
      <input
        type="text"
        placeholder="Find the topics you care about..."
        className="w-full rounded-[25px] border-1 border-solid border-black py-5 pl-[23px] pr-[76px] font-open-sans text-black placeholder:text-base placeholder:text-[#00000080]"
      />
      <button className="absolute top-1/2 right-[23px] z-[1] -translate-y-1/2">
        <Search />
      </button>
    </div>
  )
}

export default MainSearch
