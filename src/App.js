import React from "react";
import Table from "./table";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  margin: 10px 0 0;
  display: inline-grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      cost: 0,
      quantity: 0,
      data: [],
      sum: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target.name;
    this.setState({ [target]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // simple input validation
    if (this.state.description === "" || this.state.quantity === 0) {
      alert("please eneter a description and qauntity");
      return 0;
    }
    const row = {
      description: this.state.description,
      cost: this.state.cost,
      quantity: this.state.quantity,
      price: this.state.cost * this.state.quantity
    };

    var joined = [...this.state.data, row];
    this.setState({ data: joined });
    const summed = this.state.sum + row.price;
    this.setState({ sum: summed });
    // empty inputs after submit
    this.setState({ description: "", cost: 0, quantity: 0 });
  }

  submitInvoice() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
        <StyledForm onSubmit={this.handleSubmit}>
          <div>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Cost:
              <input
                type="number"
                name="cost"
                value={this.state.cost}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" value="Add Item" />
          </div>
        </StyledForm>
        <Table data={this.state.data} />
        <div className="padding right-align">Total: ${this.state.sum}</div>
        <button
          className="padding right-align"
          onClick={() => {
            this.submitInvoice();
          }}
        >
          Submit Invoice
        </button>
      </div>
    );
  }
}

export default App;
