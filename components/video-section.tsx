export function VideoSection() {
  const videoId = "0GYnZEd7KS0"

  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&endScreenUi=0&disablekb=1`}
            title="SLY Team Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </section>
  )
}

