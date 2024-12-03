import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sticky left-0 right-0 bottom-0 flex justify-between items-center bg-gray-100 dark:bg-gray-700 dark:bg-opacity-20 text-gray-900 dark:text-gray-100 p-4 text-center">
            <p>&copy; {new Date().getFullYear()} <Link target="_blank" href="https://shrimo.com/">Shrimo Innovations Pvt Ltd</Link></p>
            <p className="mt-2 text-sm">
                Made with <span className="text-red-500">❤️</span> by <Link target="_blank" href={"https://www.linkedin.com/in/shrikant9907/"}>Shrikant Yadav</Link>
            </p>
        </footer>
    );
}
