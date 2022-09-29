import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-content'>
             <div>
                <h2>1.How does React work?</h2>
                <p>React JS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>

             <div>
                <h2>2.Props and State difference?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>

             <div>
                <h2>3.What can the use effect do other than load data?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components.
                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                    useEffect accepts two arguments. The second argument is optional.
                    useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
                    This is not what we want. There are several ways to control when side effects run.
                    We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
            </div>
        </div>
    );
};

export default Blog;