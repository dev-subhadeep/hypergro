import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useNavigate, useSearchParams } from "react-router-dom"
import VideoCard from "../components/VideoCard"
import Pagination from "../components/Pagination"
import VideoCardSkeleton from "../components/VideoCardSkeleton"
import Player from "../components/Player"
import Header from "../components/Header"

type TVideo = {
  postId: string
  creator: {
    name: string
    pic: string
  }
  submission: {
    title: string
    description: string
    mediaUrl: string
    thumbnail: string
  }
}

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(
    Number(searchParams.get("page")) || 1
  )
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState<TVideo[]>([])
  const [video, setVideo] = useState("")
  const [overlayHidden, setOverlayHidden] = useState(true)

  const navigate = useNavigate()

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
      navigate(`/?page=${pageNumber - 1}`, { replace: true })
    }
  }
  const nextPage = () => {
    if (pageNumber < 11) {
      setPageNumber((prev) => prev + 1)
      navigate(`/?page=${pageNumber + 1}`, { replace: true })
    }
  }

  const clearVideo = () => {
    setVideo("")
  }

  useEffect(() => {
    axios
      .get(
        `https://internship-service.onrender.com/videos?page=${pageNumber - 1}`
      )
      .then((result) => {
        setVideos(result.data.data.posts)
        setLoading(false)
      })
  }, [pageNumber])

  return (
    <>
      <Header />

      <div className="container mx-auto flex justify-center items-center ">
        <div className="max-h-[90vh]">
          <Player url={video} clearVideo={clearVideo} />
        </div>
        <div>
          {loading && (
            <div className="grid gap-2 sm:grid-cols-5">
              {Array.from({ length: 10 }).map((_, i) => (
                <VideoCardSkeleton key={i} />
              ))}
            </div>
          )}
          <main
            className={`grid gap-2 sm:grid-cols-5 ${
              video &&
              "sm:grid-cols-3 max-h-[90vh] overflow-y-hidden hover:overflow-y-scroll"
            }`}
          >
            {!loading &&
              videos.map((v) => (
                <div onClick={() => setVideo(v.submission.mediaUrl)}>
                  <VideoCard
                    key={v.postId}
                    title={v.submission.title}
                    thumbnail={v.submission.thumbnail}
                    creator={v.creator.name || "Unknown User"}
                    avatar={v.creator.pic}
                  />
                </div>
              ))}
          </main>
          {!loading && (
            <Pagination
              pageNumber={pageNumber}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Home
