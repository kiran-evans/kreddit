import { useAppSelector } from "../lib/hooks";

export const Dialog = () => {
    const { isOpen, data } = useAppSelector((state) => state.dialog);

    return (
        <dialog open={isOpen}>
            Test
        </dialog>
    )
}