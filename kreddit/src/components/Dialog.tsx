import { useAppSelector } from "../lib/hooks";

export const Dialog = () => {
    const { isOpen, data } = useAppSelector((state) => state.dialog);

    return (
        <dialog open={isOpen}>
            <h2>{data.title}</h2>
        </dialog>
    )
}