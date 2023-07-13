import { Comment, OpenInNew, Star } from "@mui/icons-material";

export const PostCard = (props: any) => {
    const { data } = props;
    const {
        title,
        thumbnail,
        thumbnail_width,
        author,
        subreddit_name_prefixed,
        url,
        domain,
        selftext,
        num_comments,
        score
    } = data;
    
    return (
        <article className="postCard">
            {thumbnail_width && <div className="thumbnail">
                <img src={thumbnail} />
            </div>}
            <section>
                {(!domain.includes("self") && !domain.includes("redd.it") && !domain.includes("reddit")) && <a className="originLink" href={url} target="_blank" rel="noopener noreferrer" title={`Go to original source on ${domain}`}><OpenInNew sx={{ fontSize: "1em" }} />&nbsp;{domain}</a>}
                <h2>{title}</h2>
                <div className="group">
                    <p className="author"><a href={`https://www.reddit.com/u/${author}`} title={`Go to ${author}'s profile`} target="_blank" rel="noopener noreferrer">{author}</a></p>
                    <p className="subreddit"><a href={`https://www.reddit.com/${subreddit_name_prefixed}`} title={`Go to ${subreddit_name_prefixed} homepage`} target="_blank" rel="noopener noreferrer">{subreddit_name_prefixed}</a></p>
                </div>
                <div className="group">
                    <p className="comments" title={`${Intl.NumberFormat('en-GB').format(num_comments)} comments`}><Comment sx={{ fontSize: "1em" }} />&nbsp;{Intl.NumberFormat('en-GB').format(num_comments)}</p>
                    <p className="score" title={`Score: ${Intl.NumberFormat('en-GB').format(score)}`}><Star sx={{ fontSize: "1em" }} />&nbsp;{Intl.NumberFormat('en-GB').format(score)}</p>
                </div>
                {selftext && <p className="selftext">{selftext}</p>}
            </section>
        </article>
    )
}