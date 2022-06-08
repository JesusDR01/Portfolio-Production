import { MediaWrapper } from "./Media.styled";
import data from "src/models/data.json";

const Media = () => {
    
    return (
        <MediaWrapper>
            {data.media?.map((media, idx) => (
                <li className={`media-${media.name.toLowerCase()}`} key={idx}>
                    <a target="_blank" rel="noreferrer noopener" href={media.url}>
                        <img title={media.name} src={media.img} alt={media.name} width="80" height="80" />
                    </a>
                </li>
            ))}
        </MediaWrapper>
    );
};

export default Media;
