import React from 'react';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import DropDownInput from '../forms/DropDownInput';

const renderSearchBox = ({ input, placeholder, type, meta: { touched, error } }) => (
    <div className="ui icon input">
        <input {...input} placeholder={placeholder} type={type} autoComplete="off" />
        <i className="search icon" type="submit"/>
    </div>
);

const SearchBar = (props) => {

    const { handleSubmit, pristine, submitting } = props; 

    const onSubmit = formValues => {
        console.log(formValues);
        alert(JSON.stringify(formValues));
    };

    // const renderField = (props) => {
    //     return (
    //         <div id="input" className="ui icon input">
    //         <input {...props.input} type="text" placeholder="Search..." /* //onChange={(e)=>console.log(e.target.value)}*/ autoComplete="off"/>
    //         <i className="search icon" />
    //     </div>
    //     );
    // }

    
            
    // const renderdrp = (props) => {
    //     return (
    //         <DropDownInput/>
    //     );
    // }
    // const renderDropdownSelection = ({ input, placeholder, type, meta: { touched, error } }) => (
    //     <div>
    //         <input {...input} placeholder={placeholder} type={type} autoComplete="off" />
    //         <i className="search icon" />
    //     </div>
    // );
    

;

    return(
        <form id="input" className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div class="fields">
                <div class="field">
                    <Field
                        name="searchTerm"
                        type="text"
                        component={renderSearchBox}
                        placeholder="Search..."
                        // onSubmit={}
                    />
                </div>
                <div class="field">
                    <Field
                        name="category"
                        component={DropDownInput}
                        placeholder="Choose"
                    />
                </div>
            </div>
            

            

            {/* <button type="submit" disabled={pristine || submitting}>
                Post
            </button> */}

        </form>
    );

}; 

const validate = formValues => {
    const errors = {};
    if(!formValues.searchTerm){errors.searchTerm = 'Required'}
    if(!formValues.searchTerm){errors.searchTerm = 'Required'}
    return errors;
};

const formWrapped = reduxForm({
    form: 'searchBar',
    validate
})(SearchBar);

// const selector = formValueSelector('searchBar');

// const mapStateToProps = (state) => ({
//     favoriteColorValue: selector(state, 'favoriteColor')
// });

export default connect()(formWrapped);


// import React from 'react';
// import { Field, reduxForm, formValueSelector  } from 'redux-form';
// import { connect } from 'react-redux';
// import DropDownInput from '../forms/DropDownInput';


//     const SearchBar = (props) => {
//         const { handleSubmit } = props;
//         const onSubmit = formValues => {
//                     console.log(formValues)
//                     alert(JSON.stringify(formValues));
//                 };
//                 const renderFields = (props) => {
//                             const {  meta: {  error } } = props;
//                             console.log(props);
//                             console.log(error);
//                             return (
//                                 <div id="input" className="ui icon input">
//                                 <input {...props.input} type="text" placeholder="Search..." /* //onChange={(e)=>console.log(e.target.value)}*/ />
//                                 {/* <i className="search icon" /> */}
//                             </div>
//                             );
//                         }
//                          const renderField = (props) => (
//                             <div >
//                               {/* <label>{ placeholder} {touched && error && <span className="ui red horizontal label"> {error} </span>} </label>
//                                  */}
//                                 {/* //! in last && just put the intended component  */}
//                                 asdasd
//                                 {/* <input {...props.input} type="text" /> */}
//                                 {/* <div id="input" className="ui icon input"> */}
//                                 <input type="text" placeholder="Search..." /* //onChange={(e)=>console.log(e.target.value)}*/ />
//                                 {/* <i className="search icon" /> */}
//                             </div>
//                         );
//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Field
//                 name="searchTerm"
//                 component={renderFields}
//             />
//             <Field
//                         name="content"
//                         type="textarea"
//                         component={renderField}
//                         placeholder="Content"
//                     />
//         <div>
//           <label>Last Name</label>
//           <Field name="lastName" component="input" type="text"/>
//         </div>
//         <div>
//           <label>Email</label>
//           <Field name="email" component="input" type="email"/>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
  
// }
// const formWrapped = reduxForm({
//     form: 'searchBar',
//     // validate
// })(SearchBar);
// // Decorate the form component
// // ContactForm = reduxForm({
// //   form: 'contact' // a unique name for this form
// // })(ContactForm);

// // export default ContactForm;
// export default connect()(formWrapped);