import { links } from "../data/personalData";
import "./Footer.scss";

export default function Footer () {

    const mapped = links.map((l, i) => {
        return (
            <a href={l.url} target="blank" className="footer-link">{l.title}</a>
        );
    });

    return (
        <div className="footer">
            {mapped}
        </div>
    );
}
