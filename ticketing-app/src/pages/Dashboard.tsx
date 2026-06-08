import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto p-8">

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-bold">
                        Smart Ticket Assistant
                    </h1>

                    <Link to="/tickets/create">
                        <Button>
                            Nuovo Ticket
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    <Card>
                        <CardHeader>
                            <CardTitle>Ticket Aperti</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-5xl font-bold text-blue-600">
                                12
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>In Lavorazione</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-5xl font-bold text-amber-500">
                                5
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Chiusi</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-5xl font-bold text-green-600">
                                48
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}