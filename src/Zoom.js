import React from "react";
import { ZoomMtg } from "@zoomus/websdk";

const Zoom = () => {
    ZoomMtg.join({
        signature:
            "OWcwMGlyeGhTX2lMaldOa0Y3aUhEdy51bmRlZmluZWQuMTY0NTAzMDI2ODk0Ny51bmRlZmluZWQuUG9yeUVlcUV2VUtYeXBPOEdjN2NUcEhQNFIwNk1IditCR0RJZXJqdnNuMD0=",
        meetingNumber: 123456789,
        userName: "Nafiz",
        apiKey: "9g00irxhS_iLjWNkF7iHDw",
        userEmail: "",
        passWord: "",
        success: (success) => {
            console.log(success);
        },
        error: (error) => {
            console.log(error);
        },
    });

    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load("en-US");
    ZoomMtg.i18n.reload("en-US");
    // For Global, use source.zoom.us:
    ZoomMtg.setZoomJSLib("https://source.zoom.us/5.9.3/lib", "/av");

    return (
        <div>
            {/* <!-- added on import --> */}
            <div id="zmmtg-root"></div>
            <div id="aria-notify-area"></div>
        </div>
    );
};

export default Zoom;
