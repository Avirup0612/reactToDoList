import './App.css'


const TaskList = (props) => {
    return(
        <>
            <div className="listitem">
                <ion-icon name="close-outline" onClick={() =>{props.onSelect(props.id)}}></ion-icon>
                <li>{props.content}</li>
            </div>
        </>
    );
};

export default TaskList;

// style={{fontSize:"18px", cursor:"pointer", backgroundColor:"black", color:"white", borderRadius:"50%"}}