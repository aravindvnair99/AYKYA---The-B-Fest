const functions = require("firebase-functions"),
	express = require("express"),
	app = express(),
	morgan = require("morgan");

/*=============================================>>>>>

				= init and config =

===============================================>>>>>*/

app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");

/*=============================================>>>>>

				= basic routes =

===============================================>>>>>*/

app.get("/", (req, res) => {
	res.render("index");
});
app.get("/offline", (req, res) => {
	res.render("offline");
});
/*=============================================>>>>>

				= template routes =

===============================================>>>>>*/
app.get("/template/404", (req, res) => {
	res.render("template/404");
});
app.get("/template/blog", (req, res) => {
	res.render("template/blog");
});
app.get("/template/blogSingle", (req, res) => {
	res.render("template/blogSingle");
});
app.get("/template/contact", (req, res) => {
	res.render("template/contact");
});
app.get("/template/creativeAgency", (req, res) => {
	res.render("template/creativeAgency");
});
app.get("/template/index", (req, res) => {
	res.render("template/index");
});
app.get("/template/index2", (req, res) => {
	res.render("template/index2");
});
app.get("/template/portfolio", (req, res) => {
	res.render("template/portfolio");
});
app.get("/template/portfolioSingle", (req, res) => {
	res.render("template/portfolioSingle");
});
app.get("/template/schedule", (req, res) => {
	res.render("template/schedule");
});
app.get("/template/speaker1", (req, res) => {
	res.render("template/speaker1");
});
app.get("/template/speaker2", (req, res) => {
	res.render("template/speaker2");
});
app.get("/template/venue", (req, res) => {
	res.render("template/venue");
});
app.get("/template/errors/401", (req, res) => {
	res.render("template/errors/401");
});
app.get("/template/errors/404", (req, res) => {
	res.render("template/errors/404");
});
app.get("/template/errors/500", (req, res) => {
	res.render("template/errors/500");
});

/*=============================================>>>>>

				= legal routes =

===============================================>>>>>*/

app.get("/privacyPolicy", (req, res) => {
	res.render("legal/privacyPolicy");
});
app.get("/termsConditions", (req, res) => {
	res.render("legal/termsConditions");
});

/*=============================================>>>>>

				= errors =

===============================================>>>>>*/

app.use((req, res) => {
	res.status(404).render("errors/404");
});

exports.app = functions.https.onRequest(app);
