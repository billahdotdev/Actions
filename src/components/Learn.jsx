"use client"

import { useState } from "react"
import { Code, Book, Palette, LogIn } from "lucide-react"
import "../styles/Learn.css"

const Learn = () => {
  const [activeTab, setActiveTab] = useState("html")

  const tabs = [
    { id: "html", name: "HTML", icon: <Code /> },
    { id: "css", name: "CSS", icon: <Palette /> },
    { id: "javascript", name: "JavaScript", icon: <LogIn /> },
    { id: "react", name: "React", icon: <Book /> },
  ]

  const content = {
    html: {
      title: "HTML: Structuring the Web",
      theory: `
        HTML (HyperText Markup Language) is the backbone of web content. It's a markup language that defines the structure of your content. Here are some key theoretical concepts:

        1. Document Object Model (DOM):
           The DOM is a programming interface for HTML and XML documents. It represents the structure of a document as a tree-like hierarchy of objects.

        2. Semantic HTML:
           Semantic HTML involves using HTML elements that carry meaning about the structure of your content, rather than just for presentation. HTML5 introduced new semantic elements like <header>, <nav>, <article>, <section>, <aside>, and <footer>, which improve accessibility and SEO.

        3. Accessibility (a11y):
           HTML plays a crucial role in web accessibility. Proper use of semantic elements, ARIA attributes, and alt text for images ensures that your content is accessible to all users, including those using assistive technologies.

        4. Metadata:
           HTML <meta> tags in the <head> section provide metadata about the HTML document. This includes character encoding, viewport settings for responsive design, and information for search engines and social media platforms.

        5. Forms and Validation:
           HTML forms are the primary way of collecting user input on the web. HTML5 introduced new input types (e.g., date, email, tel) and attributes (e.g., required, pattern) that allow for client-side form validation, improving user experience and reducing server load.

        6. Multimedia Integration:
           HTML5 introduced native support for audio and video playback without the need for plugins. The <audio> and <video> elements, along with their APIs, allow for rich multimedia experiences directly in the browser.

        7. Web Components:
           This is a suite of different technologies allowing you to create reusable custom elements with their functionality encapsulated away from the rest of your code. It includes Custom Elements, Shadow DOM, and HTML Templates.

        8. HTML5 APIs:
           HTML5 introduced several powerful APIs that extend the capabilities of web applications. These include the Geolocation API for accessing user location, Web Storage for client-side data storage, and the Canvas API for 2D drawing.

        9. Responsive Images:
           The <picture> element and srcset attribute allow developers to provide different image sources for different screen sizes and resolutions, optimizing performance and user experience across devices.
      `,
    },
    css: {
      title: "CSS: Styling the Web",
      theory: `
        CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in HTML or XML. Here are some key theoretical concepts:

        1. The Cascade:
           The 'cascading' in CSS refers to the way the browser decides which CSS rules to apply when multiple rules target the same element. It involves concepts like specificity, inheritance, and the order of CSS rules.

        2. Box Model:
           The CSS box model is the foundation of layout on the web. It describes how elements are rendered as boxes with content, padding, borders, and margins. Understanding the box model is crucial for controlling layout and spacing.

        3. Positioning:
           CSS offers several positioning schemes: normal flow, floats, and absolute positioning. Each has its use cases and affects how elements are laid out on the page.

        4. Flexbox and Grid:
           These are powerful CSS layout systems. Flexbox is designed for one-dimensional layouts (rows or columns), while Grid is for two-dimensional layouts (rows and columns simultaneously). They provide robust solutions for creating complex, responsive layouts with less code.

        5. Responsive Design:
           This involves creating web pages that look good on all devices. It's typically done using media queries, flexible grids, and flexible images. CSS plays a crucial role in implementing responsive design strategies.

        6. CSS Preprocessors:
           Tools like Sass, Less, and Stylus extend CSS with variables, nested rules, mixins, functions, and more. They can make CSS more maintainable and efficient to write, especially for larger projects.

        7. CSS-in-JS:
           This is a styling technique where JavaScript is used to style components. It allows for dynamic styling and helps in creating scoped styles for components in JavaScript frameworks. Popular libraries include styled-components and Emotion.

        8. CSS Animations and Transitions:
           CSS provides powerful tools for creating animations and smooth transitions between property values. This includes keyframe animations for complex, multi-step animations, and transition properties for smooth state changes.

        9. CSS Custom Properties (Variables):
           These allow you to store specific values to be reused throughout a document. They follow the cascade and can even be manipulated with JavaScript, enabling dynamic theming and reducing repetition in stylesheets.

        10. CSS Modules:
           A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. This approach helps in avoiding naming conflicts and makes styles more maintainable in large applications.
      `,
    },
    javascript: {
      title: "JavaScript: Programming the Web",
      theory: `
        JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's a core technology of the World Wide Web. Here are some key theoretical concepts:

        1. Event-Driven Programming:
           JavaScript uses an event-driven programming model. This means that much of the code is designed to react to events (like a user clicking a button) rather than following a predetermined sequence of instructions.

        2. Asynchronous Programming:
           JavaScript is single-threaded, but it supports asynchronous operations through callbacks, promises, and async/await syntax. This allows for non-blocking code execution, which is crucial for handling operations like network requests.

        3. Closures:
           A closure is the combination of a function and the lexical environment within which that function was declared. Closures allow a function to access variables in its outer (enclosing) scope even after the outer function has returned.

        4. Prototypal Inheritance:
           JavaScript uses prototypal inheritance, where objects can inherit properties and methods directly from other objects. This is different from classical inheritance used in many other object-oriented languages.

        5. Functional Programming:
           JavaScript supports functional programming paradigms. Functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

        6. Modules:
           JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain the code-base as the project gets larger. ES6 introduced a standardized module format with import and export statements.

        7. The Event Loop:
           The event loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. Understanding the event loop is crucial for writing efficient JavaScript code.

        8. Hoisting:
           Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Understanding hoisting is important for avoiding unexpected behavior in your code.

        9. Strict Mode:
           Strict mode is a way to opt in to a restricted variant of JavaScript. It eliminates some JavaScript silent errors by changing them to throw errors and fixes mistakes that make it difficult for JavaScript engines to perform optimizations.

        10. ES6+ Features:
           ECMAScript 2015 (ES6) and later versions introduced many new features to JavaScript, including arrow functions, template literals, destructuring, spread/rest operators, and more. These features enhance the language's expressiveness and capabilities.

        11. Web APIs:
           JavaScript can interact with various Web APIs provided by the browser, such as the DOM API for manipulating web pages, the Fetch API for making HTTP requests, and the Web Storage API for client-side data storage.

        12. TypeScript:
           TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and modules to the language, making it easier to develop and maintain large-scale JavaScript applications.
      `,
    },
    react: {
      title: "React: Building User Interfaces",
      theory: `
        React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer for web and mobile apps. Here are some key theoretical concepts:

        1. Component-Based Architecture:
           React is built around the concept of reusable components. These components are self-contained modules that render some output. They can be as simple as a button, or as complex as an entire page.

        2. Virtual DOM:
           React uses a virtual DOM (Document Object Model) to improve performance. Instead of updating the browser's DOM directly, React updates a virtual DOM first, calculates the most efficient way to update the browser's DOM, and then updates only the necessary parts of the actual DOM.

        3. Unidirectional Data Flow:
           React implements a one-way data flow model. This means that data in a React application flows in one direction: from parent components to child components. This makes the application more predictable and easier to understand.

        4. JSX:
           JSX is a syntax extension for JavaScript that looks similar to XML. It's not necessary to use JSX with React, but it makes the code more readable and writing it more efficient.

        5. State and Props:
           State is data that changes over time in a component. Props (short for properties) are how components receive data from their parent. Understanding the difference and proper usage of state and props is crucial in React.

        6. Lifecycle Methods:
           Class components in React have lifecycle methods that allow you to run code at specific points in a component's life. Although hooks are now preferred, understanding lifecycle methods is still important for maintaining legacy code.

        7. Hooks:
           Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have largely replaced class components as the preferred way of writing React code. Key hooks include useState, useEffect, useContext, and useReducer.

        8. Context:
           Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

        9. Reconciliation:
           This is the algorithm React uses to diff one tree with another to determine which parts need to be changed. Understanding reconciliation can help you write more performant React applications.

        10. Server-Side Rendering (SSR):
           SSR is the ability of a JavaScript application to render on the server rather than in the browser. React has built-in support for SSR, which can significantly improve the perceived loading speed of your application.

        11. React Router:
           While not part of React core, React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

        12. State Management:
           For larger applications, state management libraries like Redux or MobX are often used with React. These libraries provide a centralized store for state that can be accessed by any component, making it easier to manage complex application states.
      `,
    },
  }

  return (
    <div className="learn-container">
      <h1 className="learn-title">Learn Web Development Basics</h1>
      <div className="learn-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`learn-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
      <div className="learn-content">
        <h2>{content[activeTab].title}</h2>
        <div className="theory">
          {content[activeTab].theory.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="update-message">
        <p>
          Stay tuned! We're constantly updating our content to bring you the latest in web development theory and best
          practices.
        </p>
      </div>
    </div>
  )
}

export default Learn

