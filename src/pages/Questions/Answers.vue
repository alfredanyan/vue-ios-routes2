<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn to="/questions" label="Questions" />
      </template>
      <template #title> Answer </template>
    </page-header>
    <page-body>
      <template #content>
         <div class="text-h5 q-mb-md">
          How do i get rich?
        </div>
      Incoming answers
      </template>
    </page-body>
  </page>
</template>

<script>
export default {
  name: "Answers",
};
</script>
