import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import projectsInfo from '../public/projectsInfo';
import Dropdown from '../components/Dropdown';
import CheckList from '../components/CheckList';
import RadioList from '../components/RadioList';

const toolsOptions = ["React", "Tailwind", "SCSS", "NextJS"];
const dateOptions = ["Newest", "Oldest"];
const defaultTools: string[] = [];
const defaultDate = "Newest";
const numPages = Math.ceil(projectsInfo.length / 5);

const compareDates = {
  Newest: (dateA: Date, dateB: Date) => ((dateA > dateB) ? 1 : -1),
  Oldest: (dateA: Date, dateB: Date) => ((dateA < dateB) ? 1 : -1)
}

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [selectedTools, setSelectedTools] = useState(defaultTools);
  const [selectedDate, setSelectedDate] = useState<"Newest" | "Oldest">(defaultDate);
  const [selectedProjects, setSelectedProjects] = useState(projectsInfo)

  useEffect(() => {
    let currentProjects = projectsInfo.filter((project) => {
      return selectedTools.every((tool) => {
        return project.tools.includes(tool);
      }) && (project.name.includes(currentSearch) || project.description.includes(currentSearch))
    })

    const compareDate = compareDates[selectedDate];

    currentProjects.sort((a, b) => {
      const dateA = new Date(a.date.year, a.date.month);
      const dateB = new Date(b.date.year, b.date.month);

      return compareDate(dateA, dateB);
    })

    setSelectedProjects(currentProjects);
  }, [selectedTools, selectedDate, currentSearch])

  function changePage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      <h1 className="mt-24 text-4xl font-bold text-center">My Projects 🔧</h1>

      <section className="flex flex-col gap-6 items-center my-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-auto gap-4 min-h-max p-3 bg-white text-black rounded-md">
          <div className="flex items-center relative w-full md:w-72 h-10 bg-slate-200 rounded-md">
            <input type="search" placeholder="Search" onChange={(e) => { setCurrentSearch(e.target.value) }} value={currentSearch} className="text-black rounded-md w-full px-4 py-2 bg-slate-200 placeholder:text-gray-400 accent-blue-400 focus:rounded-md font-medium select-none"></input>
            <button onClick={() => { setCurrentSearch("") }} className={`absolute px-2 right-1 font-medium opacity-20 hover:scale-105 active:scale-95 transition text-lg ${!currentSearch && "hidden"}`}>X</button>
          </div>
          <div className="flex w-full md:w-auto justify-around md:justify-end md:gap-8">
            <Dropdown text="Tools \/">
              <CheckList default={defaultTools} options={toolsOptions} setFunction={(selected: []) => { setSelectedTools(selected); }} />
            </Dropdown>
            <Dropdown text="Date \/">
              <RadioList default={defaultDate} options={dateOptions} setFunction={(selected: "Newest" | "Oldest") => { setSelectedDate(selected) }} />
            </Dropdown>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full">
          {selectedProjects.slice((currentPage * 5 - 5), (currentPage * 5)).map((project) => {
            return <Project image={project.image} demo={project.demo} source={project.source} name={project.name} date={project.date} tools={project.tools} description={project.description}></Project>
          })}
          <p className={`${selectedProjects.length === 0 ? "block" : "hidden"} font-medium text-lg p-16`}>Sorry! None of my projects fit this criteria.</p>
        </div>

        <div className="flex gap-4">
          <button disabled={(currentPage === 1) ? true : false} onClick={() => { changePage(1) }} className={`${(currentPage === 1) ? "opacity-10" : ""}`}>{"<<"}</button>
          <button disabled={(currentPage === 1) ? true : false} onClick={() => { changePage(currentPage - 1) }} className={`p-0 ${(currentPage === 1) ? "opacity-10" : ""}`}>{"<"}</button>
          <div>{`Page ${currentPage} of ${numPages}`}</div>
          <button disabled={(currentPage === numPages) ? true : false} onClick={() => { changePage(currentPage + 1) }} className={`${(currentPage === numPages) ? "opacity-10" : ""}`}>{">"}</button>
          <button disabled={(currentPage === numPages) ? true : false} onClick={() => { changePage(numPages) }} className={`${(currentPage === numPages) ? "opacity-10" : ""}`}>{">>"}</button>
        </div>
      </section>
    </>
  )
}

export default Projects
