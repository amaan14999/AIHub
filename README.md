![aihub](https://socialify.git.ci/amaan14999/aihub/image?font=Bitter&language=1&name=1&owner=1&theme=Dark)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# AI/LLM Marketplace

Link to the application: [AiHub](https://ai-hub-ten.vercel.app/)

## Introduction

This is a simple web application that allows users to browse and search for AI/LLM models.
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
  <img width="720" alt="HomePage.jpg" src="https://github.com/amaan14999/AIHub/assets/73187712/7e58d672-4f25-45f3-a7a8-699046293901">

The application is deployed on Vercel which is considered to be one of the fastest hosting platforms.

## 👨‍💻 Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/amaan14999"><img src="https://avatars.githubusercontent.com/u/73187712?v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Amaan</b></sub></a><br /></td>  
  </tr>
</table>
