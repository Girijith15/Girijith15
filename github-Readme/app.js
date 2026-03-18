const {useState,useEffect} = React;

function Card(){

const [flip,setFlip] = useState(false);

useEffect(()=>{

setInterval(()=>{

setFlip(prev => !prev);

},4000);

},[])

return(

<div className="container">

<div className={flip ? "card flip" : "card"}>

<div className="side">

<h2>Backend Developer</h2>

<div className="skills">

<div className="skill">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
<p>Java</p>
</div>

<div className="skill">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"/>
<p>SpringBoot</p>
</div>

<div className="skill">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
<p>MySQL</p>
</div>

{/* <div className="skill">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
<p>React</p>
</div> */}

</div>

</div>

<div className="side back">

<div className="ball"></div>

<h2>Java Backend Developer</h2>

<p>
Developing scalable and high-performance RESTful APIs using Java and Spring Boot. 
Experienced in designing efficient database solutions with MySQL and building robust backend architectures.
</p>

</div>

</div>

</div>



)

}

ReactDOM.createRoot(document.getElementById("root")).render(<Card/>)

