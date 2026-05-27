import {HeroTitle} from "@/app/components/hero/hero-title";

export function HeroSection() {
    return (
        <section className="container flex flex-col justify-center h-screen">
            <div className="h-4/5 flex flex-col justify-center">
                <HeroTitle />
            </div>
            <div className="h-1/5 flex flex-col justify-center gap-1">
                <div className="flex justify-between text-lg">
                    <h2>Frontend engineering, done properly.</h2>
                    <p>● Available for work</p>
                </div>
                <a className="text-2xl">Selected work ↓</a>
            </div>
        </section>
    )
}