<template>
  <page>
    <page-header>
      <template #buttons-left>
        <page-header-back-btn
        label="Home"
        />
      </template>
      <template #title>
        Our Child App
      </template>
    </page-header>
    <page-body>
      <template #content>
        <div class="text-h5 q-mb-md">
          Creating IOS app
        </div>
         <q-btn
        to="/home/child/grandchild"
        label="go to grandchild"
        class="full-width q-mb-md"
        rounded
        unelevated
        color="primary"
        />
        <p>
        Our child page content.
        </p>
      </template>
    </page-body>
  </page>
</template>

<script>

export default {
  name: 'Child'
}
</script>
