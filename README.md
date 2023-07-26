# kreddit
A client application for Reddit using React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data. The application allows users to view and search posts and comments provided by the API.

## Brief

Project Requirements:

- Build the application using React and Redux

- Version control your application with Git and host the repository on GitHub

- Use a project management tool (GitHub Projects, Trello, etc.) to plan your work

- Write a README (using Markdown) that documents your project including:
    - Wireframes
    - Technologies used
    - Features
    - Future work

- Write unit tests for your components using Jest and Enzyme

- Write end-to-end tests for your application

- Users can use the application on any device (desktop to mobile)

- Users can use the application on any modern browser

- Users can access your application at a URL

- Users see an initial view of the data when first visiting the app

- Users can search the data using terms

- Users can filter the data based on categories that are predefined

- Users are shown a detailed view (modal or new page/route) when they select an item

- Users are delighted with a cohesive design system

- Users are delighted with animations and transitions

- Users are able to leave an error state

- Get 90+ scores on Lighthouse
    _We understand you cannot control how media assets like videos and images are sent to the client. It is okay to have a score below 90 for Performance if they are related to the media from Reddit._

## Development Process

1. I started by creating a very basic wireframe in Photoshop for how the application will look on desktop and mobile. This gave me a clear goal to work towards.
2. I then generated a template React application using Vite and installed Redux and its necessary dependencies.
3. I made a basic layout with React components and styled them with SCSS.
4. I then used Postman to get familiar with reddit's JSON API.
5. I created slices in Redux to handle the state and the results from the API.
6. I then created the `PostCard` and `Dialog` components and integrated them with the data from the API.
7. I then added the search functionality.
8. I then added suitable styling using SCSS to make the application useable on any device.

### Testing

When it came to testing, I was unable to fulfill the requirements of testing components using Jest and Ezyme. This is because Enzyme is not compatible with modern versions of React, and Jest is not fully supported by Vite. So, instead, I used Vitest with Testing Library which is a modern testing library that provides the same functionality as Jest and Enzyme for current versions of React and Vite.

### Future Work

In future, I would like to add the ability for users to search comments, subreddits and users. I'd also like to add a button that gets results for a random query.