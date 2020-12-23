import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Head>
        <title>Matteo Rapa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My personal website showcasing what I have been working on the past few years."
        />
      </Head>

      <header>
        <h1 tabIndex="0">Matteo Rapa</h1>
      </header>

      <main>
        <div className="main-container">
          <section id="role">
            <div className="split">
              <div className="heading">
                <h2 tabIndex="0">
                  Junior <br /> Software Developer
                </h2>
              </div>
              <div>
                <img src="/side.webp" alt="Just some colourful lines" />
              </div>
            </div>
          </section>

          <section id="projects" className="lg">
            <h2 tabIndex="0">Projects</h2>

            <div className="list">
            
              <Link href="/project/test">
                <div className="project">
                  <img className="preview" src="/bon_rapetit_preview.webp" alt="Image showing screen of the Bon Rappetit website" />
                  <h3>Bon Rappetit</h3>
                  <p className="software">Restaurateur website</p>
                </div>
              </Link>
              <Link href="/project/#">
                <div className="project">
                  <img className="preview" src="/nemesys_preview.webp" alt="Image showing screen of the Nemesys website"/>
                  <h3>Nemesys</h3>
                  <p className="software">Reporting software</p>
                </div>
              </Link>
              
            </div>
           
            <div className="list">
            <Link href="/project/#">
                <div className="project">
                  <img className="preview" src="/myvault_preview.webp" alt="Image showing screen of the MyVault website in dark mode"/>
                  <h3>MyVault (Dark Mode)</h3>
                  <p className="software">Expense tracker</p>
                </div>
              </Link>
              <Link href="/project/#">
                <div className="project">
                  <img className="preview" src="/myvault_preview_white.webp" alt="Image showing screen of the MyVault website"/>
                  <h3>MyVault</h3>
                  <p className="software">Expense tracker</p>
                </div>
              </Link>
              
            </div>
          </section>

          <section id="experience" className="lg">
            <h2 tabIndex="0">Experience</h2>

            <div className="container">
              <h3>Raketech / Web Developer Intern</h3>
              <small>November 2019 - April 2020, St.Julians, Malta</small>
              <br />
              <p>
                Worked alongside the developer’s team and SEO executives in the
                implementation of features, and maintenance of Wordpress managed
                websites. A substantial task included implementing a API
                sportsbook with a wordpress block that shows live betting data..
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <h3>ICTSA / Marketing & Media Officer</h3>
              <small>December 2018 - December 2020, Msida, Malta</small>
              <br />
              <p>
                Part of the executive, of the student body which represents
                Maltese ICT students. My primary task includes designing
                marketing campaigns to interest students to attend educational
                and social events.
              </p>
            </div>
            <br />
            <br />

            <div className="container">
              <h3>ESTA / Junior IT Advisor</h3>
              <small>May 2017 - July 2017, Brussels, Belgium</small>
              <br />
              <p>
                Assisted colleagues to transition to the use of laptops, instead
                of desktops within the organisation. This included the
                procurement of the necessary hardware and the setting up of the
                environment for simple and secure use.
              </p>
            </div>
          </section>

          <section id="skills" className="lg">
            <h2 tabIndex="0">Skills</h2>
            <div className="container">
              <h3>Development</h3>
              <ul>
                <li>HTML, CSS3 & Vanilla Javascript</li>
                <li>UI building using React, and Next.JS framework</li>
                <li>Unit testing using Jest</li>
                <li>Git versioning control</li>
                <li>RESTful APIs using Express <code>curl -XGET 'https://matteorapa.com/hi'</code></li>
                
                
                <li>ASP.NET MVC</li>
                <li>Mobile application development using React Native)</li>
                <li>PHP and Wordpress CMS</li>
                <li>Knowledge of key terminal commands such as<code>rm -rf</code></li>
                <li>
                  Databases using MySQL, PostgreSQL, MongoDB and DynamoDB (AWS)
                </li>
              </ul>
            </div>
            <br />
            <br />

            <div className="container">
              <h3>Other</h3>
              <ul>
                <li>Visual design using Adobe Photoshop</li>
                <li>
                  Great communication with other team members and stakeholders
                </li>
                <li>
                  Time management skills obtained from previous work experiences
                </li>
              </ul>
            </div>
          </section>

          <section id="languages" className="lg">
            <h2 tabIndex="0">Languages</h2>
            <div className="container">
              <div className="lang">
                <img src="/malta.webp" alt="Maltese flag"/>
                <div>
                  <h3>Maltese</h3>
                  <small>Mother tongue</small>
                </div>
              </div>

              <div className="lang">
                <img src="/england.webp"  alt="English flag" />
                <div>
                  <h3>English</h3>
                  <small>Fluent</small>
                </div>
              </div>
              <div className="lang">
                <img src="/fr.webp"  alt="French flag" />
                <div>
                  <h3>French</h3>
                  <small>Reading and writing</small>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="lg">
            <h2 tabIndex="0">Education</h2>
            {/* do a time line here with line in the middle */}
            <div className="container">
              <ul>
                <li>
                  <h3>University of Malta / B.Sc. IT Software Development</h3>
                  <p>
                    “A dynamic course to keep students updated with the latest
                    technological and methodological arsenal for the creation of
                    quality, long-lasting commercial software solutions.”
                  </p>
                </li>

                <li>
                  <h3>St. Aloysius College / Post-Secondary Education</h3>
                </li>
                <li>
                  <h3>St. Michael School / Secondary Education</h3>
                </li>
              </ul>
            </div>
          </section>

          <section id="interests" className="lg">
            <h2 tabIndex="0">Interests</h2>

            <div className="divide">
              <img src="/cabinet.webp" alt="Picture of a black server cabinet" />
              <h3>Machine Learning</h3>
            </div>

            <div className="divide">
              <img src="/pink.webp" alt="Picture of an anstract artwork with pink lines" />
              <h3>Abstract Art</h3>
            </div>

            <div className="divide">
              <img src="/tennis.webp" alt="Eagle eye picture of 6 tennis courts at night" />
              <h3>Tennis</h3>
            </div>
          </section>

          <section id="contact" className="lg">
            <h2 tabIndex="0">Contact</h2>
            <div className="container">
              <h3>
                Send me an email on <strong>matteorapa@gmail.com</strong> or
                find me on LinkedIn
              </h3>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="split-end">
          <a href="https://www.matteorapa.com">
            Developed with ❤️ by Matteo Rapa, {year}
          </a>
        </div>
      </footer>
    </div>
  );
}
