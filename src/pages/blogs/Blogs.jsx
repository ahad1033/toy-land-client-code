import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div>
            <div>
                <Link to='/'>
                    <button className="btn btn-outline btn-accent">Go to Home</button>
                </Link>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>An access token is a short-lived credential used for authentication and authorization, while a refresh token is a long-lived token used to obtain new access tokens without reauthentication. Access tokens verify user identity and permissions in API requests, while refresh tokens enable the issuance of new access tokens when they expire. Both tokens should be stored securely on the client-side, with access tokens typically stored in memory or local storage, and refresh tokens stored in an HTTP-only secure cookie or a secure storage mechanism to prevent attacks.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are for structured data with complex relationships and require data consistency and transactions. NoSQL databases are for handling large-scale, flexible data with high performance and scalability. The choice depends on the applications specific needs.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js is a minimalist web application framework for Node.js. It provides a set of flexible and robust features to build web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and response handling. It allows developers to quickly create server-side applications with a concise and intuitive syntax.</p>
                    <br />
                    <p>Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and incorporates concepts from Angular to provide a modular and structured approach to application development. Nest.js offers features like dependency injection, declarative programming, and powerful built-in modules for handling routing, validation, database integration, and more. It promotes a layered architecture and follows the principles of SOLID design, making it suitable for building complex and maintainable applications. Nest.js also provides excellent support for TypeScript, enabling strong typing and improved developer productivity.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>The MongoDB aggregation framework is a powerful feature that allows you to perform advanced data analysis and manipulation operations on your MongoDB collections. It works by using a pipeline-based approach where data flows through multiple stages, each applying a specific operation to transform, filter, group, or compute data. It provides a wide range of operators and expressions to perform tasks such as filtering, grouping, sorting, and computing. The aggregation framework takes advantage of MongoDBs document model and query language to process and analyze data directly within the database, reducing the need for data transfer to the client application. This results in improved performance and efficiency when dealing with complex queries and large datasets.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;