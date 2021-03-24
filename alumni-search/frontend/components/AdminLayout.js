import Sidebar from "./Sidebar";

const AdminlayoutStyle = {
	margin: "auto auto",
	padding: 20,
	textalign: "center",
	border: "3px solid blue",
		

};

export default function AdminLayout(props) {
  return (
        <>
                <div style = {AdminlayoutStyle}>
                        <Sidebar/>
                        {props.children}
                </div>
        </>
  );
}
