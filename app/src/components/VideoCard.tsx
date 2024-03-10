import React from "react"

type TVideoCard = {
  title: string
  thumbnail: string
  creator: string
  avatar: string
}

const VideoCard = ({ title, thumbnail, creator, avatar }: TVideoCard) => {
  return (
    <div className="player flex flex-col shadow-md hover:cursor-pointer">
      <div className="sm:max-w-[320px]">
        <img src={thumbnail} alt={title} className="w-full" />
      </div>
      <div className="p-4">
        <h1 className="mb-4 line-clamp-2 text-2xl font-semibold">{title}</h1>
        <div className="flex items-center gap-2">
          <img src={avatar} alt={creator} className="h-10 w-10 rounded-full" />
          <p className="font-semibold text-ellipsis overflow-hidden ...">
            {creator}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
