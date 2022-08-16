import { useSelector } from "react-redux";
import Taskbar from "../comps/Taskbar";
import DesktopShortcuts from "../comps/DesktopShortcuts";
import { Fragment } from "react";

const DesktopScreen = () => {
  const wallpaper = useSelector((state) => state.desktop.wallpaper);
  const activeWindows = useSelector((state) => state.desktop.activeWindows);

  return (
    <div
      style={{ backgroundImage: `url(${wallpaper})` }}
      className="text-white bg-no-repeat bg-cover"
    >
      <div className="w-screen h-screen">
        {activeWindows.length > 0 && (
          <Fragment>
            {activeWindows
              .filter((win) => win.minimized === false)
              .map(
                (
                  {
                    id,
                    height,
                    width,
                    x,
                    y,
                    title,
                    minimized,
                    maximized,
                    Component,
                  },
                  index
                ) => (
                  <Component
                    key={index}
                    id={id}
                    height={height}
                    width={width}
                    x={x}
                    y={y}
                    title={title}
                    minimized={minimized}
                    maximized={maximized}
                  />
                )
              )}
          </Fragment>
        )}
        <DesktopShortcuts />
        <Taskbar />
      </div>
    </div>
  );
};

export default DesktopScreen;