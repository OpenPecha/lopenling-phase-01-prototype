let crypto = require("crypto");
import { getSession } from "./session.server";

var randomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
async function getNonce() {
  let nonce;
  let session = await getSession();
  if (session.has("sso_nonce")) {
    nonce = session.get("sso_nonce");
  } else {
    nonce = randomString(32);
    session.set("sso_nonce", nonce);
  }
  return nonce;
}

export let redirectDiscourse = async function () {
  let url = process.env.DISCOURSE_SSO_LOGIN_URL;
  let nonce = await getNonce();
  let return_url = process.env.DISCOURSE_SSO_REDIRECT;
  let payload = `nonce=${nonce}&return_sso_url=${return_url}`;
  let payloadBase64 = btoa(payload);
  var signature = crypto
    .createHmac("sha256", process.env.DISCOURSE_SSO_KEY)
    .update(Buffer.from(payloadBase64, "utf-8"))
    .digest("hex");

  let qs = new URLSearchParams({
    sso: payloadBase64,
    sig: signature,
  }).toString();
  url = url + "?" + qs;
  return url;
};
