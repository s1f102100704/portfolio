import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} 山田 太郎
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:email@example.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <span className="sr-only">メール</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
