<template>
<div id="NavBar">
	<div>
		<b-navbar variant="success" type="dark">
			<b-navbar-brand>
				<b-icon icon="wallet2"></b-icon>
				My Wallet
			</b-navbar-brand>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item>
						<router-link to="/">Home</router-link>
					</b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav>
					<b-nav-item>
						<router-link to="/reports">Reports</router-link>
					</b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav>
					<b-nav-item>
						<router-link to="/wallets">Wallets</router-link>
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</div>
</template>

<style scoped>
nav {
	margin-bottom: 50px;
}

button {
	margin-left: 700px;
}

a {
	text-decoration:none;
	color: white;
}
</style>

<script>
export default {
	name: "NavBar"
};
</script>
