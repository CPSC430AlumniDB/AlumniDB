import Index from "./index.js"
import jsCookie from "js-cookie"
export default function Pending(){
	if(jsCookie.get("screenname") == null){return Index();}
	return "Placeholder for Pending Page";
}
                                                      
