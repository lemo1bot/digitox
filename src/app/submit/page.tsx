export default function SubmitTool() {
    return (
        <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-neutral-200">
                <h1 className="text-2xl font-bold text-neutral-900 mb-2">Submit a Tool</h1>
                <p className="text-neutral-500 mb-6">Want to list your AI tool on Digitox? Fill out the form below. Approval takes 24-48 hours.</p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Tool Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="e.g., LegalAI Draft" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Website URL</label>
                        <input type="url" className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="https://" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Short Description</label>
                        <textarea className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none h-24" placeholder="What does your tool do?"></textarea>
                    </div>
                    <button type="button" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition-colors">
                        Submit for Review
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/" className="text-sm text-indigo-600 hover:underline">← Back to Directory</a>
                </div>
            </div>
        </div>
    );
}
