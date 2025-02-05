import React, { Component } from 'react'
// import { AddFeatures } from './AddFeatures/AddFeatures'
import './CreateEvent.css'
// import NameSportsAndType from './NameSportsAndTypes/NameSportsAndType'

export default class CreateEventPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            features: [
                {
                    id: 1,
                    feature: "Player Registration"
                },
                {
                    id: 2,
                    feature: "Fee Collection And Confirmation"
                },
                {
                    id: 3,
                    feature: "Expanse Manager"
                },
                {
                    id: 4,
                    feature: "Auction Features"
                },
                {
                    id: 5,
                    feature: "Manager Management"
                }
            ],
            eventTypes: [
                {
                    id: 1,
                    eventTypeName: "Simple"
                },
                {
                    id: 2,
                    eventTypeName: "Auction"
                }
            ],
            eventName: "",
            sports: "",
            startDate: "",
            eventType: "",
            endDate: "",
            eventFeature: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false
            },
        }
    }
    setValues(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.value;
        console.log(value)
        // console.log(name)
        // console.log()
        // console.log(name);
        //setting the value here in props
        this.setState({ [name]: value });
    }
    featureHandler(event) {
        //Catching the Event Name form name tag
        const name = event.target.name;
        //Catching the target value form name tag
        const value = event.target.checked;
        this.setState({...this.state,eventFeature:{...this.state.eventFeature,[name]:value}})
    }
    submitHandler(event){
        // event.preventDefault();
        var str=[]
        for(const d in this.state.eventFeature){
            if(this.state.eventFeature[d]==true){
                str=[...str,this.state.features[d-1]]
                // console.log(this.state.features[d].feature)
                // console.log(d)
                // console.log(typeof(d))
            }
        }
        console.log(str)
        const data={
            eventName:this.state.eventName,
            sports:this.state.sports,
            startDate:this.state.startDate,
            eventType:this.state.eventType,
            endDate:this.state.endDate,
            eventFeature:str
        }
        console.log(data)
        //Axois Code to trasfer data
    }
    render() {
        /*
            if else statement here....for navigation
            cancel and submit have navigate to the dasshboard
        */ 
        return (
            <div>
                <div className='create_event_form col-12'>
                    <div className='create_event_text'>Create Event</div>
                    <hr />
                    <div className='clearfix'>
                        <div className='col-8 create_event_form create_event_float_left'>
                            <div className='create_event_div col-6 create_event_float_left'>
                                <div>
                                    <input type='text' placeholder='Event Name' name='eventName' className='create_event_input' value={this.state.eventName} onChange={(event) => { this.setValues(event) }} />
                                </div>
                                <div>
                                    <select className='create_event_input_select' value={this.state.sports} name='sports' onChange={(event) => { this.setValues(event) }}>
                                        <option className='create_event_input_options' value='select' >Select Sport</option>
                                        <option className='create_event_input_options' value="Rushui">Rushui</option>
                                    </select>
                                </div>
                                <div >
                                    <label className='create_event_label' htmlFor='startdate'>Start Date</label>
                                    <br />
                                    <input className='create_event_input' id='startdate' type='date' name='startDate' value={this.state.startDate} onChange={(event) => { this.setValues(event) }} />
                                </div>
                            </div>
                            <div className='create_event_div col-6 create_event_float_right'>
                                <div className='create_event_margin_bottm'>
                                    <div className='create_event_list_span'>Event Type</div>
                                    <ul className='create_event_list '>
                                        {this.state.eventTypes.map((eventType) => {
                                            return (
                                                <li key={eventType.id} className='create_event_list_items'>
                                                    <input type='radio' name='eventType' value={eventType.eventTypeName} onChange={(event) => { this.setValues(event) }} className='create_event_radio' /><span className='create_event_list_span'>{eventType.eventTypeName}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <label className='create_event_label' htmlFor='enddate'>End Date</label>
                                    <br />
                                    <input className='create_event_input' name='endDate' id='enddate' type='date' value={this.state.endDate} onChange={(event) => { this.setValues(event) }} />
                                </div>
                            </div>
                        </div>
                        <div className='col-4 create_event_float_right create_event_form'>
                            <div className='create_event_div'>
                                <div className='create_event_div_list'>
                                    <div className='create_event_title_features'>Add Features</div>
                                    <ul className='create_event_list_features '>
                                        {this.state.features.map((feature) => {
                                            return (
                                                <li key={feature.id} className='create_event_list_items'>
                                                    <input type='checkbox' name={feature.id} className='create_event_radio' value={feature.feature} onChange={(event) => { this.featureHandler(event) }} /><span className='create_event_list_span'>{feature.feature}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='create_event_hr' />
                    <div className='clearfix col-12'>
                        <span className='create_event_float_left create_event_margin_left'>
                            <button className='create_event_button' onClick={() => { console.log(this.state) }}>Cancel</button>
                        </span>
                        <span className='create_event_float_right create_event_margin_right'>
                            <button className='create_event_button' onClick={(event)=>{this.submitHandler(event)}}>Submit</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
