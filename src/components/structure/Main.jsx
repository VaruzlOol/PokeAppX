export default function Main(props){
    return (
        <main className = {`main ${ props?.className ? props.className : '' }`}>
            Main
            { props.children }
        </main>
    )
}