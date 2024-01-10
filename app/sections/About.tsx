import InfiniteSlider from "../components/about/InfiniteSlider";
import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About" className="sm:h-screen-mobile">
      <div className="flex flex-col gap-8">
        <div className="flex-1 mt-4">
          <h3 className="text-3xl text-terciary mb-4 sm:text-2xl">Who is me</h3>

          <p className="text-muted sm:text-sm">
            Im a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            <br /><br />
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community.
            <br /><br />
            Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming Im
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then dont hesitate to contact me.
          </p>
        </div>

        <div>
          <h3 className="text-3xl text-terciary mb-10 sm:text-2xl sm:mb-4">My skills and technologies</h3>
          <InfiniteSlider />
        </div>
      </div>
    </Section>
  );
}
