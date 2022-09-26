import propsTypes from "prop-types"

function Header({text}) {

    const headStyle={
        color:"blue",fontFamily:"Arial"
    }
    return (
        <header style={{backgroundColor:'black',color:'weight'}}>
            text
            <h3 style={headStyle}> {text} </h3>
        </header>
    )
}

Header.defaultProps = {
    text: "default header text "
}
Header.prototypes = {
    text: propsTypes.string.isRequired
}
export default Header