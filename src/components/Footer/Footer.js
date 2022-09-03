import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.credits}>
				made by
				<strong>
					<a className={styles.contact} href="monishobaid@gmail.com">
						Monish Obaid
					</a>
				</strong>
			</p>
			<p className={styles.copyright}>copyright © 2022</p>
		</footer>
	);
}
