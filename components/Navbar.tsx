import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-blue-800 p-4">
            <ul className="flex justify-evenly text-xl ">
                <li><Link href="/">Home</Link></li>
            
           
                <li><Link href="/adminpage">admin</Link></li>
            </ul>
        </nav>
    )
}

