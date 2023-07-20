# kreddit
A client application for Reddit using React and Redux. Reddit is a website where people share links to articles, media and other things on the web. The Reddit API provides data. The application allows users to view and search posts and comments provided by the API.

## Development Process

### Testing
When it came to testing, I was unable to fulfill the requirements of testing components using Jest and Ezyme. This is because Enzyme is not compatible with modern versions of React, and Jest is not fully supported by Vite. So, instead, I used Vitest which is a modern testing library that provides the same functionality as Jest and Enzyme for current versions of React and Vite.

#### reddit Search Query Options
| Option | `type` | `sort` | `t` |
| ------ | ------ | ------ | --- |
| Values |<ul><li>`link` (Posts) <li>`comment` <li>`sr` (subreddits) <li>`user`</ul>|<li>`relevance`<li>`hot` (`link` only)<li>`top`<li>`new`</ul><br />None of these can be used for `sr` or `user` |<ul><li>`all`<li>`year`<li>`month`<li>`week`<li>`day`<li>`hour`</ul>|