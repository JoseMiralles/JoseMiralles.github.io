import { links } from "./data/personalData";
import "./Links.scss"

export default function Links () {

    const anchors = links.map((l,i) => {
        return (
            <a target="blank" key={i} href={l.url} title={l.title}>
                <img src={l.icon}/>
            </a>
        );
    });

    return (
        <div className="icon-links">
            {anchors}
        </div>
    );
}
