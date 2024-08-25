import React ,{ useState }from "react";
// import { useEffect }from "react";
import Pdf from '../resources/Yaswanth_Potnuru_Resume.pdf';

const App = () => {
    const [style, setStyle] = useState("icon-colour  home-social");
    const [text, settext] = useState("Download PDF");
	const [visible, setVisible] = useState(true);
	const OnButtonClick = () => { 
		<h1>👇</h1>   
        setStyle("loader");
        settext("loading");
		setVisible((prev) => !prev);
		fetch(Pdf).then(response => {       
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Yaswanth Potnuru RESUME.pdf';
				alink.click();
			})	}
		)
        
	}
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       settext("Done")
    //     }, 6000);
    
    //     return () => clearTimeout(timer); ;
    //   }, []);
    
    
	return (
		<>
		<div class="resume-class">
			<center>
				<h1>Welcome</h1>
				<h3>Click on below button 👇 to download PDF file of my RESUME</h3>
				{visible && (
    <button onClick={OnButtonClick} className={style}>
	<strong>{text} </strong>
	</button>
      )}
                <div><br></br></div>
			</center>
		</div>
		</>
	);

    
};

export default App;
