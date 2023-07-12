
interface Props {
    title: string;
    img: string;
    author: string;
    date: Date;
    upvotes: number;
}

export const PostCard = (props: Props) => {
    const { title, img, author, date, upvotes } = props;
    
    return (
        <article className="postCard">
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p className="author">{author}</p>
            <time>{date.toLocaleDateString()}</time>
            <p>{upvotes} upvotes</p>
        </article>
    )
}