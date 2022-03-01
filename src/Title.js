import './styles.css'

function Title(props) {
return <h1 className="title" name={props.name}>Welcome, {props.name}!</h1>

}

export default Title