import Express from "express";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

let appName = "Node Js with express testing";

export { app, appName };
