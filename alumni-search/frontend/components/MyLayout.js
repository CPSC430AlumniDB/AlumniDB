import Footer from './Footer'

const layoutStyle = {
  margin: 0,
  padding: 0,
};

export default function Layout(props) {
  return (
	<>
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer/>
	</>
  );
}
