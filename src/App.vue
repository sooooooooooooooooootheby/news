<template>
	<div>
		<div class="fixed w-full z-10 bg-base-100">
			<AppHeader />
			<TabList />
		</div>
		<div class="pt-24">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import TabList from "./components/TabList.vue";
</script>
