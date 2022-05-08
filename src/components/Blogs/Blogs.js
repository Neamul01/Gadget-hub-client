import React from 'react';

const Blogs = () => {
    return (
        <div className="container mb-24 mt-12 px-6 mx-auto">
            <h1 className="font-bold text-3xl mb-12 text-blue-500">Questions Answer :</h1>
            {/* first question ans */}
            <section className="mb-32 text-gray-800 text-left">
                <h1 className="font-bold text-3xl mb-6">1. Difference between Javascript and node.js.</h1>
                <div>
                    <p >
                        1. Javascript is a programming language and node.js is a runtime environment for Javascript.
                    </p>
                    <hr /><br />
                    <p >
                        2.Javascript used for clien side and node.js used for server side and for getting hardware information.
                    </p>
                    <hr /><br />
                    <p >
                        3.Javascript can run any browser engine like spidermonkey, firefox. node.js can only run in v8 engine.
                    </p>
                    <hr /><br />
                    <p >
                        4.Javascript is ECMA scripts update version and build in using C++. node js buld using C, C++ and Javascript.
                    </p>
                </div>
            </section>

            {/* second question ans  */}
            <section className="mb-32 text-gray-800 text-left">
                <h1 className="font-bold text-3xl mb-6">2. When should use node.js and when should use mongodb.</h1>
                <div>
                    <p >
                        1. node.js is used for creating server for Javascript application and mongodb is a database where we can store data.
                    </p>
                    <hr /><br />
                    <p >
                        2. mongodb gives us api's to use data and using node js we can create those api's.
                    </p>
                    <hr /><br />
                    <p >
                        3. node.js is a runtime environment for Javascript to run Javascript in server side and mongodb is a nosql database we data stored as JSON.
                    </p>
                </div>
            </section>

            {/* third question ans  */}
            <section className="mb-32 text-gray-800 text-left">
                <h1 className="font-bold text-3xl mb-6">3. Difference Between sql and nosql.</h1>
                <div>
                    <p >
                        1.SQL are Relational and NoSQL are non-Relational database.
                    </p>
                    <hr /><br />
                    <p >
                        2.SQL are used structured query language and NoSQL used nostructured query language.
                    </p>
                    <hr /><br />
                    <p >
                        3.SQL are vertically scallable and table based database and NoSQL are horizontally scallable and doccument based datdabase.
                    </p>
                    <hr /><br />
                    <p >
                        4.SQL better for multi-row transiction and NoSQL better for unstruntured doccument.
                    </p>
                </div>
            </section>

            {/* forth question ans */}
            <section className="mb-32 text-gray-800 text-left">
                <h1 className="font-bold text-3xl mb-6">4. What is the purpose of jwt and what does it work.</h1>
                <p>
                    jwt(JSON Web Token) is an open standard. It is used for authentication. To give data right person and take data safe we use jwt token. <br />
                    It has 3 different parts 'Header','Payload' and 'Signature'. Header contains type of token , payload contains information about user and signature ensures that the token is valid and from right person. <br />
                    When a user logged in or authenticted a token send to the server and after every time we want data from server we can varify user using the token so that we confirm the user is authenticated .
                </p>
            </section>


        </div>
    );
};

export default Blogs;