import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import SelectCreate from "./SelectCreate";


const DialogCreate = ({isEditing, handleClick}) => {

    return (
        <Dialog disableBackdropClick disableEscapeKeyDown open={isEditing}>
            <DialogContent>
                <form>
                    <SelectCreate/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClick} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClick} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default DialogCreate