import './video.css'


export const Video = () => {
  return (
    <video
    autoPlay
    muted
    loop>
        <source src="src/img/perfume.mp4"
    typeof='video/mp4'
    />
    </video>
  )
}

