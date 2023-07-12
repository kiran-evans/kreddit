/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
        domain,
        selftext
    } = data;
    
    return (
        <article className="postCard">
            {thumbnail_width && <img src={thumbnail} />}
            <section>
                {(!domain.includes("self") && !domain.includes("redd.it")) && <a className="originLink" href={url} target="_blank" rel="noopener noreferrer" title={`Go to original source on ${domain}`}><OpenInNew sx={{ fontSize: "small" }} />&nbsp;{domain}</a>}
                <h2>{title}</h2>
                <p className="author"><a href={`https://www.reddit.com/u/${author}`} title={`Go to ${author}'s profile`} target="_blank" rel="noopener noreferrer">{author}</a></p>
                <p className="subreddit"><a href={`https://www.reddit.com/${subreddit_name_prefixed}`} title={`Go to ${subreddit_name_prefixed} homepage`} target="_blank" rel="noopener noreferrer">{subreddit_name_prefixed}</a></p>
                <p className="score">{Intl.NumberFormat('en-GB').format(score)}</p>
                {selftext && <p className="selftext">{selftext}</p>}
            </section>
        </article>
    )
}