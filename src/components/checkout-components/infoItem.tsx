import React, { CSSProperties } from 'react'

interface State { }

interface Props {
    form: any
}

export default class PaymentItem extends React.Component<Props, State> {

    render() {
        return (
            <div style={{ marginBottom: "1em", display: "flex", flexDirection: "column" }}>
                <h2 style={text}>Ditt info är registrerad.</h2>
                <h3 style={text} >{this.props.form.title}</h3>
                <h4 style={text}>{this.props.form.firstName}</h4>
                <h4 style={text}>{this.props.form.email}</h4>
                <h4 style={text}>{this.props.form.mobilePhone}</h4>
                <h4 style={text}>{this.props.form.adress}</h4>
            </div>
        )
    }
}

const text: CSSProperties = {
    margin: 0,
    marginBottom: "5px"
}