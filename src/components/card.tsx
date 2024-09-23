import clsx from "clsx";
import "./card.css";

interface CardProps {
    icon: string;
    title: string;
    description: string;
    href: string;
}

export default function Card({ icon, title, description, href }: CardProps) {
    return (
        <a className="card" href={href}>
            <div className={clsx("icon", "fa-sharp fa-regular", icon)} />
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    );
}
