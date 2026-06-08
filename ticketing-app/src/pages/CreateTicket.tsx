import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTicket() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    Nuovo Ticket
                </h1>

                <Card>
                    <CardHeader>
                        <CardTitle>Apri una richiesta</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                        <div>
                            <label className="text-sm font-medium">
                                Titolo
                            </label>

                            <Input
                                placeholder="Es. Problema login Magento"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Categoria
                            </label>

                            <Input
                                placeholder="Magento, Laravel, Server..."
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Descrizione
                            </label>

                            <Textarea
                                placeholder="Descrivi il problema..."
                                className="min-h-40"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                                Crea Ticket
                            </button>
                        </div>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}