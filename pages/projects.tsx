import Project from '../components/Project';

function Projects() {
  return (
    <>
      <h1 id="projects" className="text-4xl font-bold text-center mt-4">My Projects</h1>

      <section className="flex flex-col gap-6 items-center min-h-full my-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-auto gap-4 md:gap-6 min-h-max px-3 py-2 bg-background_secondary rounded-xl">
          <div className="w-full md:w-72 h-10 bg-slate-200 rounded"></div>
          <div className="flex w-full justify-around md:justify-end md:gap-2">
            <button className="btn btn-ghost text-text_secondary">Tools \/</button>
            <button className="btn btn-ghost text-text_secondary">Date \/</button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          <Project demo="uwu" title="Project Name" date="Sep 2022" tags={["React", "NextJS", "Tailwind", "SCSS"]} description="hiii"></Project>
          <Project title="Project Name" date="Sep 2022" tags={["React", "NextJS", "Tailwind", "SCSS"]} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in massa sodales, sodales tellus eget, malesuada dolor. Nunc in metus posuere, vehicula nunc sit amet, egestas nisl. Fusce pharetra leo non purus lobortis congue. Suspendisse eget pretium arcu. Aliquam erat volutpat. Duis efficitur lorem nec imperdiet fringilla."></Project>
        </div>

        <div className="flex gap-4">
          <button className="btn btn-ghost p-0">{"<<"}</button>
          <button className="btn btn-ghost p-0">{"<"}</button>
          <div className="">{"Page 1 of 3"}</div>
          <button className="btn btn-ghost p-0">{">"}</button>
          <button className="btn btn-ghost p-0">{">>"}</button>
        </div>
      </section>
    </>
  )
}

export default Projects
