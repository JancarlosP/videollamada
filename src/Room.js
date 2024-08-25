import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomID } = useParams();
  let myMeeting = async (element) => {
    const appID = 1615092290;
    const serverSecret = "fea1843538d999f07a69fa4247b38542";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "videocall"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: window.location.href,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  };
  return (
    <div ref={myMeeting}></div>
  )
}

export default Room
