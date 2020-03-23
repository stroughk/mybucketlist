import React from "react";

class Wish extends React.Component {
  state = {
    id: this.props.wish.id,
    fulfilled: this.props.wish.fulfilled
  }

  onChange = event => {
    const fulfilled = event.target.value === "true";
    const { id } = this.state;
    const { updateWish, categoryId } = this.props;
    const wish = { id, fulfilled }
    updateWish(wish, categoryId)();

    this.setState({ fulfilled });
  }

  render() {
    const {
      wish,
      categoryId,
      deleteWish,
      updateWish
    } = this.props;

    return (
      <tr>
        <td>{wish.content} |  {wish.fulfilled.toString()} </td>
        <td>
          <input type="radio" name={`fulfilled_${wish.id}`} value="true" onChange={this.onChange}  checked={this.state.fulfilled === true} /> Yes &nbsp;
          <input type="radio" name={`fulfilled_${wish.id}`} value="false" onChange={this.onChange}  checked={this.state.fulfilled !== true}/> No
    </td>
        <td>
          <input type="button" value="Delete" onClick={() => deleteWish(wish.id, categoryId)} />
        </td>
      </tr>
    )
  }
}

export default Wish;