![aihub](https://socialify.git.ci/amaan14999/aihub/image?font=Bitter&language=1&name=1&owner=1&theme=Dark)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# Atlan Frontend Task: AI/LLM Marketplace

Link to the application: [AiHub](https://ai-hub-ten.vercel.app/)

## Introduction

This is a simple web application that allows users to browse and search for AI/LLM models. The application is developed as a part of the Atlan Frontend Task.
</br>
The application is built using React and Tailwind CSS.

## Tech Stack

- React.js
- Next.js
- Tailwind CSS

## Data

The data for the application is being fetched by making an api call to the pastebin, [Katbin](https://katb.in/). This data is fetched in the context of the application(`src/context/AIModelContext`) and is used to display the models on the home page. The data is fetched using the `useEffect` hook and is stored in the state using the `useState` hook.

The data is fetched from the following url: [https://katb.in/atlan-fe-task/raw](https://katb.in/atlan-fe-task/raw)

The data is also stored in `test-json` in case someeone wants to host the data on their own server.

## Features

- Users can browse through the models on the home page.
- Users can search for models using the search bar.
- Users can view the details of a model by clicking on the model card.
- Users can sort the models based on various parameters.
- Users can filter the models based on the category of the model.
- Displays featured models on the home page.
- Users can add a model to their favourites.

### Brownie Points

- Users can create a new model and add it to the list of models.

</br>
Since the application is using context to manage the state after fetching the data, the data is being fetched only once and is being used throughout the application. This is done to avoid making multiple api calls to the server thereby increasing the performance of the application.

## Installation

To run the application on your local machine, follow the steps below:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/amaan14999/AIHub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AIHub
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000/` to view the application.

## Page Speed and Performance

To evaluate the performance of this web application, I utilized Google Lighthouse, a comprehensive tool for auditing the quality of web pages. This tool was instrumental in providing insights into the page speed and load times of this application.
The analysis included measurements of key performance indicators such as

- First Contentful Paint,
- Largest Contentful Paint,
- Total Blocking Time,
- Cumulative Layout Shift, and
- Speed Index.

For page loading time of this application, I have used the `First Contentful Paint (FCP)` and `Largest Contentful Paint (LCP)` metrics. These two are the most directly relevant to how quickly the page's content becomes visible to the user, which is what most people consider as "loading time".

The results of the analysis are as follows:

- Homepage load time and performance <strong>`FCP: 0.3s`, `LCP: 0.4s`</strong>:
  <img width="720" alt="HomePage.jpg" src="https://github.com/amaan14999/atlan-sql-editor/assets/73187712/db65ad8d-07db-401b-9eab-88b0a70925a9">

The application is deployed on Vercel which is considered to be one of the fastest hosting platforms.

## Problem Statement

### Hiring Task | FE Intern - Marketplace

#### Scenario

Given the recent surge in interest in AI models and LLMs, you have been tasked with building an application that showcases the various models deployed by organisations and developers alike. The application will go live as-is, so it is up you to develop an interface which is informative and enticing. The application should capture the nuances of a real-life production application, and show the various models available, their categories, and should allow end-users to select and explore any one model.

#### Breakdown

##### 💡 Ideation

- **A space for browsing models**. This page should list down the various models available on your platform. What models you choose to display, how they’re laid out, and what information is shown up-front is completely up to you.
    <aside>
    ⚠️ Just keep one thing in mind: don’t create a list of models within the client-side code. Instead, create a mock API using a free REST API like [{JSON} Placeholder](https://jsonplaceholder.typicode.com/), and then leverage this API to enrich your interface.
    
    </aside>

- **A wall to display featured models.** Some models are shown more love than others, and your application should show these loved models on a separate wall of their own. Tell us why these models are featured: have they been viewed a lot of times, maybe certain devs have added them to their list of favourite models?
- **A space for diving into specific models.** What if a developer wants to check out a certain model? Every model should also have a dedicated page that allow end users to dive deeper into the given model. If you want to sprinkle in additional details, go right ahead, but a very minimal page would ideally contain: a description of the model and the provider, a snippet of code showing an example of using it, potential use cases.

#### Brownie Points

- **A space for creating these models.** Not the models, per-se, just a space for providers to upload information about their models, so that they can be shown in the “Explore” space. Remember, that this should tie in seamlessly with the application that you’ve built already.
- **“Try it out”**. Let users get their hands dirty with a specific model. Add a space where they can try a model without writing code. For example, an image-to-text model could have a space for uploading an image and then the model could output some text. Think of ways you can add this to the API you created above.
- **Let your creativity run amok.** Think of things that could add value to your application, if you have some extra time on your hands, that is.

#### Judging Criteria

- The overall structure and planning of your application's functionalities, both core and advanced.
- How well you anticipated and built for the most basic needs of your users.
- The reasoning behind choosing the specific features that you developed for your application.
- The value added by the additional features that you included in your application.
- The layout structure of your interface and how that enhances the overall user experience.
- Anticipation and preparation for the user actions within your interface.
- Quality and structure of your code, and the overall readability.
- The load time of your application and the time taken to re-render.
- The performance of your web application in terms of speed and efficiency.
- Adherence to the fundamental best practices of coding.

##### Notes

1. Use a JavaScript framework for your application, such as [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), [Svelte](https://svelte.dev/), or any other framework. **DO NOT CODE IN VANILLA JAVASCRIPT.**
2. Host your code on a version control system, such as GitHub, GitLab or BitBucket. **SEND US THE LINK TO YOUR PROJECT, NOT A ZIP FILE.**
3. Deploy your application on services such as [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/), and send us the link to your deployed project. **DO NOT EXPECT THE JUDGE TO INSTALL YOUR APPLICATION ON A LOCAL INSTANCE.**
4. You are free to use any external library and dependency, as long as you mention it in the README.
5. In the README of your project, include the following details:
   1. A basic overview of your project.
   2. The JavaScript framework you chose, along with any major plugins or packages you installed.
   3. The page load time of your application, and how you measured this time.
   4. Any optimisations you did to decrease the load time or increase performance.

## 👨‍💻 Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/amaan14999"><img src="https://avatars.githubusercontent.com/u/73187712?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Amaan</b></sub></a><br /></td>  
  </tr>
</table>
