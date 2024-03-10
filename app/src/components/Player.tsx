import ReactPlayer from "react-player"
import useLikeCount from "../hooks/useLikeCount"

const Player = ({
  id,
  url,
  clearVideo,
}: {
  id: string
  url: string
  clearVideo: () => void
}) => {
  const [likedVideos, updateLike] = useLikeCount()
  return (
    <div className="px-10">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        volume={0.4}
        playing
        muted
        controls
      />
      {url && (
        <div className="flex justify-between">
          {/* like button */}
          <button onClick={() => updateLike(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={!likedVideos.includes(id) ? `none` : `#ff5656`}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={!likedVideos.includes(id) ? `currentColor` : `#ff5656`}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          {/* close button */}
          <button className="flex mb-2" onClick={clearVideo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Player
