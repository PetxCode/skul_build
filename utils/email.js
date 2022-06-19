const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
	"922981826695-rviuikdrd4rk1kbsake7iusml8qb2ibc.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const CLIENT_TOKEN =
	"4/0AX4XfWg_vE6SU-W9lMKzVWPR14HQquZF4A3LWO0L0wlifqCQpzHUCNn5L9GTFZK5c1OCsg";
const CLIENT_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, CLIENT_REDIRECT);

const sendEmail = async () => {
	try {
		const access = await oAuth.getAccessToken();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				clientId: CLIENT_ID,
				clientSecret: CLIENT_SECRET,
				refreshToken: CLIENT_TOKEN,
				accessToken: access.token,
			},
		});
	} catch (error) {
		return error;
	}
};
