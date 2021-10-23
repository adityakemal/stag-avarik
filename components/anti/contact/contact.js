import React, { useState, useEffect } from "react"
import * as Yup from "yup"
import PropTypes from "prop-types"

import { Formik, Form } from "formik"
import { Input } from "components/anti"

// Example of Data prop
// const fieldList = [
//     {
//         as: "input",
//         name: "name",
//         label: "Nama",
//         column: 6,
//     },
//     {
//         as: "input",
//         name: "nickname",
//         label: "Nickname",
//         column: 6,
//     },
//     {
//         as: "textarea",
//         name: "message",
//         label: "Message",
//         column: 12,
//         rows: 3,
//     },
// ]


export const Contact = ({
    btnClassName,
    btnName,
    children,
    className,
    data,
    fieldClassName,
    floatingLabel,
    handleSubmit,
    variant,
    yupObject,
}) => {

    // InitialValues
    const [initialValues, setInitialValues] = useState({})
    useEffect(() => {
        let value = {}

        data.forEach(field => {
            value[field.name] = ""
        })
        setInitialValues(value)
    }, [])

    const YupRegisterValidation = Yup.object(yupObject)

    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={YupRegisterValidation}
            onSubmit={handleSubmit}
        >
            {props => {
                const {
                    handleChange,
                    handleBlur,
                    errors,
                    touched,
                    values,
                    isSubmitting,
                } = props;
                return (
                    <Form>
                        <div className={`form-row ${className}`}>
                            {data.map((field, i) => {
                                const fieldAs = field.as || "input"
                                return (
                                    <div className={`form-group col-12 col-md-${field.column || "12"}`} key={i}>
                                        {fieldAs === "input" && (
                                            <Input
                                                formik
                                                floatingLabel={floatingLabel}
                                                variant={variant}
                                                className={`${fieldClassName} ${field.className}`}
                                                label={field.label}
                                                placeholder={field.placeholder}
                                                type={field.type}
                                                as={fieldAs}
                                                id={field.name}
                                                name={field.name}
                                                value={values[`${field.name}`]}
                                                disabled={field.disabled}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={touched}
                                                errors={errors}
                                            />
                                        )}
                                        {fieldAs === "textarea" && (
                                            <Input
                                                formik
                                                floatingLabel={floatingLabel}
                                                variant={variant}
                                                className={`${fieldClassName} ${field.className}`}
                                                label={field.label}
                                                placeholder={field.placeholder}
                                                as={fieldAs}
                                                id={field.name}
                                                name={field.name}
                                                rows={field.rows || 4}
                                                value={values[`${field.name}`]}
                                                disabled={field.disabled}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                touched={touched}
                                                errors={errors}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                            {children}
                            <div className="form-group col-12">
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${btnClassName}`}
                                    disabled={isSubmitting}
                                >
                                    {btnName}
                                </button>
                            </div>
                        </div>
                        {/* <DisplayFormikState {...props} /> */}
                    </Form>
                )
            }
            }
        </Formik>
    )
}

Contact.propTypes = {
    btnClassName: PropTypes.string,
    btnName: PropTypes.string,
    className: PropTypes.string,
    floatingLabel: PropTypes.bool,
    variant: PropTypes.oneOf(["basic", "underline"]),

}

Contact.defaultProps = {
    btnClassName: "",
    btnName: "Submit",
    className: "",
    variant: "basic",

}


// For Debugging 

// export const DisplayFormikState = props =>
//     <div style={{ margin: '1rem 0' }}>
//         <h3 style={{ fontFamily: 'monospace' }} />
//         <pre
//             style={{
//                 background: '#f6f8fa',
//                 fontSize: '.65rem',
//                 padding: '.5rem',
//             }}
//         >
//             <strong>props</strong> ={' '}
//             {JSON.stringify(props, null, 2)}
//         </pre>
//     </div>;