import { useFormik } from "formik";
import {Link} from 'react-router-dom';
import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from 'styled-components/macro'
import pad from '../images/padlock.png'
import {HiArrowNarrowRight} from 'react-icons/hi'



const BoxContainer = styled.div`
  width: 380px;
  height: 411px;
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

const FormContainer = styled.div``;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;

    h5 {
        font-size: 10px;
        font-weight: 600;
        line-height: 14px;
        color: #333;  
    }
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

const validationSchema = yup.object({
  email: yup.string().email("Please enter a valid email address").required()
});

const Forget = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { ...data } = values;

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
      email: ""
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
            <h4>Forgot Password</h4>
            <h5>Enter your email to reset password</h5>
          </Dim>
        </Div>
        {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
        {!success && <FormError>{error ? error : ""}</FormError>}
        <FormContainer onSubmit={formik.handleSubmit}>
          <FieldContainer>
            <h5>Email</h5>
            <Input
              name="email"
              placeholder="Enter your email address"
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
            <BoldLink to='./' >  
              Login
            </BoldLink>
          </Link>
        </MutedLink> 
        </FormContainer>
      </Group>
    </BoxContainer>
  );
}
export default Forget