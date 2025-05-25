export default function Nopage() {
return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-row p-5 gap-5">
            <h1 className="condensed text-2xl">404 - Page Not Found</h1>
            <p className="text-2xl">The page you are looking for does not exist.</p>
        </div>
        <a href="/" className="belle text-xl">Go back to the homepage</a>
    </div>
)
}