import React from 'react'; 
class UserRegistration extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        user: {}
     }
       this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleDoBChange = this.handleDoBChange.bind(this);
      this.handleCourseChange = this.handleCourseChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
   }
   handleNameChange(e) {
        this.setState( (state, props) => {
            let user = state.user
            user.name = e.target.value;
            return { user: user }
        });
    }
    handleEmailChange(e) {
        this.setState( (state, props) => {
            let user = state.user
            user.email = e.target.value;
            return { user: user }
        });
    }
    handleDoBChange(e) {
        this.setState( (state, props) => {
            let user = state.user
            user.dob = e.target.value;
            return { user: user }
        });
    }
    handleCourseChange(e) {
        this.setState( (state, props) => {
            let user = state.user
            user.course = e.target.value;
            return { user: user }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/', {
            method: 'POST',
            Headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state.user),
        }).then(res => res.json())
          .then(res => console.log(res));
                   
        alert(JSON.stringify(this.state.user));
        
     }

    render() {
        return (
           <div id="userForm">
             <form onSubmit={this.handleSubmit}>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter Name" 
                 value={this.state.user.name}
                 onChange={this.handleNameChange} />
  
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Email"
                 value={this.state.user.email}
                 onChange={this.handleEmailChange} />
  
              <label for="date">Date of Birth</label>
              <input type="date" id="dob" name="dob" placeholder="Enter date of Birth" 
                 value={this.state.user.dob}
                 onChange={this.handleDoBChange} />
  
              <label for="category">Select Course</label>
              <select id="category" name="category"
                 value={this.state.user.course}
                 onChange={this.handleCourseChange} >
                <option value="">Select</option>
                <option value="Eng">Engineering</option>
                <option value="Arts">Arts & Science</option>
                <option value="Medicine">Medical Science</option>
              </select>
             
              <input type="submit" value="Submit" />
             </form>
           </div>
        )
     }
}
export default UserRegistration;