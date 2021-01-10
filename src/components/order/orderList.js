import React from 'react';
class OrderList extends React.Component {
  render() {
    return (
        <form >
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            placeholder="Full name"
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default OrderList;