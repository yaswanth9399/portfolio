import React ,{ useState }from "react";
import { useEffect }from "react";
import Pdf from '../resources/Yaswanth Potnuru RESUME.pdf';

const App = () => {
    const [style, setStyle] = useState("icon-colour  home-social");
    const [text, settext] = useState("Download PDF");
	const OnButtonClick = () => {   
        setStyle("loader");
        settext("loading");
       
		fetch(Pdf).then(response => {       
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Yaswanth Potnuru RESUME.pdf';
				alink.click();
                
			})
		})
        
	}
    useEffect(() => {
        const timer = setTimeout(() => {
          settext("Done")
        }, 6000);
    
        return () => clearTimeout(timer); ;
      }, []);
    
    
	return (
		<>
		<div class="resume-class">
			<center>
				<h1>Welcome</h1>
				<h3>Click on below button to download PDF file</h3>
				<button onClick={OnButtonClick} className={style}>
				<strong>{text} </strong>
				</button>
                <div><br></br></div>
			</center>
		</div>
		</>
	);

    
};

export default App;
