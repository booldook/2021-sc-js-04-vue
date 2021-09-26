<template>
	<div>
		<Header></Header>
		<TitleBar></TitleBar>
		<SearchBar></SearchBar>
		<ProductWrap></ProductWrap>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import TitleBar from './components/TitleBar.vue'
import SearchBar from './components/SearchBar.vue'
import ProductWrap from './components/ProductWrap.vue'


export default {
	components: { Header, TitleBar, SearchBar, ProductWrap }
}
</script>

<style>
	
</style>