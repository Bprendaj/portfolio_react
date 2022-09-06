import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Databae</li>
        <li>ReadMe Generator</li>
        <li>Weather Dashboard</li>
        <li>Workday Scheduler</li>
        <li>Recipe Generator</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Databae</h3>
        </div>
        <div className="item">
          <img src="assets/readme.png" alt=""/>
          <h3>ReadMe Generator</h3>
        </div>
        <div className="item">
          <img src="assets/weatherdash.png" alt=""/>
          <h3>Weather Dashboard</h3>
        </div>
        <div className="item">
          <img src="assets/workdaysched.png" alt=""/>
          <h3>Workday Scheduler</h3>
        </div>
        <div className="item">
          <img src="assets/recipegen.png" alt=""/>
          <h3>Recipe Generator</h3>
        </div>
      </div>
    </div>
  )
}
