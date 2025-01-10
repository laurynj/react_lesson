import FooterComponent from "./wrap/FooterComponent";
import HeaderComponent from "./wrap/HeaderComponent";
import MainComponent from "./wrap/MainComponent";
import ModalComponent from "./wrap/ModalComponent";

export default function WrapComponent() {
    return(
        <div id="wrap">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
            <ModalComponent />
        </div>
    )
}