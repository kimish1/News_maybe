import { newsData } from "../../fixtures/newsdata";
import Onenews from "../../components/onenews";
import type { OnenewsType } from "../../types/mainPage";

const Blog = () => {
    return (
        <>
            {newsData.map((object: OnenewsType) => (
                <Onenews key={object.id} {...object} />
            ))}
        </>
    );
};

export default Blog;