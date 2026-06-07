export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">
                    Smart Ticket Assistant
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-gray-500">Ticket Aperti</h2>
                        <p className="text-4xl font-bold mt-2">12</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-gray-500">In Lavorazione</h2>
                        <p className="text-4xl font-bold mt-2">5</p>
                    </div>

                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-gray-500">Chiusi</h2>
                        <p className="text-4xl font-bold mt-2">48</p>
                    </div>
                </div>
            </div>
        </div>
    );
}