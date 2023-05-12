import Project from '../components/Project'
import '../styles/Homepage.css'

function Home() {
  return (
    <div className="homepage">
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036080/Outreaching%20The%20Tide/Main_Image_bqpqrf.jpg"  title="Outreaching the tide" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036140/End%20of%20Oceans/Picture13_qfdgot.jpg" title="End of Oceans" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036198/Message%20in%20a%20Bottle/Picture10_lbqa40.jpg" title="Message in a Bottle" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036488/In%20the%20Studio/Untitled_2023_image_3_w0agt2.png" title="Fumes" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036383/Oxygen/Cabinet_Installation_Image_1_ynwzli.jpg" title="Oxygen" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036270/Reconnecting%20our%20Roots/3_w0htpv.jpg" title="Reconnecting our Roots" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036338/Stepping%20Stones/Oil_on_Paper_uhi5ho.jpg" title="Stepping Stones" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036421/Upcoming%20Works/Main_Image_rnnpap.jpg" title="Plume" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036476/In%20the%20Studio/Untitled_Bird_with_Train_yauejs.jpg" title="Studio Work" />
    </div>
  )
}

export default Home