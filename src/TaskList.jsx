import './App.css'


const TaskList = (props) => {

    return(
        <>
            <div className="listitem">
                <ion-icon name="close-outline" onClick={() =>{props.onDelete()}}></ion-icon>
                <ion-icon name="create-outline" onClick={() =>{props.onEdit()}}></ion-icon>
                <li>{props.content}</li>
            </div>
        </>
    );
};

export default TaskList;

// style={{fontSize:"18px", cursor:"pointer", backgroundColor:"black", color:"white", borderRadius:"50%"}}