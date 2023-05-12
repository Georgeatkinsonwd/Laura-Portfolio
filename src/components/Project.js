import '../styles/Project.css'

function Project({imgUrl,title}) {
  return (
  
    <a className="projectAnchor" href={title}>
    <div className="projectCover">
      
      <img src={imgUrl} alt={title} />
        <div className="overlay">
          <div className="projectName">{title}</div>
        </div>
        
        

    </div>
    </a>
  )
}

export default Project