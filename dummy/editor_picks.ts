interface EditorPickType {
    image: string,
    category: string,
    title: string,
    author: string,
    date: string,
    time_read: string,
    preview: string
}

let editorPicks: EditorPickType[]
editorPicks = [
    {
        image: "/image/editor-pick-1.png",
        category: "MINIMALISM",
        title: "Culpa sit Laboris Exercitation ea Fugiat",
        author: "Leslie Pena",
        date: "April 25, 2012",
        time_read: "(6 mins read)",
        preview: "Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse."
    },
    {
        image: "/image/editor-pick-2.png",
        category: "TECHNOLOGY",
        title: "Amet non Ex Officia nulla Cupidatat",
        author: "Jacob Henry",
        date: "September 27, 2017",
        time_read: "(8 mins read)",
        preview: "Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit."
    },
    {
        image: "/image/editor-pick-3.png",
        category: "ARTICLE",
        title: "Dolor ex Tempor Cotur Culpa li",
        author: "Darrell Lane",
        date: "May 16, 2017",
        time_read: " (3 mins read)",
        preview: "Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est. Nisi consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem deserunt deserunt voluptate. Proident nostrud laborum reprehenderit culpa irure id labore do ad do minim nisi. Incididunt ex."
    },
]

export default editorPicks