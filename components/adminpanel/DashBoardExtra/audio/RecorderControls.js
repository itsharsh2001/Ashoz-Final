import { formatMinutes, formatSeconds } from "../../../../utils/format-time";
import classes from './RecorderControls.module.css'
import MicIcon from '@mui/icons-material/Mic';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import CircleIcon from '@mui/icons-material/Circle';

const Recordercontrols = ({ recorderState, handlers }) => {

    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;

    return (
        <>
        <div className={classes.audio}>
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
            {initRecording && <CircleIcon className={classes.circle}/>}
            {initRecording && (
                <span>
              <CancelIcon className={classes.cancel} title="Cancel recording" onClick={cancelRecording}/>
              </span>
            )}
            {initRecording ? (
                  <span  title="Save recording" onClick={saveRecording}>
            <SaveIcon className={classes.save}/>
            </span>
        ) : (
            <span onClick={startRecording} title="Start recording">
            <MicIcon className={classes.mic}/>
            </span>
        )}
        </div>
        </>
    );
}

export default Recordercontrols;
