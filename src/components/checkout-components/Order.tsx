import React from 'react'
import { Button } from '@blueprintjs/core'

interface State {

}

interface Props {

}

export default class Order extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {

        }

    }

    confirmOrderHandler = () => {
        alert("Grattis!")
    }

    render() {
        return (
            <div>
                <Button onClick={this.confirmOrderHandler}>Confirm your order</Button>
            </div>
        )
    }

}