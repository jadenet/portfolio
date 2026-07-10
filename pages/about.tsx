function About() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-8 items-center my-12 mx-24 md:mx-52">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-4xl font-bold text-center min-w-fit">About me</h2>
          <p className="flex flex-col gap-6 text-center items-center mx-12">
            Hello! My name's Jaden, I'm a Full-Stack Developer with a bachelor's degree in computer science.
            My main programming languages include JavaScript, TypeScript, and Python, allowing me to develop a wide range of applications across different platforms.
            I have an interest in learning new technologies while continuing to improve on ones that I already know.
            I look forward to contributing to innovative projects and continuously growing as a developer.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
