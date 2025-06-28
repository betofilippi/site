import type React from "react"

interface CanvaVideoProps {
  designId: string
  title: string
  className?: string
}

const CanvaVideo: React.FC<CanvaVideoProps> = ({ designId, title, className = "" }) => {
  const embedUrl = `https://www.canva.com/design/${designId}/watch?embed`

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingTop: "56.25%",
        paddingBottom: 0,
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "8px",
        willChange: "transform",
      }}
      className={className}
    >
      <iframe
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          border: "none",
          padding: 0,
          margin: 0,
        }}
        src={embedUrl}
        title={title}
        allowFullScreen={true}
        allow="fullscreen"
      />
    </div>
  )
}

export default CanvaVideo
