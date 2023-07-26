import { Close, Comment, OpenInNew, Reddit, Shuffle, Star } from "@mui/icons-material";
import { Fade, Grow } from '@mui/material';
import { setDialog } from "../lib/dialogSlice";
import { useAppDispatch, useAppSelector, useMarkdown } from "../lib/hooks";

export const Dialog = () => {
    const { isOpen, data } = useAppSelector((state) => state.dialog);
    const dispatch = useAppDispatch();

    const {
        title,
        thumbnail,
        author,
        subreddit_name_prefixed,
        url,
        domain,
        selftext,
        num_comments,
        score,
        num_crossposts,
        permalink
    } = data;

    const postBody = useMarkdown(selftext);    

    if (!isOpen) return (
        <></>
    )

    return (
        <section id="dialog">
            <Fade in={isOpen}>
                <div id="backdrop" onClick={() => dispatch(setDialog({ isOpen: false, data: [] }))}></div>
            </Fade>
            <Grow in={isOpen}>
                <dialog data-testid="dialog">
                    {thumbnail.includes("http") && <div className="thumbnail">
                        <img src={thumbnail} alt={title} />
                    </div>}
                    <article>
                        <span id="closeModal" title="Close" onClick={() => dispatch(setDialog({ isOpen: false, data: [] }))}><Close sx={{fontSize: "1em"}} /></span>
                        {(!domain.includes("self") && !domain.includes("redd.it") && !domain.includes("reddit")) && <a id="originLink" href={url} target="_blank" rel="noopener noreferrer" title={`Go to original source on ${domain}`}><OpenInNew sx={{ fontSize: "1em" }} />&nbsp;{domain}</a>}
                        <h2>{title}</h2>
                        <p className="posted">Posted to <a href={`https://www.reddit.com/${subreddit_name_prefixed}`} title={`Go to ${subreddit_name_prefixed} homepage`} target="_blank" rel="noopener noreferrer">{subreddit_name_prefixed}</a> by <a href={`https://www.reddit.com/u/${author}`} title={`Go to ${author}'s profile`} target="_blank" rel="noopener noreferrer">{author}</a></p>
                        <div className="group">
                            <p id="comments"><Comment sx={{ fontSize: "1em" }} />&nbsp;{Intl.NumberFormat('en-GB').format(num_comments)} comments</p>
                            <p id="score"><Star sx={{ fontSize: "1em" }} />&nbsp;{Intl.NumberFormat('en-GB').format(score)} points</p>
                            <p id="crossposts"><Shuffle sx={{ fontSize: "1em" }} />&nbsp;{Intl.NumberFormat('en-GB').format(num_crossposts)} crossposts</p>
                        </div>
                        {selftext && <div id="selftext">{postBody}</div>}
                        <button id="opButton"><a href={`https://reddit.com${permalink}`} target="_blank" rel="noopener noreferrer"><Reddit sx={{ fontSize: "1.2em" }} />&nbsp;See the full post on reddit</a></button>
                    </article>
                </dialog>
            </Grow>
        </section>
    )
}