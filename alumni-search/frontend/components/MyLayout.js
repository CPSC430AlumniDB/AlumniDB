import Header from './Header';
import Sidebar from './Sidebar';

const layoutStyle = {
  margin: "auto auto",
  padding: 20,
  textAlign: "center",
  border: "3px solid blue",
};

export default function Layout(props) {
  return (
	<>
    		<div style={layoutStyle}>
			<Header/>
      			 {props.children}
    		</div>
	</>
  );
}
