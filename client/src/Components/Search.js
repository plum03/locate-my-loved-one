import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputs: {
                firstName: '',
                lastName: '',
                state: 'AL'
            },
            filteredResults: []
        }
    }

    componentDidMount(){
        //get request for an array of users
        //this means we need an array of users
        //on signUp, add user to array of users
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                searchInputs: {
                    ...prevState.searchInputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            searchInputs: {
                firstName: '',
                lastName: '',
                state: 'AL'
            }
        })
    }

    render() {
        console.log('state', this.state.searchInputs)
        let { firstName, lastName, state, email } = this.state.searchInputs
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange} name="state" value={state} placeholder="Home State">
                        <option value="AL">Alabama (AL)</option>
                        <option value="AK">Alaska (AK)</option>
                        <option value="AZ">Arizona (AZ)</option>
                        <option value="AR">Arkansas (AR)</option>
                        <option value="CA">California (CA)</option>
                        <option value="CO">Colorado (CO)</option>
                        <option value="CT">Connecticut (CT)</option>
                        <option value="DE">Delaware (DE)</option>
                        <option value="DC">District Of Columbia (DC)</option>
                        <option value="FL">Florida (FL)</option>
                        <option value="GA">Georgia (GA)</option>
                        <option value="HI">Hawaii (HI)</option>
                        <option value="ID">Idaho (ID)</option>
                        <option value="IL">Illinois (IL)</option>
                        <option value="IN">Indiana (IN)</option>
                        <option value="IA">Iowa (IA)</option>
                        <option value="KS">Kansas (KS)</option>
                        <option value="KY">Kentucky (KY)</option>
                        <option value="LA">Louisiana (LA)</option>
                        <option value="ME">Maine (ME)</option>
                        <option value="MD">Maryland (MD)</option>
                        <option value="MA">Massachusetts (MA)</option>
                        <option value="MI">Michigan (MI)</option>
                        <option value="MN">Minnesota (MN)</option>
                        <option value="MS">Mississippi (MS)</option>
                        <option value="MO">Missouri (MO)</option>
                        <option value="MT">Montana (MT)</option>
                        <option value="NE">Nebraska (NE)</option>
                        <option value="NV">Nevada (NV)</option>
                        <option value="NH">New Hampshire (NH)</option>
                        <option value="NJ">New Jersey (NJ)</option>
                        <option value="NM">New Mexico (NM)</option>
                        <option value="NY">New York (NY)</option>
                        <option value="NC">North Carolina (NC)</option>
                        <option value="ND">North Dakota (ND)</option>
                        <option value="OH">Ohio (OH)</option>
                        <option value="OK">Oklahoma (OK)</option>
                        <option value="OR">Oregon (OR)</option>
                        <option value="PA">Pennsylvania (PA)</option>
                        <option value="RI">Rhode Island (RI)</option>
                        <option value="SC">South Carolina (SC)</option>
                        <option value="SD">South Dakota (SD)</option>
                        <option value="TN">Tennessee (TN)</option>
                        <option value="TX">Texas (TX)</option>
                        <option value="UT">Utah (UT)</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                        <option value="AS">American Samoa (AS)</option>
                        <option value="GU">Guam (GU)</option>
                        <option value="MP">Northern Mariana Islands (MP)</option>
                        <option value="PR">Puerto Rico (PR)</option>
                        <option value="UM">United States Minor Outlying Islands (UM)</option>
                        <option value="VI">Virgin Islands (VI)</option>
                    </select>
                    <input onChange={this.handleChange} type="text" name="firstName" value={firstName} placeholder="First Name" />
                    <input onChange={this.handleChange} type="text" name="lastName" value={lastName} placeholder="Last Name" />
                    <button type="submit">submit</button>
                </form>
                <div>
                    search data will appear here
                    this will be data from a filtered array of users that match search inputs
                </div>
            </div>
        )
    }
}
