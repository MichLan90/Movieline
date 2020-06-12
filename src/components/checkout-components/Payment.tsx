import React from 'react';
import { MenuItem, Menu } from "@blueprintjs/core"
import VisaForm from './paymentForms/visaForm'
import SwishForm from './paymentForms/swishForm'
import PaypalForm from './paymentForms/paypalForm'
import PaymentOrder from './paymentForms/paymentOrder'

interface State {
    isVisaSelected: boolean
    isSwishSelected: boolean
    isPaypalSelected: boolean
    forms: []
}

interface Props {
    form: (form: any) => void
}

export default class Payment extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isVisaSelected: false,
            isSwishSelected: false,
            isPaypalSelected: false,
            forms: []
        }
    }

    visaHandleClick = () => {
        this.setState({ isVisaSelected: true, isSwishSelected: false, isPaypalSelected: false })
    }

    swishHandleClick = () => {
        this.setState({ isSwishSelected: true, isVisaSelected: false, isPaypalSelected: false })
    }

    paypalHandleClick = () => {
        this.setState({ isPaypalSelected: true, isVisaSelected: false, isSwishSelected: false })
    }

    form = (form: any) => {
        let formToFill = this.state.forms as any
        formToFill.push(form)
        this.setState({
            forms: formToFill
        }, () => {
            console.log(this.state.forms)
        })
    }

    render() {
        return (
            <div>
                <h2>Payment</h2>
                <Menu id="menu">
                    <MenuItem text="chouse your method">
                        <MenuItem text="Visa Card" onClick={this.visaHandleClick} />
                        <MenuItem text="Swish" onClick={this.swishHandleClick} />
                        <MenuItem text="PayPal" onClick={this.paypalHandleClick} />
                    </MenuItem>
                </Menu>
                <div>
                    {this.state.isVisaSelected && <VisaForm form={this.form} />}
                    {this.state.isSwishSelected && <SwishForm form={this.form} />}
                    {this.state.isPaypalSelected && <PaypalForm form={this.form} />}
                </div>
                <div>
                    <PaymentOrder forms={this.state.forms} />
                </div>
            </div>
        )
    }
}

