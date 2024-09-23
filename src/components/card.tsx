import clsx from "clsx";
import "./card.css";

interface CardProps {
    icon: string;
    title: string;
    description: string;
    href: string;
}

export function Card({ icon, title, description, href }: CardProps) {
    return (
        <a className="card" href={href}>
            <div className={clsx("icon", "fa-sharp fa-regular", icon)} />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </a>
    );
}

export function CardGroup({ children }) {
    return <div className="card-group">{children}</div>;
}
