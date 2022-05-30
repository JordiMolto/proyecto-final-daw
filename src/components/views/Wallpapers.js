import { useState } from 'react';
import { Field, Formik, Form } from 'formik'
import '../css/wallpapers/wallpapers.css'
import FooterComp from '../layouts/FooterComp'
import WallpapersBanner from '../../imgs/banner_wallpapers2.jpg'
import WoYj5H from '../../imgs/woyth.jpeg'
import ButtonComp from '../section/ButtonComp'


function Wallpapers() {
  const [photos, setPhotos] = useState([])
  //const open = url => window.open(url)
  console.log({ photos })
  return (
    <div>

      <div className="contenedorwallp">
        <img src={WallpapersBanner} className="imgPolytics" alt="banner página wallpapers" />
        <div className="centrado">Wallpapers<p style={{ fontSize: "18px", fontWeight: "normal" }}>¡Los mejores fondos de pantalla GRATUITOS!</p></div>
      </div>

      <div className='wallp_text1'>
        <h3>Fondos de pantalla HD/4K</h3>
        <p>Descarga de fondos de pantalla o wallpapers para tu celular o escritorio PC con calidades como HD y 4k ultra UHD. Disfruta de los siguientes fondos de pantalla para tu móvil o escritorio!
        </p>
      </div>
      <div className='wallp_text2'>
        <img src={WoYj5H} className="woyj" alt="imagen descriptiva wallpapers" />
        <p>
          <b>¡Si buscas el wallpaper perfecto echa un vistazo a esta herramienta gratuita!</b> <br /><br />
          Si te resulta muy baja la resolución de las imágenes, siempre puedes usar la fiel e impecable herramienta <b>PhotoZoom Pro</b> para duplicar el tamaño de casi cualquier imagen sin perder calidad. Incluso disponemos de una app para Windows.
          <br /><br />
          Además de ser una herramienta gratuita, es muy rápida y sencilla de utilizar. Utilizando el buscador de abajo podrás encontrar cientos de Wallpapers y Fondos de pantalla de <b>unsplash.com</b> que nos permite descargar estos fondos de pantalla de una forma gratuita y segura.
        </p>

      </div>
      <div className='h3text'>
        <h5>BUSCAR FONDOS DE PANTALLA GRATUITOS:</h5>
      </div>
      <section className='buscadorWallpapers'>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            //guardar la respuesta del llamado a nuestra api de unspalsh
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID waDTH2I9BuUfQlOiHRw0BZMB-Bb0s--nCTvD-zofb6Y'
              }
            })
            const data = await response.json()
            //llamar a api de unsplash
            console.log(data)
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </section>
      <div className='containerWallpapers'>
        <div className='centerWallpapers'>
          {photos.map(photo =>
            <article key={photo.id} >
              <img alt={photo.alt_description} src={photo.urls.regular} />
              <ButtonComp className="button-general" href={photo.links.download} text="Descargar Gratis" ></ButtonComp>
            </article>)}
        </div>
      </div>
      <ButtonComp className="button-general" href="/" text="<-- Vovler atrás"></ButtonComp>
      <FooterComp></FooterComp>
    </div>
  );
}
export default Wallpapers;
