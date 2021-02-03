import React from "react";
import Card from "./components/Card/Card";
import CardText from "./components/Card/CardText";
import Links from "./components/Card/Links";
import Title from "./components/Card/Title";
import mmmp from "./images/mmmp.png";
import paradiseLogo from "./images/paradise.png";
import shouldI from "./images/shouldi.png";
import "./styles/index.css";

function App() {
  return (
    <div className="text-gray-700 lg:px-24 px-4 bg-gray-100 min-h-screen flex flex-col py-4">
      <h1 className="text-5xl font-semibold">Lucas Alley</h1>
      <div className="flex space-x-2 justify-start w-60">
        <a href="mailto:lucasalleydev@gmail.com">
          <svg
            className="w-6 h-6"
            data-darkreader-inline-fill=""
            data-darkreader-inline-stroke=""
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/LucasAlley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6"
            data-darkreader-inline-fill=""
            data-darkreader-inline-stroke=""
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </a>
      </div>
      <h2 className="font-semibold text-4xl mt-12">About Me</h2>
      <p className="lg:w-1/2 w-full text-lg">
        Software engineer with hands-on experience guiding full-stack
        development projects from conceptualization through delivery. Excellent
        at applying cutting-edge technologies and industry best practices to
        develop sleek, intuitive software.
      </p>
      <h2 className="font-semibold text-4xl mt-12 mb-4">Experience</h2>
      <div className="flex lg:space-x-6 lg:flex-row lg:justify-start flex-col justify-center lg:items-center space-y-6">
        <Card>
          <Title title="MyMacroMealPlans">
            <img
              className="h-20 w-20 object-contain"
              src={mmmp}
              alt="cute pineapple flexing"
            />
          </Title>
          <CardText>
            Launched my own SaaS. Providing User's with the tools to ease the
            process of meal plan creation, with one of the key features being a
            recipe parsing algorithm to gather macro nutrient information on
            said recipe and adjust values as needed. Landing page utilizes
            React, Next.js for improved SEO, and Tailwindcss for styling.
          </CardText>
          <Links website="https://www.mymacromealplans.com" />
        </Card>
        <Card>
          <Title title="Paradise.gg">
            <img
              className="h-20 w-20 object-contain"
              src={paradiseLogo}
              alt="beach with purple sky and palm trees"
            />
          </Title>
          <CardText>
            Collaborated with client to develop full-stack for an in-game
            marketplace. Utilized React to apply custom hooks and reusable
            assets. Utilized MVC architecture to write program with emphasis on
            security and maintainability. Wrote back-end using Node and Express;
            applied JWTs and custom middleware to facilitate authentication as
            well as create, distribute, and verify tokens.
          </CardText>
          <Links website="https://www.paradise.gg/" />
        </Card>

        <Card>
          <Title title="ShouldI">
            <img
              className="h-20 w-20 object-contain"
              src={shouldI}
              alt="cute pineapple flexing"
            />
          </Title>
          <CardText>
            Developed front-end and back-end features to create an anonymous
            message board. Constructed API with MVC architecture and security
            best practices. Utilized React and tailwindsCSS to facilitate
            front-end features with streamline code and optimized design;
            developed back-end features using Node and Express, integrating
            database functionality through MONGO.
          </CardText>
          <Links
            isPublic
            website="https://www.shouldi.so/"
            projectName="ShouldI"
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
