export default function TabButton(props){
    function clickHandler(){
        console.log('Hello World!');
    }
    return (<li>
                <button onClick={clickHandler}>{props.children}</button>
            </li>);
}