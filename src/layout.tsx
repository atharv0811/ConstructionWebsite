import type { PropsWithChildren } from "react"
import Navbar from "./components/navbar/navbar"

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className=''>
            <Navbar />
            <main className="min-h-screen mx-auto">
                {children}
            </main>
            <footer className="py-8 bg-[#101010]">
                <div className="container mx-auto px-4 text-center text-white">
                    <p>© {new Date().getFullYear()} <a href="#" className="text-[#ffb923]">Continental Construction</a>. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout