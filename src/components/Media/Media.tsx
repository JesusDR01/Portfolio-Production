import { MediaWrapper } from "./Media.styled";
import * as data from "src/models/data.json";

const Media = () => (
    <MediaWrapper>
        {data.media.map((media, idx) => (
            <li key={idx}>
                <a target="_blank" rel="noreferrer noopener" href={media.url}>
                    <img src={media.img} alt={media.name} width="80" height="80" />
                </a>
            </li>
        ))}
    </MediaWrapper>
);

export default Media;
