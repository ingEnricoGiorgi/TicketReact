import { useParams } from "react-router-dom";

export default function TicketDetail() {
    const { id } = useParams();

    return (
        <div className="p-6">
            <h1>Ticket #{id}</h1>
        </div>
    );
}