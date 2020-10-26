import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hideDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label='Full Name'
            name='fullName'
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='Mobile'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.Input
            label='ity'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            values={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
          <Controls.DatePicker
            name='hireDate'
            label='Hire Date'
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Button text='Submit' />
          <Controls.Button color='secondary' text='Cancel' />
        </Grid>
      </Grid>
    </Form>
  );
}