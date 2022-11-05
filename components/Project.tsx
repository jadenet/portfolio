import Image from 'next/image';

interface ProjectProps {
    name: string;
    date: { year: number; month: number };
    tools: string[];
    description: string;
    demo?: string;
    source: string;
    image: string;
}

// const months = ["January", "February", "March"] date

function Project(props: ProjectProps) {
    const date = new Date(props.date.year, props.date.month);

    return (
        <article className="flex flex-col w-5/6 lg:w-3/5 md:flex-row bg-background_secondary rounded-xl">
            <Image src={props.image} alt="Project image" width={500} height={500} className="bg-slate-700 rounded-t-xl md:rounded-tr-none md:rounded-bl-xl" />
            <div className="flex flex-col gap-5 p-6 md:w-5/12 text-text_secondary">
                <p className="text-right">{`${date.toLocaleDateString("default", { month: "short" })} ${date.getFullYear()}`}</p>
                <h2 className="font-black text-3xl">{props.name}</h2>
                <div className="flex flex-wrap gap-2">
                    {props.tools.map((tag) => {
                        return <span className="border border-text_secondary rounded p-1">{tag}</span>
                    })}
                </div>
                <p className="text-text_secondary">{props.description}</p>
                <div className="flex gap-2 justify-end">
                    {props.demo && <a href={props.demo} className="font-bold py-2 px-5 rounded-lg hover:brightness-95 active:scale-95 transition border-2 text-button_primary border-button_primary text-sm">Demo</a>}
                    <button className="font-bold hover:scale-105 active:scale-95 transition rounded-md py-2 px-5 text-sm text-text_primary bg-button_primary">Source Code</button>
                </div>
            </div>
        </article>
    )
}

export default Project
