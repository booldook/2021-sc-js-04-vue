<template>
	<div>
		<h1>ProductWrap</h1>
		<ul class="product-wrap">
			<Product />
			<Product />
			<Product />
			<Product />
		</ul>
	</div>
</template>

<script>
import Product from './Product.vue'

export default {
	components: { Product }
}
</script>

<style>
.product-wrap {display: flex;}
</style>