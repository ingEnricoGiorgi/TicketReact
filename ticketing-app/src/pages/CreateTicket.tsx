import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateTicket() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Ciao! Descrivi il problema che stai riscontrando."
        }
    ]);
    const [chatInput, setChatInput] = useState("");

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

    //OPEN AI
    const sendMessage = async () => {

        if (!chatInput.trim()) {
            return;
        }

        const userMessage = {
            role: "user",
            content: chatInput
        };

        setMessages(prev => [...prev, userMessage]);

        const currentInput = chatInput;

        setChatInput("");

        const response = await fetch(
            "http://localhost:3000/api/ai/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: currentInput
                })
            }
        );

        const data = await response.json();

        setMessages(prev => [
            ...prev,
            {
                role: "assistant",
                content: data.message
            }
        ]);
    };
    //OPEN AI END

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

                        {/* CHATBOT */}
                        <div className="border rounded-lg p-4">

                            <h3 className="font-semibold mb-4">
                                Assistente AI
                            </h3>

                            <div className="h-64 overflow-y-auto border rounded p-3 mb-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`mb-2 ${
                                            message.role === "user"
                                                ? "text-right"
                                                : "text-left"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block p-2 rounded-lg ${
                                                message.role === "user"
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-gray-200"
                                            }`}
                                        >
                                            {message.content}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <Input
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder="Descrivi il problema..."
                                />

                                <button
                                    onClick={sendMessage}
                                    className="bg-blue-600 text-white px-4 rounded"
                                >
                                    Invia
                                </button>
                            </div>
                        </div>
                        {/* FINE CHATBOT */}
                        
                        {/* FORM TICKET */}

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

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}