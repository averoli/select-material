import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import DialogCreate from "./DialogCreate";

const CardEdit = () => {

    const [isEditing, setEditing] = useState(false)

    const handleClick = () => {
        setEditing(prevState => !prevState)
    }

    return (
        <Card>
            <CardContent>Здесь будет отображаться выбранная страна</CardContent>
            <Button onClick={handleClick}>Editing</Button>
            <DialogCreate
                isEditing={isEditing}
                handleClick={handleClick}
            />
        </Card>
    )
}

export default CardEdit