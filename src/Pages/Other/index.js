import React, { useState, useEffect } from "react";
import LinkButton from "../../Components/LinkButton";
import { useStateValue } from "../../State/StateProvider";
import { Body, SectionA, ErrorMessage, SectionB, Header, FormLabel, FormInput, Button } from "./styles";
import { useForm } from 'react-hook-form';

//import { useInput } from "rooks";
//import data from "../../Data/mock.json"



function OtherPage() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {

    userDataDispatch({
      type: 'changeUserData',
      newUserData: {
        name: `${data.firstname} ${data.lastname}`,
        age: data.age
      }
    })

    console.log(data);
  };
  //Global State
  const [{ userData }, userDataDispatch] = useStateValue(localStorage.getItem('userData') || 'Test');

  //Local State
  const [counter, setCounter] = useState(0);

  //demonstrate with simple weather fetch
  useEffect(() => {
    console.log('other page use effect called')
    localStorage.setItem('userData', userData)
  }, [userData]);



  return (
    <Body>
      <Header>
        Form Page <LinkButton label={'Home'} to={'/'}></LinkButton>
      </Header>
      <SectionA><p> Pages are laid out using CSS Grids.</p>
        <p> They are styled using styled-components.</p></SectionA>

      <SectionB>
        <p>This form uses react-hook-form. It has validation built in. Its data is stored in global state</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FormLabel>First Name </FormLabel>
            <FormInput name="firstname" ref={register} /> {/* register an input */}
          </div>
          <div>
            <FormLabel>Last Name </FormLabel>
            <FormInput name="lastname" ref={register({ required: true })} />
            {errors.lastname && <ErrorMessage> Last name is required.<br /></ErrorMessage>}
          </div>
          <div>

            <FormLabel>Age </FormLabel>
            <FormInput name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && <ErrorMessage> Age must be a number.<br /></ErrorMessage>}
          </div>
          <input type="submit" />
        </form>
        <div> <p>First Name: {userData.name}</p>
          <p>Age:{userData.age}</p></div></SectionB>

    </Body>
  );
}

export default OtherPage;
