import Index from "./index.js"
import jsCookie from "js-cookie"
export default function Email(){
	if(jsCookie.get("username") == null){return Index()}
	return "placeholder for email page";
}
