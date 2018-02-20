import React, {Component} from "react";
import ProfileForm from "../shared/ProfileForm.js";
import Loading from "../shared/Loading";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName || "",
            lastName: props.lastName || "",
            email: props.email || "",
            state: props.state || "",
            location: props.location || "",
            note: props.note || ""
        }
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.getProfile = this.getProfile.bind(this); 
    this.editProfile = this.editProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.getProfile(id);
    } 
    
    componentWillReceiveProps(nextProps) {
        let nextId = nextProps.match.params.id
        let { id } = this.props.match.params;
        if (nextId !== id) {
            this.getProfile(nextId);
        }
    }

    toggleDisplay() {
        this.state((prevState) => {
            return {
                displayForm: !prevState.displayForm
            }
        })
    }

    getProfile(id) {
        axios.get(profileUrl + id)
            .then((response) => {
                let { data } = response;
                this.setState({
                    profile: data,
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    profile: {},
                    loading: false
                });
            });
    }

    editProfile(profile){
        let {id} = this.props.match.params;
        axios.put(profileUrl + id, profile)
            .then((response) => {
                let {data} = response;
                this.setState({
                    profile: data,
                    displayForm: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }

    deleteProfile() {
        let {id} = this.props.match.params;
        axios.delete(profileUrl + id)
            .then((response) => {
                alert(`Profile ${id} has been deleted.`);
                this.props.history.push("/");
            })
            .catch((err) => {
                console.error(err);
                this.props.history.push("/");
            })
    }

    render() {
        let {profile, loading, displayForm} = this.state;
        let {firstName, lastName, email, state, location, note} = this.state.inputs;
        return (
            loading ?
            <Loading />
            :
            <div style={style}>
                <h1>{firstName} {lastName}</h1>
                <div style={formStyle}>
                    <Form {...profile} submit={this.editProfile} />
                <button onClick={this.toggleDisplay}>Edit</button>
                <button onClick={this.removeItem}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Profile;