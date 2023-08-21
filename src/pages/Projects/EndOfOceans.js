import '../../styles/ProjectPage.css'

function EndOfOceans() {
  return (
    <div className="projectContainer">
      <div className="projectText">
        <h1 className="projectTitle">End of Oceans 2022</h1>

        <p className="projectDetails">Infused by the concept of an overwhelming force of water, End of Oceans draws to mind its power, beauty, and the current climate impact concerns.
</p>
          </div>

        <video className="projectVideo" controls width="800" height="500">
    <source src="https://res.cloudinary.com/dsaznciea/video/upload/v1683036188/End%20of%20Oceans/The_End_of_Oceans_zkwr2e.mp4" type="video/mp4" />
        </video>
        <div className="projectImgContainer">
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036140/End%20of%20Oceans/Picture13_qfdgot.jpg" alt="full view" />
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036138/End%20of%20Oceans/Close_up_3_ce0pv2.jpg" alt="close up 3" />
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036137/End%20of%20Oceans/Close_Up_2_qxa57p.jpg" alt="close up 2" />
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036137/End%20of%20Oceans/Close_Up_1_ipywx9.jpg" alt="close up" />
        </div>
    </div>
  )
}

export default EndOfOceans