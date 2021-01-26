/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


import * as orderService from '../../service/order.service'
const CreateOrder = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        tel: '',
        address: '',
        order: ''
    });
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    useEffect(() => {
        setAppState({ loading: true });
        // var url = 'https://admin-jintana-farm.herokuapp.com/';
        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*'
        //     }
        // }).then(res => res.json())
        //     .then(response => console.log('Success:', response))
        //     .catch(error => console.error('Error:', error));
        // const apiUrl = `https://admin-jintana-farm.herokuapp.com/`;
        // fetch(apiUrl)
        //     .then((res) => 
        //     console.log(res))
        //     // res.json())
        //     .catch((err) => console.log(err))
        //     .then((repos) => {
        //         console.log(repos)
        //         setAppState({ loading: false, repos: repos });
        //     });

        const result = axios({
            method: 'GET',
            url: "https://admin-jintana-farm.herokuapp.com/",
            // data: {
            //     message: msg
            // },
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     Authorization: 'Bearer 3DOWa249oqswtKnejutokN5aDdcZMv2F5MtPMP7IwfK'
            // }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
            });
        return result
    }, [setAppState]);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(values);
        const customer = {
            customerName: "อารมย์ บุญญา",
            customerTel: "0850372097",
            customerAddress: "54/82 พุทธมลทลสาย5 ต.บางกระทึก อ.สามพราน จ.นครปฐม 73210",
            customerOrder: "เบอร์ 5/5 = 1",
            orderDate: new Date(),

        }
        console.log(JSON.stringify(customer));

        await orderService.createOrder('10-01-2021', customer);
    }
    return (

        <form onSubmit={submitHandler}>
            <TextField
                fullWidth
                value={values.name}
                type="text"
                name="name"
                placeholder="ชื่อ - นาสกุล"
                variant="outlined"
                onChange={(e) => setValues({ name: e.target.value })}
            />
            <TextField
                fullWidth
                value={values.tel}
                type="text"
                name="tel"
                placeholder="เบอร์โทรศัพท์"
                variant="outlined"
                onChange={(e) => setValues({ tel: e.target.value })}
            />
            <TextField
                fullWidth
                value={values.address}
                type="address"
                name="address"
                placeholder="ที่อยู่"
                variant="outlined"
                onChange={(e) => setValues({ address: e.target.value })}
            />
            {/* <TextField
                fullWidth
                value={values.order}
                type="text"
                name="order"
                placeholder="Ex : 5/5 = 1"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => setValues({ order: e.target.value })}
            /> */}

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