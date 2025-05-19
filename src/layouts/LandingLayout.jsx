import { Outlet } from "react-router-dom"

const LandingLayout = () => {
  return (
    <section>
        <header className="bg-white shadow">Landing Navbar</header>
        <main className="p-6">
            <Outlet />
        </main>
        <footer className="mt-10">Landing Footer</footer>
    </section>
  )
}

export default LandingLayout