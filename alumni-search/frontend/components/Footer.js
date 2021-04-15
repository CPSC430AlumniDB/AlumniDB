import FooterStyle from '../styles/footer.module.css'
import Link from "next/link";

const Footer = () => {
	return(
		<footer>
			<p className={FooterStyle.foot}>ESAMS | Environmental Science Alumni Management System</p>
		</footer>
		)
}

export default Footer