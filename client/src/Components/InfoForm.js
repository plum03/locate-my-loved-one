import React, {Component} from "react";
import Loading from "./Loading.js";

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                email: props.email || "",
                state: props.state || "",
                location: props.location || "",
                note: props.note || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let {name, value} = event.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let profile = {...this.state.inputs};
        this.props.submit(profile);
    }
    render() {
        let {firstName, lastName, email, state, location, note} = this.state.inputs;
        return (
			loading ?
            <Loading />
            :
            <div className="profileFormParent">
                <form className="ProfileForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="firstName" type="text" value={firstName} placeholder="First Name" />
                    <input onChange={this.handleChange} name="lastName" type="text" value={lastName} placeholder="Last Name" />
                    <input onChange={this.handleChange} name="email" type="email" value={email} placeholder="Email Address" />
                    <label>State of Residence<select onChange={this.handleChange} name="state">
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                    </select></label>		
                    <input onChange={this.handleChange} name="location" type="text" value={location} placeholder="Your current location" />
                    <input onChange={this.handleChange} name="note" type="text" value={note} placeholder="Use this space to say how you're doing, who else is with you, whether you need anything." />
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

export default ProfileForm;