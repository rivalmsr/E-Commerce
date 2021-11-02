import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller 
        render={({field}) => <TextField label={label} required={required} {...field}/>}
        control={control}
        fullWidth
        name={name}
      />
    </Grid>
  )
}

export default FormInput
