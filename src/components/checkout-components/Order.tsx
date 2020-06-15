import React, { CSSProperties } from 'react'
import { Button } from '@blueprintjs/core'

interface State {
    showOrderConfirm: boolean
}

interface Props {
    showVisaForm: boolean
    showSwishForm: boolean
    showPaypalForm: boolean
}

export default class Order extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showOrderConfirm: false,
        }
    }

    confirmOrderHandler = () => {

        if (!this.props.showVisaForm && !this.props.showSwishForm && !this.props.showPaypalForm) {
            console.log(this.props.showVisaForm, this.props.showSwishForm, this.props.showPaypalForm)
            this.setState({ showOrderConfirm: true })
        } else {
            alert('You have to fill input to confirm!')
        }
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Button onClick={this.confirmOrderHandler}>Confirm your order</Button>
                {
                    this.state.showOrderConfirm ?
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h3 style={text}>Din order är klar!</h3>
                        </div>
                        : null
                }
            </div>
        )
    }

}

const text: CSSProperties = {
    margin: 0,
    marginBottom: "5px"
}