// import "./App.css";

// import React, { useState } from "react";
// import "./App.css"; // Add some basic styling if needed

// const App = () => {
//   const [activeInvoice, setActiveInvoice] = useState(1); // Default to Invoice 1

//   const invoices = [
//     {
//       id: 1,
//       deliveryDetails: "Delivery details for Invoice 1",
//       customerDetails: "Customer details for Invoice 1",
//       productDetails: ["Product 1 details", "Product 2 details"],
//     },
//     {
//       id: 2,
//       deliveryDetails: "Delivery details for Invoice 2",
//       customerDetails: "Customer details for Invoice 2",
//       productDetails: ["Product 1 details"],
//     },
//     {
//       id: 3,
//       deliveryDetails: "Delivery details for Invoice 3",
//       customerDetails: "Customer details for Invoice 3",
//       productDetails: ["Product 1 details", "Product 2 details", "Product 3 details"],
//     },
//     {
//       id: 4,
//       deliveryDetails: "Delivery details for Invoice 4",
//       customerDetails: "Customer details for Invoice 4",
//       productDetails: ["Product 1 details"],
//     },
//   ];

//   const handleInvoiceClick = (id) => {
//     setActiveInvoice(id);
//   };

//   const activeInvoiceDetails = invoices.find((invoice) => invoice.id === activeInvoice);

//   return (
//     <div className="invoice-app">
//       <div className="invoice-tabs">
//         {invoices.map((invoice) => (
//           <button
//             key={invoice.id}
//             onClick={() => handleInvoiceClick(invoice.id)}
//             className={invoice.id === activeInvoice ? "active" : ""}
//           >
//             Invoice {invoice.id}
//           </button>
//         ))}
//       </div>
//       <div className="invoice-details">
//         <h2>Details for Invoice {activeInvoice}</h2>
//         <p><strong>Delivery:</strong> {activeInvoiceDetails.deliveryDetails}</p>
//         <p><strong>Customer:</strong> {activeInvoiceDetails.customerDetails}</p>
//         <p><strong>Products:</strong></p>
//         <ul>
//           {activeInvoiceDetails.productDetails.map((product, index) => (
//             <li key={index}>{product}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

// change balance--------
// import React, { Component } from "react";
// import "./App.css";

// class UserBalance extends Component {
//   render() {
//     const { balance, onChangeBalance } = this.props;
//     return (
//       <div className="user-balance">
//         <h2>Balance</h2>
//         <div className="balance-details">
//           <button className="btn btn-dark">User balance</button>
//           <p className="p-4">{balance}</p>
//         </div>
//         <button onClick={onChangeBalance} className="change-balance-button">
//           Change Balance
//         </button>
//       </div>
//     );
//   }
// }

// class UserDetails extends Component {
//   render() {
//     const { firstName, lastName } = this.props;
//     return (
//       <div className="user-details">
//         <h2>User</h2>
//         <p>FirstName: {firstName}</p>
//         <p>LastName: {lastName}</p>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         firstName: "Abdusobur",
//         lastName: "Xalimov",
//         balance: 13000,
//       },
//     };
//   }

//   changeBalance = () => {
//     this.setState((prevState) => ({
//       user: {
//         ...prevState.user,
//         balance: prevState.user.balance + 4411,
//       },
//     }));
//   };

//   render() {
//     const { firstName, lastName, balance } = this.state.user;
//     return (
//       <div className="user-balance">
//         <div className="user-info">
//           <UserDetails firstName={firstName} lastName={lastName} />
//           <UserBalance balance={balance} onChangeBalance={this.changeBalance} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;

