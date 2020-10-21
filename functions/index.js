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
app.get("/about", (req, res) => {
	res.render("about");
});
app.get("/upcomingEvents", (req, res) => {
	res.render("upcomingEvents");
});
app.get("/pastEvents", (req, res) => {
	res.render("pastEvents");
});
app.get("/schedule", (req, res) => {
	res.render("schedule");
});
app.get("/organisers", (req, res) => {
	res.render("organisers");
});
app.get("/contact", (req, res) => {
	res.render("contact");
});
app.get("/campusAmbassador", (req, res) => {
	res.render("campusAmbassador");
});
app.get("/offline", (req, res) => {
	res.render("offline");
});

/*=============================================>>>>>

				= blog routes =

===============================================>>>>>*/
app.get("/culturalWeek", (req, res) => {
	res.render("pastEvents/culturalWeek");
});
app.get("/techWeek", (req, res) => {
	res.render("pastEvents/techWeek");
});
app.get("/managementWeek", (req, res) => {
	res.render("pastEvents/managementWeek");
});

/*=============================================>>>>>

				= eventPoster routes =

===============================================>>>>>*/

/* Management Events */

app.get("/visleshana", (req, res) => {
	res.render("eventPosters/visleshana");
});
app.get("/pitchPeak", (req, res) => {
	res.render("eventPosters/pitchPeak");
});
app.get("/businessMavericks", (req, res) => {
	res.render("eventPosters/businessMavericks");
});
app.get("/tradeOMania", (req, res) => {
	res.render("eventPosters/tradeOMania");
});
app.get("/scope", (req, res) => {
	res.render("eventPosters/scope");
});
app.get("/wireHire", (req, res) => {
	res.render("eventPosters/wireHire");
});

/* Cultural Events */

app.get("/bestFootForward", (req, res) => {
	res.render("eventPosters/bestFootForward");
});
app.get("/conquerTheSquares", (req, res) => {
	res.render("eventPosters/conquerTheSquares");
});
app.get("/openMicComedy", (req, res) => {
	res.render("eventPosters/openMicComedy");
});
app.get("/shipwreck", (req, res) => {
	res.render("eventPosters/shipwreck");
});
app.get("/openMicMusic", (req, res) => {
	res.render("eventPosters/openMicMusic");
});
app.get("/battleOfTheBands", (req, res) => {
	res.render("eventPosters/battleOfTheBands");
});
app.get("/openMicTalk", (req, res) => {
	res.render("eventPosters/openMicTalk");
});
app.get("/artGallery", (req, res) => {
	res.render("eventPosters/artGallery");
});

/* Technical Events */

app.get("/arivu", (req, res) => {
	res.render("eventPosters/arivu");
});
app.get("/blockChain", (req, res) => {
	res.render("eventPosters/blockChain");
});
app.get("/chatBots", (req, res) => {
	res.render("eventPosters/chatBots");
});
app.get("/mathWorks", (req, res) => {
	res.render("eventPosters/mathWorks");
});
app.get("/nlp", (req, res) => {
	res.render("eventPosters/nlp");
});
app.get("/sigma", (req, res) => {
	res.render("eventPosters/sigma");
});
app.get("/ramanujan", (req, res) => {
	res.render("eventPosters/ramanujan");
});
app.get("/curbTheDiseases", (req, res) => {
	res.render("eventPosters/curbTheDiseases");
});
app.get("/gameNite", (req, res) => {
	res.render("eventPosters/gameNite");
});
app.get("/webinarOnAstrophotography", (req, res) => {
	res.render("eventPosters/webinarOnAstrophotography");
});
app.get("/webinarOnFutureECE", (req, res) => {
	res.render("eventPosters/webinarOnFutureECE");
});
app.get("/workshopOnAWS", (req, res) => {
	res.render("eventPosters/workshopOnAWS");
});
app.get("/workshopOnML", (req, res) => {
	res.render("eventPosters/workshopOnML");
});
app.get("/vlsi", (req, res) => {
	res.render("eventPosters/vlsi");
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
