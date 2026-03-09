"use client";

import React, { useState } from 'react';
import {
  Search,
  Code,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

// --- Mock Data ---
const MOCK_TOOLS = [
  { id: 1, name: "LegalAI Draft", category: "Contracts", price: "$49/mo", rating: 4.8, description: "Instantly draft standard startup contracts." },
  { id: 2, name: "CaseFinder Pro", category: "Research", price: "$99/mo", rating: 4.9, description: "Semantic search for past case law precedents." },
  { id: 3, name: "DocuSense", category: "Review", price: "$29/mo", rating: 4.5, description: "Automated redlining for vendor agreements." },
  { id: 4, name: "IP Guard", category: "Intellectual Property", price: "$149/mo", rating: 4.7, description: "Monitor trademarks and patents effortlessly." },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = MOCK_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-indigo-100 selection:text-indigo-900">

      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Digitox</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="/#directory" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">Directory</a>
              <a href="/#pricing" className="text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="/submit" className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                Submit Tool
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-neutral-900 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-4 space-y-3 shadow-lg">
            <a href="/#features" className="block text-base font-medium text-neutral-600 hover:text-indigo-600">Features</a>
            <a href="/#directory" className="block text-base font-medium text-neutral-600 hover:text-indigo-600">Directory</a>
            <a href="/#pricing" className="block text-base font-medium text-neutral-600 hover:text-indigo-600">Pricing</a>
            <a href="/submit" className="block w-full text-left font-medium text-indigo-600">Submit Tool</a>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
          <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-blue-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            Over 250+ Legal AI Tools Indexed
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
            Find the perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Legal AI</span> for your practice.
          </h1>

          <p className="mt-6 text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The curated directory of artificial intelligence tools built specifically for lawyers, paralegals, and modern law firms.
          </p>

          <div className="max-w-2xl mx-auto relative flex items-center">
            <Search className="absolute left-4 w-6 h-6 text-neutral-400" />
            <input
              type="text"
              placeholder="Search e.g. 'Contract Review' or 'Case Law'"
              className="w-full pl-12 pr-32 py-4 rounded-full border border-neutral-200 bg-white shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
              Search
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-500 font-medium">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Vetted Tools</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Updated Weekly</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free to Browse</div>
          </div>
        </div>
      </section>

      {/* --- Directory Section --- */}
      <section id="directory" className="py-20 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900">Trending Tools</h2>
              <p className="text-neutral-500 mt-2">Discover what other practices are using this week.</p>
            </div>
            <button className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-xl hover:border-indigo-100 transition-all cursor-pointer flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl group-hover:scale-110 transition-transform">
                    {tool.name.charAt(0)}
                  </div>
                  <span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-md font-medium">
                    {tool.category}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-neutral-900 mb-2">{tool.name}</h3>
                <p className="text-neutral-500 text-sm mb-6 flex-grow">{tool.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-auto">
                  <div className="flex items-center gap-1 text-sm font-medium text-neutral-900">
                    <span className="text-yellow-400">★</span> {tool.rating}
                  </div>
                  <span className="text-sm font-medium text-neutral-500">{tool.price}</span>
                </div>
              </div>
            ))}

            {filteredTools.length === 0 && (
              <div className="col-span-full py-12 text-center text-neutral-500">
                No tools found matching your search. Try a different term!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why use Digitox?</h2>
            <p className="text-neutral-400 text-lg">We cut through the noise so you can focus on billable hours, not evaluating software.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vetted for Security</h3>
              <p className="text-neutral-400 leading-relaxed">Every tool listed is checked for standard legal compliance, data encryption, and privacy policies.</p>
            </div>

            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save 10+ Hours/Week</h3>
              <p className="text-neutral-400 leading-relaxed">Find tools that automate contract reading, discovery, and citation generation instantly.</p>
            </div>

            <div className="text-center px-4">
              <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Tech Jargon</h3>
              <p className="text-neutral-400 leading-relaxed">Reviews written for legal professionals, focusing on practical use-cases rather than technical specs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA / Newsletter Section --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-indigo-600 rounded-3xl p-8 md:p-16 text-center transform relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Stay ahead of the curve</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Join 5,000+ legal professionals getting a weekly breakdown of the newest AI tools and how to actually use them in practice.
          </p>

          <form className="max-w-md mx-auto flex gap-2 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white border-0"
              required
            />
            <button type="submit" className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </form>
          <p className="text-indigo-200 text-sm mt-4 relative z-10">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">Digitox</span>
          </div>

          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="/about" className="hover:text-indigo-600">About</a>
            <a href="/submit" className="hover:text-indigo-600">Submit a Tool</a>
            <a href="/privacy" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-600">Terms of Service</a>
          </div>

          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Digitox. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
