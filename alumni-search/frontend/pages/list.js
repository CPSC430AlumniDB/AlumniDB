import Index from "./index.js"
import jsCookie from "js-cookie"
export default function List(){
	if(jsCookie.get("screenname") == null){return Index();}
	return "placeholder for list page"
}