// import react from "react";
// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     todos: [],
//   };
//   inputRef = React.createRef();
//   componentDidUpdate() {
//     this.inputRef.current.value = "";
//   }
//   handleSubmit = () => {
//     this.setState((prev) => {
//       return {
//         todos: [
//           ...prev.todos,
//           {
//             text: this.inputRef.current.value,
//             date: new Date(),
//             isCompleted: false,
//           },
//         ],
//       };
//     });
//     // this.inputRef.current.value = "";
//   };
//   render() {
//     console.log(this.inputRef);
//     return (
//       <div className="container">
//         {/* <input type="text" ref={this.inputRef} />
//         <button onClick={this.handleSubmit}>click</button> */}
//         <div className="row">
//           <div className="col-md-8 offset-2 p-2 border border-4">
//             <div className="d-flex justify-content-between">
//               <input type="text" ref={this.inputRef} className="w-100" />
//               <button onClick={this.handleSubmit}>click</button>
//             </div>
//             <div className="border border-2">
//               {this.state.todos.map((todo) => {
//                 return (
//                   <div>
//                     {todo.text} <em>{}</em>
//                     <input type="checkbox" checked={todo.isCompleted} />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     inputValue: "",
//   };
//   // handleClick = (value, event) => {
//   //   console.log(event);
//   //   console.log(value);
//   // };
//   handleChange = (event) => {
//     this.setState(() => {
//       return { inputValue: event.target.value };
//     });
//     handleSelect = () => {
//       this.setState(() => {
//         return{select: event.target.value}
//       })
//     }
//     // console.log(event.target.value);
//   };

//   render() {
//     return (
//       <div>
//         App
//         <button onClick={(e) => this.handleClick("value", e)}>Click</button>
//         <input
//           type="text"
//           value={this.state.inputValue}
//           onChange={this.handleChange}
//         />
//          <select name="text" value={this.state.inputValue} onChange={this.handleSelect}>
//             <option value="uz">uzbek</option>
//             <option value="ru">russiann</option>
//             <option value="en">english</option>
//          </select>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";

export default class App extends Component {
  state = {
    todos: [],
  };
  inputRef = React.createRef();

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem("todos"));
    if (local) {
      this.setState({ todos: local });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
    this.inputRef.current.value = "";
  }

  handleSubmit = () => {
    const newTodo = this.inputRef.current.value;
    if (newTodo.trim() === "") return;

    this.setState((prev) => {
      return {
        todos: [
          ...prev.todos,
          {
            text: newTodo,
            date: new Date(),
            isCompleted: false,
            id: Date.now(), 
          },
        ],
      };
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleEdit = (id) => {
    const newText = prompt("Edit your todo:");
    if (newText) {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      }));
    }
  };

  handleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-2 p-2 border border-4">
            <div className="d-flex justify-content-between">
              <input type="text" ref={this.inputRef} className="w-100" />
              <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
            <div className="border border-2 mt-3">
              {this.state.todos.map((todo) => {
                return (
                  <div
                    key={todo.id}
                    className="d-flex justify-content-between align-items-center p-2"
                  >
                    <div>
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => this.handleComplete(todo.id)}
                      />
                      <span
                        style={{
                          textDecoration: todo.isCompleted
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.text}
                      </span>
                    </div>
                    <div>
                      <button onClick={() => this.handleEdit(todo.id)}>
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(todo.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ----------------------------------------------------------------------------------------------------------------------------

// import react from "react";
// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     todos: [],
//   };
//   inputRef = React.createRef();
//   componentDidUpdate() {
//     this.inputRef.current.value = "";
//   }
//   handleSubmit = () => {
//     this.setState((prev) => {
//       return {
//         todos: [
//           ...prev.todos,
//           {
//             text: this.inputRef.current.value,
//             date: new Date(),
//             isCompleted: false,
//           },
//         ],
//       };
//     });
//     // this.inputRef.current.value = "";
//   };
//   render() {
//     console.log(this.inputRef);
//     return (
//       <div className="container">
//         {/* <input type="text" ref={this.inputRef} />
//         <button onClick={this.handleSubmit}>click</button> */}
//         <div className="row">
//           <div className="col-md-8 offset-2 p-2 border border-4">
//             <div className="d-flex justify-content-between">
//               <input type="text" ref={this.inputRef} className="w-100" />
//               <button onClick={this.handleSubmit}>click</button>
//             </div>
//             <div className="border border-2">
//               {this.state.todos.map((todo) => {
//                 return (
//                   <div>
//                     {todo.text} <em>{}</em>
//                     <input type="checkbox" checked={todo.isCompleted} />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
