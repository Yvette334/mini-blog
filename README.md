# Dev Insights - Mini Blog


A platform where employees can share quick tips, insights, and updates related to web development. This platform uses React,TypeScript and Vite.


## Project Setup and installation


This project uses vite.


1. clone the repository:
```
git clone https://github.com/Yvette334/mini-blog.git
cd mini-blog
```


2. Install dependencies:
```
npm install
```


3. Start the server:


```
npm run dev
```


4. In browser open `http://localhost:5173/`


5. (Optional) Build for production
```
npm run build
```


## Project Structure
```
src/
├── components/
│   ├── Header.tsx        # Logo and navigation link
│   ├── Post.tsx           # Displays a single post's details
│   ├── PostList.tsx       # Displays the list of sample posts
│   └── withLogger.tsx     # Higher-Order Component for mount/unmount logging
├── styles/
│   └── Header.css         # External CSS for the Header component
├── App.tsx                 # Root component
├── App.css
└── main.tsx                # Entry point
```


## How to Test


- In the header it displays the logo "Dev Insights" and a link "New Post".
- Two sample posts are below the header, with a title, author, content preview, date.
- The post by Alex Banks has a different background color for conditional styling.
- Open the browser console(F12) to see log messages when a component mounts and unmounts.


## Component types: Functional vs. Class


All Components in this project are **functional components** because:


- Functional component is a simpler way to define a component.
- They offer simplicity, performance and flexibility with less code than class components.
- In react functional components are the preferred choice(current standard) for the react project.
- Function components are easy to read and write.
- Using a class component would mean adding extra code which would make the project size bigger only.


 ## styling methods


 I used two styling methods


1. **External CSS:** It was used on the header component (Header.css)
2. **Inline styles:** Used it for the post and PostList component where I applied style directly to the attribute 'style'.


## Optimization strategies


**React.memo**: wrapped the Post component in the memo to prevent unnecessary re-renders.


**Unique key prop:** Added the `key={post.id}` on the PostList so that every post has its unique id and can track the items correctly.


## Higher-Order Component


**withLogger:** Is used to wrap a component and logs a message to the console when a component is mounted and unmounted using the `useEffect` Hook.


## Challenges


 **HOC Initializations:** Since this was my first time creating a Higher-Order Component, I had to learn what it was and how it worked and looked complicated.
 I solved this by knowing how it works as a reusable component and how to add the props


## External libraries
**React:** Library for building user interface.
**Vite:** A build tool and development server used to run and bundle web projects.
**Typescript:** Adds static typing to help catch errors.