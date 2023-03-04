<!-- svelte-ignore a11y-invalid-attribute -->
<header>
	<nav>
		<ul>
			<li><a href="/overview">Overview</a></li>
			<li class="dropdown">
				<a href="/price" class="dropbtn">Price</a>
				<div class="dropdown-content">
					<a href="/price/a">Price 1</a>
					<a href="/price/b">Price 2</a>
					<a href="/price/c">Price 3</a>
				</div>
			</li>
			<li class="dropdown">
				<a href="/orders" class="dropbtn">Orders</a>
				<div class="dropdown-content">
					<a href="/orders/a">Orders 1</a>
					<a href="/orders/b">Orders 2</a>
					<a href="/orders/c">Orders 3</a>
				</div>
			</li>
			<li class="dropdown">
				<a href="/products" class="dropbtn">Products</a>
				<div class="dropdown-content">
					<a href="/products/a">Products 1</a>
					<a href="/products/b">Products 2</a>
					<a href="/products/c">Products 3</a>
				</div>
			</li>
			<li class="dropdown">
				<a href="/support" class="dropbtn">Support</a>
				<div class="dropdown-content">
					<a href="/support/a">Support 1</a>
					<a href="/support/b">Support 2</a>
					<a href="/support/c">Support 3</a>
				</div>
			</li>
			<li><a href="/contact-us">Contact Us</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;

		nav {
			display: flex;
			justify-content: center;
			--background: rgba(255, 255, 255, 0.7);
			width: 100%;

			a {
				display: flex;
				height: 100%;
				align-items: center;
				padding: 0 0.5rem;
				color: var(--color-text);
				font-weight: 700;
				font-size: 0.8rem;
				text-transform: uppercase;
				letter-spacing: 0.1em;
				text-decoration: none;
				transition: color 0.2s linear;
			}

			ul {
				display: flex;
				list-style-type: none;
				margin: 0;
				padding: 0;
				overflow: hidden;
				background-color: #38444d;

				li {
					float: left;

					a, .dropbtn {
						display: inline-block;
						color: white;
						text-align: center;
						padding: 1rem;
						text-decoration: none;

						&:hover {
							background-color: red;
						}
					}


					.dropdown-content {
						display: none;
						position: absolute;
						background-color: #f9f9f9;
						min-width: 160px;
						box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
						z-index: 1;
						top: 2.9rem;

						a {
							color: black;
							padding: 12px 16px;
							text-decoration: none;
							display: block;
							text-align: left;
						}

						a:hover {
							background-color: #f1f1f1;
						}
					}

					&.dropdown:hover {
						div.dropdown-content {
							display: block;
						}
					}
				}
			}
		}
	}
</style>
