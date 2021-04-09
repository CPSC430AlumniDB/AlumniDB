import Header from './Header';
import Footer from './Footer'

const layoutStyle = {
  margin: "auto auto",
  padding: 20,
  textAlign: "center",
  border: "3px solid blue",
};

export default function Layout(props) {
  return (
	<>
    <Header/>
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer/>
	</>
  );
}
