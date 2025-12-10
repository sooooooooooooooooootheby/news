<template>
	<div>
		<AppHeader />
		<TabList />
		<router-view></router-view>
	</div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import TabList from "./components/TabList.vue";
</script>
