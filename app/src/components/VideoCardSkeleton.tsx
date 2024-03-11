const VideoCardSkeleton = () => {
  return (
    <div className="flex flex-col shadow-md">
      <div className="sm:max-w-[320px]">
        <div className=" bg-slate-200 min-w-full min-h-[400px] animate-pulse"></div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="bg-slate-200 w-[200px] h-6 animate-pulse"></h1>
        <div className="flex items-center gap-2">
          <div className="bg-slate-200 min-h-[50px] min-w-[50px] rounded-full animate-pulse"></div>
          <div className="bg-slate-200 w-[100px] h-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardSkeleton
