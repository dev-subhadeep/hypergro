import useLocalStorage from "./useLocalStorage"

const useLikeCount = () => {
  const [likedVideos, setLikedVideos] = useLocalStorage<string[]>("like", [])
  const updateLike = (id: string) => {
    if (!likedVideos.includes(id)) {
      setLikedVideos([...likedVideos, id])
    } else {
      setLikedVideos(likedVideos.filter((item) => item === id))
    }
  }
  return [likedVideos, updateLike] as const
}

export default useLikeCount
