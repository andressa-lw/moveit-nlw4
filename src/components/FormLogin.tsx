import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/components/Login.module.css'
import { signIn } from 'next-auth/client'
import axios from 'axios'

export function FormLogin() {
	const [user, setUser] = useState('')
	const [error, setError] = useState('')

	async function handleFormLogin(){
		if(!user){
			setError('Digite o nome de seu usuário do Github')
			return
		}

		try{
			const response = await axios.get(`https://api.github.com/users/${user}`)
			if(response.status == 200){
				setError('')
				signIn('github')
			}
		}catch{
			setError('Ocorreu um erro na requisição')
		} 
	}

	return (
		<>
			<Head>
				<title>Login | Move.it</title>
			</Head>
			<section className={styles.bgLogin}>
				<div className={styles.loginContainer}>
					<div className={styles.loginFormBox}>
						<img src="/logo-full.svg" alt="Logo" />

						<header>
							<h1>Bem-vindo</h1>
							<span><img src="/icons/github.svg" alt=""/><p>Faça login no seu Github para começar</p></span>
						</header>

						<form className={styles.loginFormInput}>
							<input type="text" placeholder="Digite seu username" onChange={e => setUser(e.target.value)} />
							<button type="button" onClick={handleFormLogin}><img src="/icons/arrow-login.svg" alt=""/></button>
						</form>
						{ error && <p className={styles.messageError}>{error}</p> }
					</div>
				</div>
			</section>
		</>
	)
}