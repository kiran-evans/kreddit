/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { OpenInNew } from "@mui/icons-material";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const PostCard = (props: any) => {
    const { data } = props;
    const {
        title,
        thumbnail,
        thumbnail_width,
        author,
        score,
        subreddit_name_prefixed,
        url,
        domain
    } = data;
    
    return (
        <article className="postCard">
            {thumbnail_width && <img src={thumbnail} alt={thumbnail} />}
            <section>
                <h2>{title}</h2>
                <p className="author">{author}</p>
                <p>{score}</p>
                <p>Posted to {subreddit_name_prefixed}</p>
                {!domain.includes("self") && <a className="originLink" href={url} target="_blank" rel="noopener noreferrer"><OpenInNew />&nbsp;{domain}</a>}
            </section>
        </article>
    )
}