import LinkedIn from '../public/links/linkedin.svg';
import Email from '../public/links/email.svg';
import GitHub from '../public/links/github.svg';
import Resume from '../public/links/resume.svg';
import Tools from '../public/tools.svg';
import LogoLink from '../components/LogoLink';

function Home() {
  return (
    <>
      <section className="w-full my-32 md:mt-0 flex flex-col justify-center md:justify-start items-center gap-6">
        <div className="w-full md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 items-center">
            <h1 className="text-5xl font-black text-center">Jaden Edwards</h1>
            <h6 className="text-xl font-normal text-center">Software Engineer</h6>
            <div className="flex gap-3">
              <LogoLink src={LinkedIn} href="" />
              <LogoLink src={Email} href="mailto:jaedwards35@proton.me" />
              <LogoLink src={GitHub} href="https://github.com/jadenet" />
              <LogoLink src={Resume} href="" />
            </div>
          </div>

          <Tools className="hidden md:block md:max-w-xl" />
        </div>
        <a href="/projects" className="shadow-md font-bold px-5 py-4 rounded-lg hover:brightness-95 active:scale-95 transition bg-button_primary text-sm">View projects</a>
      </section>
    </>
  )
}

export default Home
