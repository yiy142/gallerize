import React from "react";
import { Button, Card, Dialog } from "element-react";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.input,
      value: this.props.input.valid,
      dialogVisible: false
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.input });
  }

  popUp() {
    this.setState({ dialogVisible: true });
  }
  render() {
    return (
      <Card
        className="single"
        key={this.state.item.filename}
        bodyStyle={{ padding: 0 }}
      >
        <PicLink
          popUp={this.popUp.bind(this)}
          valid={this.state.value}
          filename={this.state.item.filename}
        />
        <Dialog
          title="Detailed Information"
          size="tiny"
          visible={this.state.dialogVisible}
          onCancel={() => this.setState({ dialogVisible: false })}
          lockScroll={false}
        >
          <Dialog.Body>
            <p> {"File name: " + this.state.item.filename} </p>
            <p> {"Age: " + this.state.item.age}</p>
            <img
              style={{ width: "100%", height: "100%" }}
              src={"/images/" + this.state.item.filename}
              alt={""}
            />
            <p> other info? </p>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer" />
        </Dialog>
        <div style={{ padding: 14 }}>
          <p style={{ display: "inline" }}>{this.state.item.class}</p>
          <p style={{ display: "inline", marginLeft: "20px" }}>
            age: {this.state.item.age}
          </p>
          <div style={{ marginTop: "10px" }}>
            <Button
              style={{ float: "left" }}
              size="small"
              type="success"
              disabled={this.state.value === 1}
              onClick={e => {
                this.setState({ value: 1 });
              }}
            >
              valid
            </Button>
            <Button
              style={{ float: "right" }}
              size="small"
              type="danger"
              disabled={this.state.value === -1}
              onClick={e => {
                this.setState({ value: -1 });
              }}
            >
              invalid
            </Button>
          </div>
          <br />
        </div>
      </Card>
    );
  }
}

class PicLink extends React.Component {
  render() {
    //Unchecked images
    if (this.props.valid === 0) {
      return (
        <div>
          <img
            onClick={() => {
              this.props.popUp();
            }}
            src={"/images/" + this.props.filename}
            alt="Kid Draw"
          />
        </div>
      );
    }
    //Those have been marked as valid
    if (this.props.valid === 1) {
      return (
        <div>
          <img
            src={"/images/" + this.props.filename}
            alt="Kid Draw"
            style={{ backgroundColor: "rgba(0, 255, 0, 0.3)" }}
          />
        </div>
      );
    }

    //Those have been marked as invalid
    return (
      <div>
        <img
          src={"/images/" + this.props.filename}
          alt="Kid Draw"
          style={{ backgroundColor: "rgba(255, 0, 0, 0.3)" }}
        />
      </div>
    );
  }
}

export { SingleCard };