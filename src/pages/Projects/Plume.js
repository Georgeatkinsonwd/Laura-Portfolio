

function UpcomingWorks() {
  return (
    <div className="projectContainer">
      <div className="projectText">
        <h1 className="projectTitle">Plume</h1>

        <p className="projectDetails">
Plume is a collection of works including a sculpture, digital video and prints. Inspired by the controversial, destructive industry of deep-sea mining its designed to politically engage audiences. Drawing attention to the continual neglect of our oceans and the human impact on climate change.
</p>
          </div>
        <video className="projectVideo" controls width="800" height="500">
    <source src="https://res.cloudinary.com/dsaznciea/video/upload/ac_none/v1683036431/Upcoming%20Works/Teaser_Video_k4tw2s.mp4" type="video/mp4" />
        </video>
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036421/Upcoming%20Works/Main_Image_rnnpap.jpg" alt="Main"/>
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036421/Upcoming%20Works/Lake_vxzbp9.jpg" alt="Lake"/>
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036420/Upcoming%20Works/Lake_2_a8kak2.jpg" alt="Lake 2"/>
        <img className="projectImage" src="https://res.cloudinary.com/dsaznciea/image/upload/v1683036421/Upcoming%20Works/Lake_3_x4wewb.jpg" alt="Lake 3"/>
    </div>
  )
}

export default UpcomingWorks