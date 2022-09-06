import "./portfolio.scss"

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
        <li>Featured</li>
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
          <img src="assets/databaee.png" alt=""/>
          <h3>Databae</h3>
        </div>
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Databae</h3>
        </div>
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Databae</h3>
        </div>
        <div className="item">
          <img src="assets/databaee.png" alt=""/>
          <h3>Databae</h3>
        </div>
      </div>
    </div>
  )
}
