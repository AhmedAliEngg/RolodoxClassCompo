
import "./Card-list.styles.css"
import Card from "../card/Card";

const CardList = ({monsters}) => (
    
        // const { monsters } = props
        // console.log(this.props)

        
            <div className="card-list">
                {monsters.map((monster) => {

                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
    
)

export default CardList
