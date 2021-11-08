import React from 'react';
import Loader from './Loader';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      title: '',
      titleValue: '',
      value: '',
    };
  }

  handleChange = (value) => {
    var fullName =
      this.state.user.name.title +
      ' ' +
      this.state.user.name.first +
      ' ' +
      this.state.user.name.last;
    if (value === 'user') {
      this.setState({
        title: 'My Name is ',
        titleValue: fullName,
      });
    } else if (value === 'email') {
      this.setState({
        title: 'My Email is',
        titleValue: this.state.user.email,
      });
    } else if (value === 'dob') {
      this.setState({
        title: 'My DOB is',
        titleValue: this.state.user.dob.date,
        value: 'Age : ' + this.state.user.dob.age,
      });
    } else if (value === 'location') {
      this.setState({
        title: 'My Address is',
        titleValue:
          this.state.user.location.street.number +
          this.state.user.location.street.name,
        value:
          this.state.user.location.city +
          ', ' +
          this.state.user.location.state +
          ', ' +
          this.state.user.location.country +
          ' - ' +
          this.state.user.location.postcode,
      });
    } else if (value === 'contact') {
      this.setState({
        title: 'My Contact Number is',
        titleValue: 'Phone : ' + this.state.user.phone,
        value: 'Cell' + this.state.user.cell,
      });
    }
  };

  componentDidMount = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ user: data.results[0] }));
  };

  changeHover = () => {
    this.componentDidMount();
  };

  render() {
    console.log(this.state.user);

    if (!this.state.user) {
      return (
        <div className="center">
          <Loader />
        </div>
      );
    }

    return (
      <>
        <main className="container">
          <article className="profile">
            <div className="profile_content">
              <img src={this.state.user.picture.large} alt="random user card" />
              <p>
                {this.state.title ||
                  this.state.user.name.first + ' ' + this.state.user.name.last}
              </p>
              <p>{this.state.titleValue || this.state.user.titleValue}</p>
              <p>{this.state.value}</p>
            </div>
            <div className="icons">
              <img
                alt="user"
                src="./images/user.png"
                onClick={() => this.handleChange('user')}
              />
              <img
                alt="envelope"
                src="./images/envelope.png"
                onClick={() => this.handleChange('email')}
              />
              <img
                alt="calender"
                src="./images/schedule.png"
                onClick={() => this.handleChange('dob')}
              />
              <img
                alt="location"
                src="./images/your-location.png"
                onClick={() => this.handleChange('location')}
              />
              <img
                alt="user"
                src="./images/phone-call.png"
                onClick={() => this.handleChange('contact')}
              />
            </div>
            <button className="btn-primary" onMouseOver={this.changeHover}>
              click
            </button>
          </article>
        </main>
      </>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: null,
//       title: '',
//       titleValue: '',
//       value: '',
//     };
//   }
//   handleChange = (value) => {
//     var fullName =
//       this.state.user.name.title +
//       ' ' +
//       this.state.user.name.first +
//       ' ' +
//       this.state.user.name.last;
//     if (value === 'user') {
//       this.setState({
//         title: 'My Name is ',
//         titleValue: fullName,
//       });
//     } else if (value === 'email') {
//       this.setState({
//         title: 'My Email is',
//         titleValue: this.state.user.email,
//       });
//     } else if (value === 'dob') {
//       this.setState({
//         title: 'My DOB is',
//         titleValue: this.state.user.dob.date,
//         value: 'Age : ' + this.state.user.dob.age,
//       });
//     } else if (value === 'location') {
//       this.setState({
//         title: 'My Address is',
//         titleValue:
//           this.state.user.location.street.number +
//           this.state.user.location.street.name,
//         value:
//           this.state.user.location.city +
//           ', ' +
//           this.state.user.location.state +
//           ', ' +
//           this.state.user.location.country +
//           ' - ' +
//           this.state.user.location.postcode,
//       });
//     } else if (value === 'contact') {
//       this.setState({
//         title: 'My Contact Number is',
//         titleValue: 'Phone : ' + this.state.user.phone,
//         value: 'Cell' + this.state.user.cell,
//       });
//     }
//   };
//   componentDidMount = () => {
//     fetch('https://randomuser.me/api/')
//       .then((res) => res.json())
//       .then((data) => this.setState({ user: data.results[0] }));
//   };

//   render() {
//     if (!this.state.user) {
//       return <Loader />;
//     }
//     console.log(this.state.user);
//     return (
//       <>
//         <main className="container">
//           {' '}
//           <article className="profile">
//             {' '}
//             <div className="profile_content">
//               {' '}
//               <img
//                 src={this.state.user.picture.large}
//                 alt="random user card"
//               />{' '}
//               <p>
//                 {' '}
//                 {this.state.title ||
//                   this.state.user.name.first + ' ' + this.state.user.name.last}
//               </p>
//               <p>{this.state.titleValue || this.state.user.titleValue}</p>
//               <p>{this.state.value}</p>
//             </div>
//             <div className="icons">
//               <img
//                 alt="user"
//                 src="./images/user.png"
//                 onClick={() => this.handleChange('user')}
//               />
//               <img
//                 alt="envelope"
//                 src="./images/envelope.png"
//                 onClick={() => this.handleChange('email')}
//               />
//               <img
//                 alt="calender"
//                 src="./images/schedule.png"
//                 onClick={() => this.handleChange('dob')}
//               />
//               <img
//                 alt="location"
//                 src="./images/your-location.png"
//                 onClick={() => this.handleChange('location')}
//               />
//               <img
//                 alt="user"
//                 src="./images/phone-call.png"
//                 onClick={() => this.handleChange('contact')}
//               />
//             </div>
//             <button className="btn-primary" onMouseOver={this.changeHover}>
//               click
//             </button>
//           </article>
//         </main>
//       </>
//     );
//   }
// }

export default App;
