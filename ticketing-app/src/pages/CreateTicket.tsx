import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTicket() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const createTicket = async () => {

        if (!title || !category || !description) {
            alert('Compila tutti i campi');
            return;
        }

        const response = await fetch(
            "http://localhost:3000/api/tickets",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    category,
                    description
                })
            }
        );

        const data = await response.json();

        console.log(data);

        if (data.success) {
            alert("Ticket creato!");

            setTitle("");
            setCategory("");
            setDescription("");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-3xl mx-auto">

                <h1 className="text-4xl font-bold mb-8 text-center">
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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Es. Problema login Magento"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Categoria
                            </label>

                            <Input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                placeholder="Magento, Laravel, Server..."
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">
                                Descrizione
                            </label>

                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descrivi il problema..."
                                className="min-h-40"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={createTicket}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                            >
                                Crea Ticket
                            </button>
                        </div>

                    </CardContent>
                </Card>

            </div>
        </div>
    );
}