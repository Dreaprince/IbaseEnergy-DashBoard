import { useFormik } from "formik";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components/macro'
import pad from '../images/padlock.png'
import logoe from '../images/eye.png'
import {HiArrowNarrowRight} from 'react-icons/hi'



const BoxContainer = styled.div`
  width: 380px;
  height: 591px;
  background: #fff;
  box-shadow: 0px 1px 7px #242831;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Group = styled.div`
   width: 380px;
    box-sizing: border-box;
    padding-left: 40px;
`;

const Top = styled.div`
   height: 5.76px;
   background: #1EB2A6;
   border-radius: 5px 5px 0px 0px;
   margin-bottom: 28.24px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 41px;
`;

const Logo = styled.img`
   width: 50px;
   height: 50px;
   background: url(${pad});
   margin-right: 11px;
`;

const Dim = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    color: #333;
  }

  h5 {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #384C74;
  }
`;

const FormContainer = styled.div`
`;

const FieldContainer = styled.div`
`;

const Input = styled.input`
   width: 300px;
   height: 50px;
   background: #fff;
   box-sizing: border-box;
   border-radius: 3px;
   border: 1px solid #DAE2ED;
   padding: 18px;
   opacity: 0.5;
`;

const Innput = styled.input`
   width: 300px;
   height: 50px;
   background: #fff;
   box-sizing: border-box;
   border-radius: 3px;
   border: 1px solid #DAE2ED;
   padding: 18px;
   position: relative;
   opacity: 0.5;
`;

const LogoEye = styled.img`
   background: url(${logoe});
   position: absolute;
   width: 15px;
   height: 11px;
   left: 315px;
   margin-top: 20px;
`;

const SubmitButton = styled(Link)`
   width: 137px;
   height: 30px;
   background: #1EB2A6;
   box-shadow: 5px 2px 8px rgba(36, 40, 49, 0.13);
   border-radius: 3px;
   display: flex;
   flex-direction: row;
   color: #fff;
   text-align:center;
   justify-content: center;
   white-space: nowrap;
   outline: none;
   border: none;
   box-sizing: border-box;
   padding: 6px;
   margin: 30px 0px 30px  95px;
   cursor: pointer;
   font-size: 10px;
   line-height: 14px;
   font-weight: 600;
   margin-top: 7px;
   text-decoration: none;

   &:disabled {
        filter: contrast(0.6);
    } 
`;

const LogoArrow = styled(HiArrowNarrowRight)`
   width: 35px;
   height: 10px;
   margin-top: 9px;
`;

const MutedLink = styled.div`
    text-align: center;
    color: #333;
    margin-bottom: 41px;
    font-size: 10px;
    line-height: 14px;
    font-weight: 600;
    cursor: pointer;
`;

const BoldLink = styled(Link)`
   color: #1eb2a6;
   display: inline;
   opacity: 0.5;
   margin-left: 5px;
   text-decoration: none;
`;

const FieldError = styled.span`
   color: #b32e2e;
   font-size: 11px;
   min-height: 18px;
   display: block;
`;

const FormSuccess = styled.span`
  color: #28a828;
  font-size: 12px;
  min-height: 20px;
`;

const FormError = styled.span`
  color: #b32e2e;
  font-size: 12px;
  min-height: 20px;
`;

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(4, "Please enter your real name")
    .required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  phoneNumber: yup
     .number()
     .min(9, "Please enter a valid number")
     .required("Phone number is required"),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

const SignupForm = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("https://reqres.in/api/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <Top />
      <Group>
        <Div>
          <Logo />
          <Dim>
            <h4>Create an account</h4>
            <h5>Enter your email and set a password to begin</h5>
          </Dim>
        </Div>
        {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
        {!success && <FormError>{error ? error : ""}</FormError>}
        <FormContainer onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <Input
              name="fullName"
              placeholder="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <Input
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <Input
              name="phoneNumber"
              placeholder="Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <Innput
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <LogoEye />
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          </FieldContainer>
          <FieldContainer>
            <Innput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <LogoEye />
            <FieldError>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}
            </FieldError>
          </FieldContainer>
            <Link style={{textDecoration: 'none'}}>
              <SubmitButton 
                  to='./dashboard' 
                  type="submit" 
                  disabled={!formik.isValid}
              >
                Create account
                <LogoArrow />
              </SubmitButton>
            </Link>
          <MutedLink href="#">
          Already have an account?
          <Link style={{textDecoration: 'none'}}>
            <BoldLink to='./'>  
              Login
            </BoldLink>
          </Link>
        </MutedLink> 
        </FormContainer>
      </Group>
    </BoxContainer>
  );
}
export default SignupForm