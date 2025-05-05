export default function YouTubeSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Watch Our Students Perform</h2>
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Student Performances"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            Watch our talented students showcase their skills in our annual recital.
          </p>
        </div>
      </div>
    </section>
  )
}
