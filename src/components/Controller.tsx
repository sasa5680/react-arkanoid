import { useHotkeys } from "react-hotkeys-hook";

/**
 * @description 컨트롤러 컴포넌트
 **/
function Controller() {
    useHotkeys("a", () => {
        console.log("asdasd");
    });
    useHotkeys("d", () => {
        console.log("asdasd");
    });

    useHotkeys("esc", () => {
        console.log("game paused");
    });

    return <></>;
}

export default Controller;
