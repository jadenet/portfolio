import { useEffect, useState } from "react";
import Project from "../components/Project";
import projectsInfo from "../public/projectsInfo";
import Dropdown from "../components/Dropdown";
import CheckList from "../components/CheckList";
import RadioList from "../components/RadioList";

const toolsOptions = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "NextJS",
  "Astro",
  "Tailwind",
  "SCSS",
  "Supabase",
];
const dateOptions = ["Newest", "Oldest"];
const defaultTools: [] = [];
const defaultDate = "Newest";
const projectsPerPage = 6;

const compareDates = {
  Newest: (dateA: Date, dateB: Date) => (dateA < dateB ? 1 : -1),
  Oldest: (dateA: Date, dateB: Date) => (dateA > dateB ? 1 : -1),
};

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [selectedTools, setSelectedTools] = useState(defaultTools);
  const [selectedDate, setSelectedDate] = useState<"Newest" | "Oldest">(
    defaultDate,
  );
  const [selectedProjects, setSelectedProjects] = useState(projectsInfo);

  useEffect(() => {
    let currentProjects = projectsInfo.filter((project) => {
      return (
        selectedTools.every((tool) => {
          return project.tools.includes(tool);
        }) &&
        (project.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(currentSearch.toLowerCase()))
      );
    });

    const compareDate = compareDates[selectedDate];

    currentProjects.sort((a, b) => {
      const dateA = new Date(a.date.year, a.date.month);
      const dateB = new Date(b.date.year, b.date.month);

      return compareDate(dateA, dateB);
    });

    setSelectedProjects(currentProjects);
    setCurrentPage(1);
  }, [selectedTools, selectedDate, currentSearch]);

  const numPages = Math.max(
    1,
    Math.ceil(selectedProjects.length / projectsPerPage),
  );
  const visibleProjects = selectedProjects.slice(
    currentPage * projectsPerPage - projectsPerPage,
    currentPage * projectsPerPage,
  );

  function changePage(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="space-y-8">
      <div className="section-shell space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <h1 className="text-5xl font-semibold text-[var(--ink)] sm:text-6xl">
              Projects
            </h1>
            <p className="text-lg leading-8 text-[var(--ink-soft)]">
              From experiments and hackathons, to classwork and client work, these are the projects that raised me into the developer I am now.
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
          <div className="field-shell relative w-full">
            <input
              type="search"
              placeholder="Search by project name or summary"
              onChange={(e) => {
                setCurrentSearch(e.target.value);
              }}
              value={currentSearch}
              className="w-full bg-transparent pr-8 text-[var(--ink)] outline-none placeholder:text-[color:var(--ink-soft)]"
            ></input>
            <button
              onClick={() => {
                setCurrentSearch("");
              }}
              aria-label="Clear search"
              className={`absolute right-4 text-lg font-medium text-[var(--ink-soft)] transition hover:scale-105 hover:text-[var(--ink)] ${
                !currentSearch && "hidden"
              }`}
            >
              ×
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            <Dropdown text="Tools">
              <CheckList
                default={defaultTools}
                options={toolsOptions}
                setFunction={(selected: []) => {
                  setSelectedTools(selected);
                }}
              />
            </Dropdown>
            <Dropdown text="Date">
              <RadioList
                default={defaultDate}
                options={dateOptions}
                setFunction={(selected: "Newest" | "Oldest") => {
                  setSelectedDate(selected);
                }}
              />
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => {
          return (
            <Project
              key={`${project.name}-${project.date.year}-${project.date.month}`}
              image={project.image}
              demo={project.demo}
              source={project.source}
              name={project.name}
              date={project.date}
              tools={project.tools}
              description={project.description}
            ></Project>
          );
        })}
      </div>

      <p
        className={`${
          selectedProjects.length === 0 ? "block" : "hidden"
        } section-shell w-full max-w-3xl text-center text-lg text-[var(--ink-soft)]`}
      >
        Sorry! None of my projects fit this criteria.
      </p>

      <div className="flex items-center justify-center gap-4 text-sm uppercase tracking-[0.22em] text-[var(--ink-soft)] sm:flex-row">
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={() => {
            changePage(1);
          }}
          className="secondary-button px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          &lt;&lt;
        </button>
        <button
          disabled={currentPage === 1 ? true : false}
          onClick={() => {
            changePage(currentPage - 1);
          }}
          className="secondary-button px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          &lt;
        </button>
        <p>{`Page ${currentPage} of ${numPages}`}</p>
        <button
          disabled={currentPage === numPages ? true : false}
          onClick={() => {
            changePage(currentPage + 1);
          }}
          className="secondary-button px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          &gt;
        </button>
        <button
          disabled={currentPage === numPages ? true : false}
          onClick={() => {
            changePage(numPages);
          }}
          className="secondary-button px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
        >
          &gt;&gt;
        </button>
      </div>
    </section>
  );
}

export default Projects;
