import { useState } from 'react';
import { Field, Formik, Form } from 'formik'
import '../css/wallpapers/wallpapers.css'
import FooterComp from '../layouts/FooterComp'

function Wallpapers() {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({photos})
  return (
   <div>
     <header>
       <Formik
        initialValues={{search:''}}
        onSubmit={async values => {
          //guardar la respuesta del llamado a nuestra api de unspalsh
          const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,{
            headers:{
              'Authorization': 'Client-ID waDTH2I9BuUfQlOiHRw0BZMB-Bb0s--nCTvD-zofb6Y'
            }
          })
          const data = await response.json()
          //llamar a api de unsplash
          setPhotos(data.results)
        }}
       >
         <Form>
           <Field name="search"/>
         </Form>
       </Formik>
     </header>
     <div className='containerWallpapers'>
       <div className='centerWallpapers'>
        {photos.map(photo =>
          <article key={photo.id} onClick={()=> open(photo.links.html)}>
            <img alt="" src={photo.urls.regular} />
            
          </article>)}
       </div>
     </div>
     <FooterComp></FooterComp>
   </div>
  );
}

export default Wallpapers;
