export default function About() {
    return (
        <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-indigo">
                <h1 className="text-4xl font-bold text-neutral-900 mb-8">About Digitox</h1>
                <p className="text-lg text-neutral-600 mb-6">
                    Digitox was founded with a simple mission: to help professionals cut through the noise of the AI boom.
                    Every day, dozens of new "revolutionary" AI tools are launched. Finding what actually works in a true production environment is exhausting.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                    We manually curate, vet, and categorize the best AI tools on the market so you can focus on your actual work, not evaluating software.
                </p>
                <div className="mt-12">
                    <a href="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-xl transition-colors">
                        Back to Directory
                    </a>
                </div>
            </div>
        </div>
    );
}
