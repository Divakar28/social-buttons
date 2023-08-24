const Button = props => {
    const{name} = props
  return (
      <button className = "like">{name}</button>
      <button className = "comment">{name}</button>
      <button className = "share">{name}</button>
  )
}

const element = (
  <Button name = "Like"/>
  <Button name = "Comment"/>
  <Button name = "Share"/>
)

ReactDOM.render(element, document.getElementById('root'))
