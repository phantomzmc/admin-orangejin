/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as orderService from '../../service/order.service'
const CreateOrder = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        customerName: '',
        customerTel: '',
        customerAddress: '',
        customerOrder: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values.customerTel);
        const customer = {
            customer_name: values.customerName,
            customer_tel: values.customerTel,
            customer_address: values.customerAddress,
            customer_order : values.customerOrder,
            order_date: new Date(),

        }
        console.log(JSON.stringify(customer));

        orderService.createOrder('10-01-2021', customer);
    }
    return (

        <form onSubmit={submitHandler}>
            <TextField
                fullWidth
                value={values.customerName}
                type="text"
                name="customerName"
                placeholder="ชื่อ - นาสกุล"
                variant="outlined"
                onChange={(e) => setValues({ customerName: e.target.value })}
            />
            <TextField
                fullWidth
                value={values.customerTel}
                type="text"
                name="tel"
                placeholder="เบอร์โทรศัพท์"
                variant="outlined"
                onChange={(e) => setValues({ customerTel: e.target.value })}
            />
            <TextField
                fullWidth
                value={values.customerAddress}
                type="address"
                name="address"
                placeholder="ที่อยู่"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                onChange={(e) => setValues({ customerAddress: e.target.value })}
            />
            <TextField
                fullWidth
                value={values.customerOrder}
                type="address"
                name="order"
                placeholder="Ex : 5/5 = 1"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                onChange={(e) => setValues({ customerOrder: e.target.value })}
            />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>   
            {/* <button type="submit">Submit</button> */}
        </form>


    );

}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch'
    },
}));

export default CreateOrder;