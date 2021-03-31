import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer'
import Nav from './Nav'


export default function Layout(props) {
  return (
	<>
    <Header/>
    <div>
      {props.children}
    </div>
    <Footer/>
	</>
  );
}
