import React, {useState, useEffect} from 'react';
import './app-form-input.css';



const AppFormInput = ({id, name, type, placeholder,label, dhavelabel}) => {
    const useValidation = (value,validations) => {
        const[isEmpty, setEmpty] = useState(true)
        const[minLengthError, setMinLengthError] = useState(false)

        useEffect(() => {
            for (const validation in validations) {
                switch (validation) {
                    case 'minLength': 
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true)
                    break;

                    default:
                }
            }
        }, [validations,value])
        return{
            isEmpty,
            minLengthError
        }
    }
    
    const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const[isDirty, setDirty] = useState(false)
    const valie  = useValidation (value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return{
        value, 
        onChange, 
        onBlur,
        isDirty,
        ...valie
    }
}
    const val = useInput({isEmpty: true, minLength: 3})

    let classNames = "form__input__label";
    if(dhavelabel) {
        classNames +=' form__dont__label'
    }
    
    return(
        <div className="form__input">
            <input onChange={e => val.onChange(e)} onBlur={e => val.onBlur(e)} value={{val}.value} className="form__input__item" id={id} name={name} type={type} placeholder={placeholder}/>
            <label className="input__item__label" htmlFor={id}>{placeholder}</label>
            <label className={classNames}>{label}</label>
        </div>
    )
}



export default AppFormInput;


// export default class AppFormInput extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             view: false
//         };
//         this.onView = this.onView.bind(this);
//         this.onView = this.onNoView.bind(this);
//     }

//     onView(e) {
//         this.setState(({view}) => ({
//             view: !view
//         }))
//     }
//     onNoView(e) {
//         this.setState(({view}) => ({

//         }))
//     }

//     render() {
//         const {id, name, type, placeholder,label, dhavelabel} = this.props;
//         const {view} =this.state; 

//         let classNames = "form__input__label";
//         if(dhavelabel) {
//             classNames +=' form__dont__label'
//         }
//         let classNamesV = "input__item__label";
//         if(view) {
//             classNamesV +=' view'
//         }
//         return(
//             <div className="form__input">
//                 <input value={{name}.value} className="form__input__item" id={id} name={name} type={type} placeholder={placeholder}
//                 onFocus={this.onView}/>
//                 <label className={classNamesV} htmlFor={id}>{placeholder}</label>
//                 <label onFocus={this.onView} onBlur={this.onNoView} className={classNames}>{label}</label>
//             </div>
//         )
//     }
// }

