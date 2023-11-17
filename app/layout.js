import "./style.css";

function RootLayout({children}) {
	return(
		<html>
		<body>
		<div id='imgdiv'>
		<img src='/hittastic.png' alt='HitTastic! logo' />
		</div>
		{children}
		</body>
		</html>
	);
}

export default RootLayout;
