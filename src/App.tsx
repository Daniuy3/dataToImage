
import { useRef, useState } from 'react'
import './App.css'
import html2canvas from 'html2canvas';
const initialData  = [
  {
      "description": "Banco Paga Todo es Para Todos",
      "age": 10,
      "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-pagatodo.jpeg?alt=media&token=38b6ac4d-85ac-4288-bada-88eb5a0dec20",
      "bankName": "Paga Todo"
  },
  {
      "description": "BBVA Bancomer Creando Oportunidades",
      "bankName": "BBVA Bancomer",
      "age": 11,
      "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-bbva.jpeg?alt=media&token=435ed70e-061b-4a80-a216-c69cea04f068"
  },
  {
      "description": "Scotiabank Creando Tú decides, Nosotros te Asesoramos",
      "bankName": "Scotiabank México",
      "age": 9,
      "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo.scotiabank.jpg?alt=media&token=1029cc0b-7bff-4f5c-90f7-d96ca60f9619"
  },
  {
      "description": "Citibanamex, lo mejor de México, lo mejor del mundo.",
      "bankName": "Citibanamex",
      "age": 7,
      "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-citi.png?alt=media&token=da97f3ad-34b2-4f7d-ae59-3169238993c7"
  },
  {
      "description": "Banregio: Somos el banco de creadores",
      "bankName": "Banregio",
      "age": 5,
      "url": "https://firebasestorage.googleapis.com/v0/b/stagingpagatodo-286214.appspot.com/o/Challenge%2Flogo-banregio.png?alt=media&token=ae605bda-5698-4bf8-9639-d4fdc9579b5c"
  }
]

function App() {

  const tableRef = useRef(null);
  const [imgSrc, setImgSrc] = useState('');

  const captureTable = async () =>{
    if(tableRef.current){
      const canvas = await html2canvas(tableRef.current);
      const image = canvas.toDataURL('image/png');
      setImgSrc(image);
    }
  }

  return (
    <>
      
    <table ref={tableRef} >
      <thead>
        <tr>
          <th>Bank Name</th>
          <th>Description</th>
          <th>Age</th>
          <th>Logo</th>
        </tr>
      </thead>
      <tbody>
        {initialData.map((data, index) => (
          <tr key={index}>
            <td>{data.bankName}</td>
            <td>{data.description}</td>
            <td>{data.age}</td>
            <td><img src={data.url} alt={data.bankName} width="100" height="100" /></td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={captureTable}
    >Save Table</button>
    {
      imgSrc && <img src={imgSrc} alt="table" />
    }
    </>

  )
}

export default App
