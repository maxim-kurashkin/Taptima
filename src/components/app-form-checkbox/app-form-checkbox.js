import React from 'react';
import './app-form-checkbox.css';


const AppFormCheckBox = ({checked, id, name, value, span, label, dhavelabel, havelabel}) => {
    let classNamesC = "form__checkbox__label";
    if(dhavelabel) {
        classNamesC +=' form__dont__label'
    }
    let classNamesT = "form__check";
    if(havelabel) {
        classNamesT +=' form__nom'
    }
    let classNamesB = " ";
    if(havelabel) {
        classNamesB +=' big__check'
    }
    return(
        <div className={classNamesB}>
            <div className={classNamesT}>
                <input className="form__checkbox" type="checkbox" id={id} name={name} value={value}/>
                <label className="forcheck" htmlFor={id}></label>
                <div className="form__span">{span}</div>
            </div>
            <label className={classNamesC}>{label}</label>
        </div>
    )
}

export default AppFormCheckBox;