import Project from '../components/Project'
import '../styles/Homepage.css'

function Home() {
  return (
    <div className="homepage">
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036080/Outreaching%20The%20Tide/Main_Image_bqpqrf.jpg"  title="Outreaching the tide" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036140/End%20of%20Oceans/Picture13_qfdgot.jpg" title="End of Oceans" />
        <Project imgUrl="https://res-console.cloudinary.com/dsaznciea/thumbnails/v1/image/upload/v1683036197/TWVzc2FnZSBpbiBhIEJvdHRsZS9QaWN0dXJlN19icjhjcHc=/as_is" title="Message in a Bottle" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036488/In%20the%20Studio/Untitled_2023_image_3_w0agt2.png" title="Fumes" />
        <Project imgUrl="https://res-console.cloudinary.com/dsaznciea/thumbnails/v1/image/upload/v1683036383/T3h5Z2VuL0NhYmluZXRfSW5zdGFsbGF0aW9uX0ltYWdlXzFfeW53emxp/as_is" title="Oxygen" />
        <Project imgUrl="https://res-console.cloudinary.com/dsaznciea/thumbnails/v1/image/upload/v1683036271/UmVjb25uZWN0aW5nIG91ciBSb290cy8xX2pqZW93OQ==/as_is" title="Reconnecting our Roots" />
        <Project imgUrl="https://res-console.cloudinary.com/dsaznciea/thumbnails/v1/image/upload/v1683036338/U3RlcHBpbmcgU3RvbmVzL09pbF9vbl9QYXBlcl91aGk1aG8=/as_is" title="Stepping Stones" />
        <Project imgUrl="https://res-console.cloudinary.com/dsaznciea/thumbnails/v1/image/upload/v1683036421/VXBjb21pbmcgV29ya3MvTWFpbl9JbWFnZV9ybm5wYXA=/as_is" title="Plume" />
        <Project imgUrl="https://res.cloudinary.com/dsaznciea/image/upload/v1683036476/In%20the%20Studio/Untitled_Bird_with_Train_yauejs.jpg" title="Studio Work" />
    </div>
  )
}

export default Home