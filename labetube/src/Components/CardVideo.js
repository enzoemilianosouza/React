import React from "react";

export class CardVideo extends React.Component {
  render() {
    return (
      <div className="box-pagina-principal" onClick={this.props.alertVideo}>
        <img src={this.props.link} alt="" />
        <h4>{this.props.titulo}</h4>
      </div>
    );
  }
}
