function About() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-8 items-center my-12 mx-24 md:mx-52">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-4xl font-bold text-center min-w-fit">About me</h2>
          <p className="flex flex-col gap-6 text-center items-center mx-12">
            Hello! My name's Jaden, I'm currently a computer science major at
            USF. I aspire to become a software engineer, especially in web
            development. I have an interest in learning new technologies while
            continuing to improve on ones that I already know. I hope to become
            the best that I can be through continuous experience and hard work.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
