import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const DetailPage = () => {
  const params = useParams()

  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch(`https://api.coinpaprika.com/v1/coins/${params.id}`);
    setData(await res.json());
  }
  useEffect(() => {
   fetchData()
  }, [])
  
  return (
    <>
      {data.name}
      <p>Symbole: {data.description}</p>
      <p>desctiption: {data.description}</p>

    </>
  )
}