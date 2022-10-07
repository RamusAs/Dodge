import { useEffect, useState } from "react"
import { Card } from "../components/Card";

export const Homepage = () => {

  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch("https://api.coinpaprika.com/v1/coins");
    setData(await res.json());
  }

  useEffect(() => {
   fetchData()
  }, [])
  
  console.log(data);
  return (
    <>
      <h1>Coins</h1>
      {!data.length && <div className="loader"></div>}
      <div className="card-container">
      {data.length && data?.slice(0,100).map((_) => <Card className="coin" article={_} key={_.id} />)}
      </div>
    </>
  )
}