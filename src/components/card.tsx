interface CardProps {
    icon: string;
    title: string;
    description: string;
}

export default function Card({ icon, title, description }: CardProps) {
    return <div className="card"></div>;
}
