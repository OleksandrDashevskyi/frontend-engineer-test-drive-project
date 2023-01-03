import { StoreProvider } from "easy-peasy";
import { store } from "../stores/store";

type Props = {
    children: JSX.Element
}
export const StateServiceProvider = ({ children }: Props) => {

    return <StoreProvider store={store}>{children}</StoreProvider>;
};