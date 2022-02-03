import React, {Component} from "react";
import chika_dance from "../../images/chika_dance.gif"
import "./PageLoader.css"

export default class PageLoader extends Component {
    render() {
        return (
            <div className={'loader-container'}>
                <div className={'loader'}>
                    {<img src={chika_dance} alt=""/>}
                </div>
            </div>
        )
    }
}
