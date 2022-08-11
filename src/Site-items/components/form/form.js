import React, {useState} from "react";
import './form.scss'

const Form = ({classN}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onFormSubmit = () => {
      console.log(`${name} ${email}`)
    }

    return(
        <div className={classN}>
            <div className={'u-margin-bottom-middle'}>
                <h2 className={'heading-secondary'}>
                    Start booking now
                </h2>
            </div>

            <form onSubmit={onFormSubmit}
                  className="form"
            >
                <div className="form__group">
                    <input type="text"
                           id={'name'}
                           value={name}
                           onChange={onNameChange}
                           className="form__input"
                           placeholder={'Full name'}
                           required/>
                    <label htmlFor={'name'}
                        className={'form__label'}>
                        Full name
                    </label>
                </div>
                <div className="form__group">
                    <input type="email"
                           id={'email'}
                           value={email}
                           onChange={onEmailChange}
                           className="form__input"
                           placeholder={'Email'}
                           required/>
                    <label htmlFor={'email'}
                        className={'form__label'}>
                        Email
                    </label>
                </div>
                <div className="form__group u-margin-bottom-middle">
                    <div className="form__radio-group">
                        <input type={"radio"}
                               name={'size'}

                               className={'form__radio-input'}
                               id={'small'}/>
                        <label htmlFor={'small'}
                               className={'form__radio-label'}>
                            <span className="form__radio-button"/>

                            Small tour group
                        </label>
                    </div>
                    <div className="form__radio-group">
                        <input type={"radio"}
                               name={'size'}
                               className={'form__radio-input'}
                               id={'large'}/>
                        <label htmlFor={'large'}
                               className={'form__radio-label'}>
                            <span className="form__radio-button"/>
                            Large tour group
                        </label>
                    </div>
                </div>
                <div className={'form__group'}>
                    <button className={'btn btn--green'} type={'submit'}>
                        Next step &rarr;
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;