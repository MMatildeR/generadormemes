import React, {useState} from 'react'; //importo recursos
import html2canvas from 'html2canvas';

const Imgmeme = () =>{   

    const [textmeme, setTextmeme] = useState(); 
    const [selectedImg, setSelectedImg] = useState();

    const textomeme = (e) => {
        setTextmeme(e.target.value);
        console.log(e.target.value);
    }

    const imagenmeme = (e) => {
        setSelectedImg(e.target.value);
        console.log(e.target.value);
    }

    const descarga = (e) => {
      html2canvas(document.getElementById("nuevomeme")).then(function(canvas) {
       let img = canvas.toDataURL("fondos/jpeg");
       let link = document.createElement("a");
       link.download = "memeeditado.jpeg";
       link.href = img;
       link.click();
    });
    }

    return(
        <div>
            <h1>Creá tu propio meme</h1>

            <h2>Escribí el texto</h2>
            <input onChange={textomeme} className='' type='text' placeholder= "Poné tu frase"/>
            <h2>Elegí la imagen</h2>
            <select onChange={selectedImg}>
              <option selected class="form-select" aria-label="Default select example">Seleccioná una imagen para tu meme</option>
              <option value={1}>A ustedes...?</option>
              <option value={2}>Futurama</option>
              <option value={3}>Perro grande y perro chiquito</option>
              <option value={4}>This is fine</option>
            </select>

              <figure className='text-center' id='nuevomeme'>
                <p className='h1 text-center'>{textomeme}</p>
                <img src={`../fondos/${selectedImg}.jpeg`} alt=""/>
              </figure>

              <button onClick={descarga}>Descargá tu meme</button>
      
        </div>
    )
}

export default Imgmeme;