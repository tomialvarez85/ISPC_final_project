import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '50%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 1),
	},
    root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},

}));





function Register(){
    const initialFormData = Object.freeze({
		user: '',
		email: '',
		password: '',
	});

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
        if (document.getElementById('fm').value === "" || document.getElementById('rmail').value === "" || document.getElementById('password1').value === ""){
			alert("Faltan datos");
		}
		else {
			axios.post('', {
				user: formData.user,
				email: formData.email,
				password: formData.password,
			}).then((res) => {
				console.log(res);
				console.log(res.data);
				toast.success('Cuenta creada con exito', {
					position: "top-center",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "light",
				});
			}).catch(err => {
				toast.error('Algo ha ocurrido, porfavor intente nuevamente', {
					position: "top-center",
					autoClose: 10000,
					hideProgressBar: false,
					closeOnClick: false,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: "dark",
				});
				console.log(err)
			})
		}
	};


    const classes = useStyles();
    return (
        <div className="Register">
            <div className={classes.root}>
     			<AppBar position="absolute">
        			<Toolbar>
          				<Typography variant="h6" className={classes.title}>
            				To Do App
          				</Typography>
          				<Button color="inherit">Login</Button>
						<Button color="inherit">Register</Button>
						<Button color="inherit">Logout</Button>
        			</Toolbar>
      			</AppBar>
    		</div>
			<CssBaseline />
			<div id="rrt" className={classes.paper}>
				<Avatar className={classes.avatar} id="avid"></Avatar>
				<Typography className="signup" component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Usuario"
								type="text"
								name="user"
								className="grid-item"
								id="fm"
                                onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								label="Email Address"
								type="email"
								name="email"
								className="grid-item"
								id="rmail"
                                onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								className="grid-item"
								label="Password"
								type="password"
								id="password1"
                                onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
                        onClick={handleSubmit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/login" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
            <ToastContainer />
		</div>
    );
}

export default Register;