import React, {Component} from 'react';
import Contacts from './Contacts.jsx';
import photoMan from '../component/assets/img/man.png';
import photoWoman from '../component/assets/img/woman.png';
import photoNA from '../component/assets/img/non.png';
import '../component/css/contact.css';

export class ContactPage extends Component {

    state = {
        contacts: [
            {
                firstName: "Барней",
                lastName: "Стинсовський",
                phone: "+380956319521",
                gender: "male",
                photoGender: photoMan
            }, {  
                firstName: "Робін",
                lastName: "Щербатська",
                phone: "+380931460123",
                gender: "female",
                photoGender: photoWoman
            }, {
                firstName: "Анонімний",
                lastName: "Анонімус",
                phone: "+380666666666",
                photoGender: photoNA
            }, {
                firstName: "Лілія",
                lastName: "Олдровна",
                phone: "+380504691254",
                gender: "female",
                photoGender: photoWoman
            }, {
                firstName: "Маршен",
                lastName: "Еріксонян",
                phone: "+380739432123",
                gender: "male",
                photoGender: photoMan
            }, {
                firstName: "Теодор",
                lastName: "Мотсбес",
                phone: "+380956319521",
                gender: "male",
                photoGender: photoMan
            }
        ],
        search: '',
        checkHe: 'він',
        checkShe: 'вона',
        checkNA: 'не вказано'
    };

    handleSearchChange = e => {
        this.setState({search: e.target.value});
    };

    handleCheckHeChange = e => {
        const test = this.state.checkHe;
        
        if(test === "він"){
            this.setState({checkHe: ""});
        } else {
            this.setState({checkHe: e.target.value});
        }
    };

    handleCheckSheChange = e => {
        const test = this.state.checkShe;
        
        if(test === "вона"){
            this.setState({checkShe: ""});
        } else {
            this.setState({checkShe: e.target.value});
        }
    };

    handleCheckNAChange = e => {
        const test = this.state.checkNA;
        
        if(test === "не вказано"){
            this.setState({checkNA: ""});
        } else {
            this.setState({checkNA: e.target.value});
        }
    };

    render() {
        let filteredContacts = [];
        if(this.state.checkHe !== "" && this.state.checkShe !== "" && this.state.checkNA !== "") {
            filteredContacts = this.state.contacts;
        } else if(this.state.checkShe !== "" && this.state.checkHe === "" && this.state.checkNA !== "") {
            filteredContacts = this.state.contacts.filter(item => item.gender !== "male");
        } else if(this.state.checkShe !== "" && this.state.checkHe !== "" && this.state.checkNA === "") {
            filteredContacts = this.state.contacts.filter(item => item.gender !== undefined);
        } else if (this.state.checkShe === "" && this.state.checkHe !== "" && this.state.checkNA !== "" ) {
            filteredContacts = this.state.contacts.filter(item => item.gender !== "female")
        } else if (this.state.checkShe === "" && this.state.checkHe === "" && this.state.checkNA !== "" ) {
            filteredContacts = this.state.contacts.filter(item => item.gender === undefined)
        } else if (this.state.checkShe === "" && this.state.checkHe !== "" && this.state.checkNA === "" ) {
            filteredContacts = this.state.contacts.filter(item => item.gender === "male")
        } else if (this.state.checkShe !== "" && this.state.checkHe === "" && this.state.checkNA === "" ) {
            filteredContacts = this.state.contacts.filter(item => item.gender === "female")
        }        
        filteredContacts = filteredContacts.filter(item => (item.lastName.toLowerCase().includes(this.state.search.toLowerCase()) || 
            item.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || 
            item.phone.toLowerCase().includes(this.state.search.toLowerCase())));    
        return(
            <div className="Contacts">
                <div className="contact_check">
                    <label className="check_item">
                        <input type="checkbox" value="він" defaultChecked onChange={this.handleCheckHeChange}/>
                        Ч
                    </label>
                    <label className="check_item">
                        <input type="checkbox" value="вона" defaultChecked onChange={this.handleCheckSheChange} />
                        Ж
                    </label>
                    <label className="check_item">
                        <input type="checkbox" value="не вказано" defaultChecked onChange={this.handleCheckNAChange} />
                        НВ
                    </label>
                </div>
                <div className="contact_find">
                    <input className="find_input" type="text" value={this.state.search} onChange={this.handleSearchChange} />
                </div>
                { filteredContacts.map((contact, i) => <Contacts contact={contact} key={i} />)}
            </div>
        )
    }

};
