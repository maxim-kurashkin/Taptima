import React from 'react';
import AppFormInput from '../app-form-input/app-form-input';
import AppDividerLong from '../app-divider-long/app-divider-long';
import AppFormCheckBox from '../app-form-checkbox/app-form-checkbox';
import card_ava from './img/card_ava.jpg';
import './app-profile-form.css';



const AppProfileForm = () => {
    return(
        <div className="profile">
            <div className="card">
                <div className="card__wrapper">
                    <div className="card__text">
                        {/* фактически Сюда нужно будет пушить значение из инпутов */}
                        <div className="card__name">Adrian Stefan</div>
                        <div className="card__city">Rm. Valcea, Romania</div> 
                        <div className="card__time">4:32PM (GMT-4)</div>
                    </div>
                    <img className="card__ava"src={card_ava} alt={"avatar"}/>
                </div>
                <AppDividerLong/>
                <div className="card__wrbtn">
                    <button className="card__btn">UPLOAD PICTURE</button>
                    <button className="card__btn">REMOVE PICTURE</button>
                </div>
            </div>
            <div className="wrapper">
                <form className="form">
                    <div className="form__header">
                        <div className="form__name">Basic Profile</div>
                        <div className="form__descr">The information can be edited from your profile page</div>
                    </div>
                    <AppDividerLong/>
                    <div className="from__wrapper">
                        <AppFormInput view name='firstname' type='text' placeholder='First Name' label='Please specify the first name'/>
                        <AppFormInput view name='lastname' type='text' placeholder='Last Name' label='Please specify the last name'/>
                        <AppFormInput view name='email' type='email' placeholder='Email' dhavelabel/>
                        <AppFormInput view name='phone' type='tel' placeholder='Phone' dhavelabel/>
                        <AppFormInput view name='country' type='text' placeholder='Country' dhavelabel/>
                        <AppFormInput view name='city' type='text' placeholder='City' dhavelabel/>
                    </div>
                    <AppDividerLong/>
                    <button className="form__btn">SAVE SETTINGS</button>
                </form>
                <form className="form form__second">
                    <div className="form__header">
                        <div className="form__name">Notifications</div>
                        <div className="form__descr">Mange the notifications emailing</div>
                    </div>
                    <AppDividerLong/>
                    <div className="from__wrapper from__wrapper__second">
                        <div className="form__left">
                        <div className="form__header subheader">Notifications</div>
                            <AppFormCheckBox id='email' name='email' value='yes' span='Email' dhavelabel/>
                            <AppFormCheckBox id='notifications' name='notifications' value='yes' span='Push notifications' label='For your mobile or tablet device' havelabel/>
                            <AppFormCheckBox id='messages' name='messages' value='yes' span='Text Messages' dhavelabel/>
                            <AppFormCheckBox id='calls' name='calls' value='yes' span='Phone Calls' dhavelabel/>
                        </div>
                        <div className="form__right">
                            <div className="form__header subheader">Messages</div>
                                <AppFormCheckBox id='eemail' name='eemail' value='yes' span='Email' dhavelabel/>
                                <AppFormCheckBox id='nnotifications' name='nnotifications' value='yes' span='Push notifications' dhavelabel/>
                                <AppFormCheckBox id='mmessages' name='mmessages' value='yes' span='Text Messages' dhavelabel/>
                        </div>
                    </div>
                    <AppDividerLong/>
                    <button className="form__btn form__btn__small">Save</button>
                </form>
            </div>
        </div>
    )
} 

export default AppProfileForm;