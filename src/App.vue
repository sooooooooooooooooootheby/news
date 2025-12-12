<template>
	<div>
		<div class="bg-base-100 fixed z-10 w-full">
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
