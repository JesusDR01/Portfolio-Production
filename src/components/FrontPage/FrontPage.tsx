import { About } from "../About/About";
import Media from "../Media/Media";
import { FrontPageWrapper } from "./FrontPage.styled";

const FrontPage = () => (
    <FrontPageWrapper>
        <h1>Jesús Díaz Rivas</h1>
        <About />
        <Media />
    </FrontPageWrapper>
);

export default FrontPage;
