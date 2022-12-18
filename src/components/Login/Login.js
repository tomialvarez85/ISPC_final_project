import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css';
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


function Login(){
	const history = useHistory();
	const initialFormData = Object.freeze({
		user: '',
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
        if (document.getElementById('ffmm').value === "" || document.getElementById('rrmail').value === "" || document.getElementById('password2').value === ""){
			alert("Faltan datos");
		}
		else {
			axios.post('', {
				user: formData.uuser,
				password: formData.ppassword,
			}).then((res) => {
				console.log(res);
				console.log(res.data);
				history.push('/')
			}).catch(err => {
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
			<div id="rt" className={classes.paper}>
				<Avatar className={classes.avatar} id="avid"></Avatar>
				<Typography className="signup" component="h1" variant="h5">
					Sign in
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
								name="uuser"
								id="ffmm"
								className="grid-item"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="ppassword"
								id="password2"
								className="grid-item"
								label="Password"
								type="password"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/register" variant="body2">
								Dont have an account? Sign up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</div>
    );
}

export default Login;