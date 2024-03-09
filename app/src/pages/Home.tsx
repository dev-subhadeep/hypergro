import axios from "axios"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

type TVideo = {
  postId: string
}

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(searchParams.get("page") || 0)
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState<TVideo[]>([])
  useEffect(() => {
    axios
      .get(`https://internship-service.onrender.com/videos?page=${pageNumber}`)
      .then((result) => {
        setVideos(result.data.data.posts)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && videos.map((v) => <h1>{v.postId}</h1>)}
    </div>
  )
}

export default Home
