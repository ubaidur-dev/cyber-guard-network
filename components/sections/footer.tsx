"use client"

import { Github, Mail, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Compliance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  FinTech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  DPA
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-xs font-semibold text-primary-foreground">CG</span>
            </div>
            <span className="font-semibold text-foreground">CyberGuard</span>
          </div>

          <p className="text-sm text-slate-500">© 2026 CyberGuard. Designed & Developed by <a className="hover:text-primary transition font-bold" target="_blank">Ubaid Ur Rehman</a></p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ubaidur-dev" className="text-slate-400 hover:text-primary transition" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a 
            href="mailto:ubaidur.dev@gmail.com" 
            className="text-slate-400 hover:text-primary transition-colors duration-200" aria-label="Mail">
           <Mail className="w-5 h-5" />
           </a>
            <a href="https://www.linkedin.com/in/ubaidurrehmandev/" className="text-slate-400 hover:text-primary transition" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
