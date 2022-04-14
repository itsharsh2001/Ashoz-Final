import useRecordingsList from "../../../../hooks/use-recordings-list";
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './RecordingList.module.css'

const Recordinglist = ({ audio }) => {
    const { recordings, deleteAudio } = useRecordingsList(audio);
    return (
        <div>
             {recordings.length > 0 ? (
        <>
            {recordings.map((record) => (
              <div key={record.key}>
                <audio className={classes.audio} controls src={record.audio} />
                <span>
                  <span
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <DeleteIcon className={classes.delete}/>
                  </span>
                </span>
              </div>
            ))}
        </>
      ) : null}
        </div>
    );
}

export default Recordinglist;
