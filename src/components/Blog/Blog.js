import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
     return (
          <div>
               <h1 className='text-primary text-center mt-5'>Blog Post</h1>

               <div className='container'>
                    <Accordion defaultActiveKey="0" flush>
                         <Accordion.Item eventKey="0">
                              <Accordion.Header> <h4>What is the purpose of react router?</h4></Accordion.Header>
                              <Accordion.Body>
                                   Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                                   React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                              </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="1">
                              <Accordion.Header> <h4>How to work context api in react?</h4> </Accordion.Header>
                              <Accordion.Body>
                                   The React Context API has been around as an experimental feature for a while now, but only in React’s version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.

                                   This new API solves one major problem–prop drilling. Even if you’re not familiar with the term, if you’ve worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.
                              </Accordion.Body>
                         </Accordion.Item>
                         <Accordion.Item eventKey="2">
                              <Accordion.Header> <h4>Why do we use useref hook?</h4> </Accordion.Header>
                              <Accordion.Body>
                                   The useRef hook may not be as popular as other hooks such as useState, useEffect and useReducer. Due to this, it may not be clear what is the purpose of this hook. Nonetheless, useRef hook can be very useful in certain situations. The ref, in useRef, is a shorthand for “reference”.

                                   What this hook does is it allows you to store data, and persist them across renders. What’s even more interesting and important, this hook does this without causing the component to re-render. This means that when you update the value stored by useRef, React will not re-render your component.

                                   The most common use case for the useRef hook is to store references to DOM nodes and React components. This then allows you to access these nodes directly and work with them as you need. This is similar to using JavaScript querySelector() method to find DOM node and storing the node in a variable.
                              </Accordion.Body>
                         </Accordion.Item>
                    </Accordion>
               </div>
          </div>
     );
};

export default Blog;