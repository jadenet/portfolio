interface ProjectProps {
    name: string;
    date: { year: number; month: number };
    tools: string[];
    description: string;
    demo?: string;
    source: string;
    image: string;
}

function Project(props: ProjectProps) {
    const date = new Date(props.date.year, props.date.month);

    return (
        <article className="flex flex-col w-5/6 lg:w-3/5 md:flex-row bg-white text-black rounded-xl">
            <div className="relative md:w-3/5 overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-bl-xl bg-gray-900">
                <img src={props.image} alt="Project image" className="absolute w-full h-full object-cover blur-md scale-105" />
                <img src={props.image} alt="Project image" className="absolute w-full h-full object-contain" />
            </div>
            <div className="flex flex-col justify-between gap-5 p-6 md:w-2/5">
                <div className="flex flex-col gap-5">
                    <p className="text-right">{`${date.toLocaleDateString("default", { month: "short" })} ${date.getFullYear()}`}</p>
                    <h2 className="font-black text-3xl">{props.name}</h2>
                    <div className="flex flex-wrap gap-2">
                        {props.tools.map((tag) => {
                            return <span className="border border-black rounded p-1">{tag}</span>
                        })}
                    </div>
                    <p>{props.description}</p>
                </div>

                <div className="flex items-center gap-2 justify-end">
                    {props.demo != null && <a href={props.demo} className="font-bold py-2 px-5 rounded-lg hover:scale-105 active:scale-95 transition border-2 text-sm text-blue-400 border-blue-400">Demo</a>}
                    {props.source != null && <a href={props.source} className="font-bold py-2 px-5 rounded-lg hover:scale-105 active:scale-95 transition border-2 text-sm text-white bg-blue-400 border-blue-400">Source Code</a>}
                </div>
            </div>
        </article>
    )
}

export default Project
