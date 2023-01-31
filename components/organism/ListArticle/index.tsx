import SecondaryCard from "@/components/molecules/SecondaryCard"
import ohterCard from "@/dummy/other_card"

const ListArticle = () => {
  return (
    <div className="mt-[117px] flex w-11/12 lg:w-full lg:max-w-[812px] flex-col gap-y-16">
      {ohterCard.map((data, index) => (
        <SecondaryCard
          key={index}
          author={data.author}
          category={data.category}
          date={data.date}
          image={data.image}
          preview={data.preview}
          title={data.title}
        />
      ))}
    </div>
  )
}

export default ListArticle
