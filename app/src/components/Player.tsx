import ReactPlayer from "react-player"

const Player = ({
  url,
  clearVideo,
}: {
  url: string
  clearVideo: () => void
}) => {
  return (
    <div className="px-10">
      {url && (
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
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        volume={0.4}
        playing
        muted
        controls
      />
    </div>
  )
}

export default Player
