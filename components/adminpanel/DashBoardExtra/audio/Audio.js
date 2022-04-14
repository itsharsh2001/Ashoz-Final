import useRecorder from "../../../../hooks/useRecorder";
import RecorderControls from "./RecorderControls.js";
import RecordingsList from "./RecordingList.js";

const Audio = () => {

    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    return (
  <>
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
  </>
    );
}

export default Audio;
