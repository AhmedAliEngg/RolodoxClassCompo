import { Component } from "react";
import "./Card-list.styles.css"
import Card from "../card/Card";

class CardList extends Component {
    render() {
        const { monsters } = this.props
        // console.log(this.props)

        return (
            <div className="card-list">
                {monsters.map((monster) => {

                    return (
                        <Card monster={monster} />
                    )
                })}
            </div>
        )
    }
}
export default CardList
