export default function Todo({task,done=false}){
    // console.log(props);
    // if(done===true){
    //     return(
    //     <h1>done: {task}</h1>
    // )}
    // // if(done===false){
    // //     return(
    // //         <h1>to do : {task}</h1>
    // //     )
    // // }
    // return <h1>to do : {task}</h1>
    return done?<h1>done : {task}</h1>: <h1>not done : {task}</h1>
    
}