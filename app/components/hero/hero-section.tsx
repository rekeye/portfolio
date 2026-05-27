export function HeroSection() {
    return (
        <section className="flex flex-col justify-center h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="h-4/5 flex flex-col justify-center">
                <h1 className="font-(family-name:--font-cormorant) text-[clamp(3.8rem,14vw,5.5rem)] md:text-[clamp(5rem,12vw,11rem)]">Szymon Paluch</h1>
            </div>
            <div className="h-1/5 flex items-center">
                <h2 className="text-xl">Frontend engineering, done properly.</h2>
            </div>
        </section>
    )
}